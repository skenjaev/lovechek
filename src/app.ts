import express from "express"
import path from "path"



// Entrance;
const app = express()
app.use(express.static(path.join(__dirname, "public")))  // Middle ware Pattern -- Design patern ga tegishli 
app.use(express.urlencoded({extended: true})) // Middle ware pattern Traditional API requist ni qabul qiladi
app.use(express.json()) //Middle ware pattern--json bolib kelgan requist ni object ga ugirib beradi-yani Rest API bolib requist kelgan Data larni Json ni otqizadi yani ruhsat beradi

// Session ;


// View;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// Routers: 



export default app  // buyerda export bolyapti 