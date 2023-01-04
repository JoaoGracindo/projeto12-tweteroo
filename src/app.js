import express, { json } from "express"
import cors from "cors"
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())
app.use(json())


let users = []
let tweets = []

app.post("/sign-up", (req, res) => {

   const user = req.body 

   users.push(user)

   res.sendStatus(201)
})

app.get("/", (req, res) => {

    res.send(users)
})



app.listen(process.env.URI, ()=> console.log("server is listening..."))