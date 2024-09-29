import { credentials } from "@prisma/client";
import Joi from "joi";
import { UserId } from "protocols/types";

export const credentialsSchema = Joi.object<credentials>({
    user_id:  Joi.number().required(),
    title:  Joi.string().required(),
    url: Joi.string().required(),
    password:  Joi.string().required()
})

export const UserIdSchema = Joi.object<UserId>({
    id:  Joi.number().required()
})

// model credentials {
//     id Int @id @default(autoincrement())
//     user_id Int
//     users users @relation(fields: [user_id], references: [id])
//     title String
//     url String
//     password String
//   }