import bodyParser from "body-parser"
import express, { Request, Response } from "express"
import cors from "cors"
import sequelize from "./config/database"
import pokeRoute from "./routes/pokedex"
require('dotenv').config()

declare global {
    var __basedir:string
}
global.__basedir = __dirname

const port = process.env.PORT || 4000 
const app = express()

app.use(cors({ origin: true, credentials: true }));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use("/api/pokedexs", pokeRoute)

sequelize.sync().then(() => {
    console.log("Database synced successfully")
}).catch((err) => {
    console.log("Err", err)
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})