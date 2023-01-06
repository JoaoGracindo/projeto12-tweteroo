import Joi from "joi";

const userSchema = Joi.object({
    username: Joi.required(),
    avatar: Joi.required()
}) ;

const tweetSchema = Joi.object({
    username: Joi.required(),
    tweet: Joi.required()
});

export {tweetSchema, userSchema};