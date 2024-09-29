import { GetCredentialsByUserRepository, PostCredentialsRepository, EditCredentialsByIdRepository, GetCredentialsByIdRepository } from "../repositories/credentials-repository";
import { credentials } from "@prisma/client";

export async function GetCredentialsByUserService(user: number) : Promise<credentials[]> {
    const GetCredentials = GetCredentialsByUserRepository(user);
    return GetCredentials;
}

export async function PostCredentialsService(credentialsReq: credentials) : Promise<credentials> {
    const InsertCredentials = PostCredentialsRepository(credentialsReq);
    return InsertCredentials;
}

export async function EditCredentialsByIdService(credentialsREQ: credentials) : Promise<credentials> {
    const EditCredentials = EditCredentialsByIdRepository(credentialsREQ);
    return EditCredentials;
}

export async function GetCredentialsByIdService(id: number) : Promise<credentials> {
    const GetCrendetials = GetCredentialsByIdRepository(id);
    return GetCrendetials;
}