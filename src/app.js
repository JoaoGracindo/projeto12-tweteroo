import express, { json } from "express"
import cors from "cors"
import dotenv from 'dotenv'
dotenv.config()
import { signUp, sendTweet, getTweets, getTweetsByUser } from "./controllers.js"

const app = express()
app.use(cors())
app.use(json())



app.post("/sign-up", signUp)

app.post("/tweets", sendTweet)

app.get("/tweets", getTweets)

app.get('/tweets/:username', getTweetsByUser)




app.listen(process.env.URI, ()=> console.log("server is listening..."))