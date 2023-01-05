import { tweetSchema, userSchema } from "./schemas.js"

let users = []
let tweets = []


export function signUp(req, res){

    const user = req.body 

    const validation = userSchema.validate(user)

    if(validation.error){
        res.status(400).send('Todos os campos são obrigatórios!')
        return
    }
 
    users.push(user)
 
    res.status(201).send("OK")
 }

 export function sendTweet(req, res){


    const message = req.body

    const user = users.find((user) => user.username === message.username)

    const validation = tweetSchema.validate(message)

    if(validation.error){
        res.status(400).send('Todos os campos são obrigatórios!')
        return
    }


    if(!user){

        res.status(401).send("UNAUTHORIZED")
    }else{
        const avatar = user.avatar
        const body = {...message, avatar}

        tweets.push(body)
        res.status(201).send("OK")
    }


}


export function getTweets(req, res){

    const feed = tweets.slice(-10)

    res.send(feed)
}

export function getTweetsByUser(req, res){

    const {username} = req.params

    const userTweets = tweets.filter((tweet) =>tweet.username === username )

    res.send(userTweets)
}
