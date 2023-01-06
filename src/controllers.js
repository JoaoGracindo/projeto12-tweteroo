import { tweetSchema, userSchema } from "./schemas.js";

const users = [];
const tweets = [];


export function signUp(req, res){

    const user = req.body ;

    const validation = userSchema.validate(user);

    if(validation.error){
        res.status(400).send('Todos os campos são obrigatórios!');
        return;
    }
 
    users.push(user);
 
    res.status(201).send("OK");
 }

 export function sendTweet(req, res){


    const tweet = req.body;

    const {user} = req.headers;

    const isOnline = users.find((obj) => obj.username === user);

    const validation = tweetSchema.validate(tweet);



    if(validation.error){
        res.status(400).send('Todos os campos são obrigatórios!');
        return;
    }


    if(!isOnline){

        res.status(401).send("UNAUTHORIZED");
    }else{
        const body = {username: user, avatar: isOnline.avatar, ...tweet};

        tweets.push(body);
        res.status(201).send("OK");
    }


}


export function getTweets(req, res){

    const {page} = req.query;

    if(!page || Number(page) === 1){
        res.send(tweets.slice(-10).reverse());
        return;
    }else if(Number(page) < 1 || isNaN(Number(page))){
        res.status(400).send("Informe uma pagina valida");
    }

    const start = -10*page;
    const end = start + 10;

    const feed = tweets.slice(start, end).reverse();

    res.send(feed);
}

export function getTweetsByUser(req, res){

    const {username} = req.params;

    const userTweets = tweets.filter((tweet) =>tweet.username === username );

    res.send(userTweets);
}
