import { users } from "@prisma/client";
import prisma from "../config/db";
import bcrypt from 'bcrypt';
import { EmailLogin } from "protocols/types";

export async function SignUpUsersRepository(user: users) : Promise<users>  {
    const {user_name, email, password} = user
    const passwordHash = bcrypt.hashSync(password, 10);

    const NewUser = {
        user_name: user_name,
        email: email,
        password: passwordHash
    }

    const InsertUser = await prisma.users.create({
        data: NewUser
    });

    return InsertUser; 
}

export async function GetUsersRepository() : Promise<users[]>  {
    const GetUser = await prisma.users.findMany();
    return GetUser; 
}

export async function SignInUsersRepository(userReq: EmailLogin) : Promise<users>  {

    const findUser = await prisma.users.findFirst({where: userReq})
    return findUser
}