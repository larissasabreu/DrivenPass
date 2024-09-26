import { GetCredentialsByUserService, PostCredentialsService } from "../services/credentials-service";
import { Response, Request } from "express";

export async function GetCredentialsByUserController(req: Request, res: Response) {
    const id = req.body;

    try {
    const GetCredentials = await GetCredentialsByUserService(id);
    res.status(200).send(GetCredentials);
    } catch (error) {
    res.status(400).send(error)
    }
}

export async function PostCredentialsController(req: Request, res: Response) {
    const credentialsReq = req.body;

    try {
    const InsertCredentials = await PostCredentialsService(credentialsReq);
    res.status(200).send(InsertCredentials)
    } catch (error) {
    res.status(400).send(error)
    }
}