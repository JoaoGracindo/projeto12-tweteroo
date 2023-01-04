let users = []
let tweets = []


export function signUp(req, res){

    const user = req.body 
 
    users.push(user)
 
    res.status(201).send("OK")
 }

 export function sendTweet(req, res){


    const message = req.body

    const user = users.filter((user) => user.username === message.username)


    if(!user[0]){

        res.status(401).send("UNAUTHORIZED")
    }else{
        const avatar = user[0].avatar
        const body = {...message, avatar}

        tweets.push(body)
        res.status(201).send("OK")
    }


}


export function getTweets(req, res){

    const feed = tweets.slice(-10)

    res.send(feed)
}
