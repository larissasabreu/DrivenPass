import Joi from "joi";
import { users } from "@prisma/client";
import { Login } from "protocols/types";

export const signUpSchema = Joi.object<users>({
    user_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

export const signInSchema = Joi.object<Login>({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})