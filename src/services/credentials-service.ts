import { UserId } from "protocols/types";
import { GetCredentialsByUserRepository, PostCredentialsRepository } from "../repositories/credentials-repository";
import { credentials } from "@prisma/client";

export async function GetCredentialsByUserService(id: UserId) {
    const GetCredentials = GetCredentialsByUserRepository(id);
    return GetCredentials;
}

export async function PostCredentialsService(credentialsReq) {
    const InsertCredentials = PostCredentialsRepository(credentialsReq);
    return InsertCredentials;
}