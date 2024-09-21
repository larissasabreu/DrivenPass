import Joi from "joi";
import { users } from "@prisma/client";

export const signUpSchema = Joi.object<users>({
    user_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})