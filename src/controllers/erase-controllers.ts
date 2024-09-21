import { GetCredentialsByUserService } from "../services/credentials-service";
import { Response, Request } from "express";

export async function GetCredentialsByUserController(res: Response, req: Request) {
    const id = req.body
    const GetCredentials = GetCredentialsByUserService(id);

    res.status(200).send(GetCredentials)
}