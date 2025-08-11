console.log("EXECUTED")

import dotenv from "dotenv" // dotenv bizga ".env" ni ichidan uqishga imkoniyat hosil qildi
dotenv.config()
import moment from "moment"  // ModuleJs da "import" ishlatiladi 
import mongoose from "mongoose"
import app from "./app" // chaqirilyapti ( express );
import { format } from "morgan"


mongoose.connect(process.env.MONGO_URL as string, {})
.then((data) => {
    console.log("MongoDB connection succeed")
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
        console.info(`The server is running successfully on PORT: ${PORT}`)
        console.info(`Admin project on http://localhost:${PORT}/admin \n`)
    })
}).catch((err) => {
    console.log("Error on connection MongoDB", err)
})

