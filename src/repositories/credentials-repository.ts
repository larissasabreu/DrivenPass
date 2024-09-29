import prisma from "../config/db";
import { credentials } from "@prisma/client";
import Cryptr from "cryptr";
import dotenv from 'dotenv'
dotenv.config();

export async function GetCredentialsByUserRepository(user: number) : Promise<credentials[]> { 
    
    const GetCredentials = await prisma.credentials.findMany({
    where: {
    user_id: user
    }
    })

    return GetCredentials
}

export async function GetCredentialsByIdRepository(id: number) : Promise<credentials>  { 
    
    const GetCredentials = await prisma.credentials.findFirst({
      where: { id }
   })
    return GetCredentials

}

export async function EditCredentialsByIdRepository(CredentialsREQ: credentials) : Promise<credentials>  {
    const {user_id, title, url, password} = CredentialsREQ
    const Cryptr = require('cryptr');
    const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
    const passwordEncrypted = cryptr.encrypt(password, 10)

    const NewCredential = {
        user_id: user_id,
        title: title,
        url: url,
        password: passwordEncrypted
    }

    const updateCrendentials = await prisma.credentials.update({
        where: {
          id: CredentialsREQ.id,
        },
        data: {
            user_id: NewCredential.user_id,
            title: NewCredential.title,
            url: NewCredential.url,
            password: NewCredential.password
        },
      });

    return updateCrendentials
}

export async function PostCredentialsRepository(credentialsReq: credentials) : Promise<credentials>  {
    const {user_id, title, url, password} = credentialsReq
    const Cryptr = require('cryptr');
    const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
    const passwordEncrypted = cryptr.encrypt(password, 10)

    const NewCredential = {
        user_id: user_id,
        title: title,
        url: url,
        password: passwordEncrypted
    }

    const InsertCredentials = await prisma.credentials.create({
        data: NewCredential
    });
    
    return InsertCredentials
}