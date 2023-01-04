let users = []
let tweets = []


export function signUp(req, res){

    const user = req.body 
 
    users.push(user)
 
    res.status(201).send("OK")
 }

 export function sendTweet(req, res){

    const loggedUsers = users.map((user) => user.username)

    const tweet = req.body

    if(loggedUsers.some((user) => user === tweet.username)){

        tweets.push(tweet)

        res.status(201).send("OK")
        console.log(tweets)
    }else{

        res.status(401).send("UNAUTHORIZED")
    }


}

export function get(req, res){

    res.send(users)
}