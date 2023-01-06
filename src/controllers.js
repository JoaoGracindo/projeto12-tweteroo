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


    const {tweet} = req.body

    const {user} = req.headers

    const {avatar} = users.find((user) => user.username === username)

    const message = {username:user, tweet}

    const validation = tweetSchema.validate(message)



    if(validation.error){
        res.status(400).send('Todos os campos são obrigatórios!')
        return
    }


    if(!avatar){

        res.status(401).send("UNAUTHORIZED")
    }else{
        const body = {username, avatar, message}

        tweets.push(body)
        res.status(201).send("OK")
    }


}


export function getTweets(req, res){

    const {page} = req.query

    if(!page){
        res.send(tweets.slice(-10))
        return
    }else if(Number(page) < 1 || isNaN(Number(page))){
        res.status(400).send("Informe uma pagina valida")
    }

    const start = -10*page
    const end = start + 9

    const feed = tweets.slice(start, end)

    res.send(feed)
}

export function getTweetsByUser(req, res){

    const {username} = req.params

    const userTweets = tweets.filter((tweet) =>tweet.username === username )

    res.send(userTweets)
}
