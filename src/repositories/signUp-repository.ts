import { users } from "@prisma/client";
import prisma from "../config/db";

export async function SignUpUsersRepository(user: users) {
    const InsertUser = await prisma.users.create({
        data: user
    });

    return InsertUser; 
}

export async function GetUsersRepository() {
    const GetUser = await prisma.users.findMany();
    return GetUser; 
}