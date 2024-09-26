import prisma from "../config/db";
import { credentials } from "@prisma/client";
import { UserId } from "protocols/types";

export async function GetCredentialsByUserRepository(user: UserId) { 
    
const GetCredentials = await prisma.credentials.findMany({
  where: {
    user_id: user.id
    }
    })

    return GetCredentials
}

export async function PostCredentialsRepository(credentialsReq: credentials) {

    const InsertCredentials = await prisma.credentials.create({
        data: credentialsReq
    });
    
    return InsertCredentials
}