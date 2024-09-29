import { EditCredentialsByIdService, GetCredentialsByIdService, GetCredentialsByUserService, PostCredentialsService } from "../services/credentials-service";
import { Response, Request } from "express";
import Cryptr from "cryptr";

export async function GetCredentialsByUserController(req: Request, res: Response) {
    const { id } = req.params;
    const user = parseInt(id)

    try {
    const GetCredentials = await GetCredentialsByUserService(user);

    // const Cryptr = require('cryptr');
    // const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
    // const EncryptPassword = GetCredentials.password;

    // const passwordDecrypted = cryptr.decrypt(EncryptPassword)

    // const credentials = {
    //     user_id: GetCredentials.user_id,
    //     title: GetCredentials.title,
    //     url: GetCredentials.url,
    //     password: passwordDecrypted
    // }
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

export async function EditCredentialsByIdController(req: Request, res: Response) {
    const credentialsReq = req.body;
    
    try {
        const EditCredentials = await EditCredentialsByIdService(credentialsReq);
        res.status(201).send(EditCredentials) 
    } catch (error) {
        res.status(400).send(error)
    }
}

export async function GetCredentialsByIdController(req: Request, res: Response) {
    const { id } = req.params

    console.log(id)
    const user_id = parseInt(id)

    try {
    const GetCredentials = await GetCredentialsByIdService(user_id);

    const Cryptr = require('cryptr');
    const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
    const EncryptPassword = GetCredentials.password;

    const passwordDecrypted = cryptr.decrypt(EncryptPassword)

    const credentials = {
        id: GetCredentials.id,
        user_id: GetCredentials.user_id,
        title: GetCredentials.title,
        url: GetCredentials.url,
        password: passwordDecrypted
    }
        res.status(200).send(credentials);
    } catch (error) {
        res.status(400).send(error)
    }
}