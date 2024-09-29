import prisma from "../config/db";
import { credentials } from "@prisma/client";

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
    
    const updateCrendentials = await prisma.credentials.update({
        where: {
          id: CredentialsREQ.id,
        },
        data: {
            user_id: CredentialsREQ.user_id,
            title: CredentialsREQ.title,
            url: CredentialsREQ.url,
            password: CredentialsREQ.password
        },
      });

    return updateCrendentials
}

export async function PostCredentialsRepository(credentialsReq: credentials) : Promise<credentials>  {

    const InsertCredentials = await prisma.credentials.create({
        data: credentialsReq
    });
    
    return InsertCredentials
}