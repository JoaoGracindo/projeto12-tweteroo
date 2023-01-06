import Joi from "joi";

const userSchema = Joi.object({
    username: Joi.required()
                 .string()
                 .min(1),
    avatar: Joi.required()
                .string()
                .min(1)
});

const tweetSchema = Joi.object({
    username: Joi.required(),
    tweet: Joi.required()
});

export {tweetSchema, userSchema};