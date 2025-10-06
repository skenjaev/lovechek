import cors from "cors";
import express from 'express';
import path from 'path';
import routerAdmin from "./router-admin";
import router from "./router";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import { MORGAN_FORMAT } from './libs/config';
import { Server as SocketIOServer } from "socket.io";
import http from "http";
import { OpenAI } from 'openai';
import { T } from './libs/type/common';

/**  1-ENTRANCE  **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());
app.use(morgan(MORGAN_FORMAT));

/**  2-SESSIONS  **/
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: { maxAge: 1000 * 3600 * 6 }, // 6h
    store: MongoStore.create({
      mongoUrl: String(process.env.MONGO_URL),
      collectionName: 'sessions',
    }),
    resave: true,
    saveUninitialized: true,
  })
);

app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
});

/**  3-VIEWS  */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**  4-ROUTERS  **/
app.use("/", router);       // REACT
app.use("/admin", routerAdmin);  // EJS

/**  5-OpenAI Endpoint  **/


const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/openai/generate', async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ status: 'error', text: 'Text is required' });
    }

    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant. Always give complete, well-structured answers. Never cut off your thoughts mid-sentence.`
        },
        { role: 'user', content: text }
      ],
      temperature: 0.7,
      max_tokens: 1024,
    });

    const aiText = chatCompletion.choices[0].message?.content || 'No response received.';

    res.json({ text: aiText, status: 'success' });
  } catch (error) {
    console.error('Error generating OpenAI response:', error);
    let errorMessage = 'An error occurred while generating content.';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    res.status(500).json({
      status: 'error',
      text: errorMessage,
      error: errorMessage,
    });
  }
});

/**  6-SOCKET.IO  **/
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: true,
    credentials: true,
  },
});

let summaryClient = 0;
io.on("connection", (socket) => {
  summaryClient++;
  console.log(`Connection & total: [${summaryClient}]`);

  socket.on("disconnect", () => {
    summaryClient--;
    console.log(`Disconnection & total: [${summaryClient}]`);
  });
});

export default server;