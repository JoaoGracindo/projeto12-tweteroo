import Joi from "joi";

const userSchema = Joi.object({
    username: Joi.string()
        .min(1)
        .required(),
    avatar: Joi.string()
    .min(1)
    .required()
});

const tweetSchema = Joi.object({
    tweet: Joi.string()
    .min(1)
    .required(),
});

export {tweetSchema, userSchema};