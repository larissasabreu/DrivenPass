import { SignUpUsersService, GetUsersService } from "../services/signUp-service";
import {Request, Response} from 'express';

export async function SignUpUsersController(req: Request, res: Response) {
    const SignUpReq = req.body;

    try {
    const PostUsers = await SignUpUsersService(SignUpReq);
    res.status(200).send(PostUsers)
    } catch (error) {
    res.status(401).send(error.name)
    }
}

export async function GetUsersController(req: Request, res: Response) {

    try {
        const GetUser = await GetUsersService();
        res.status(200).send(GetUser)
    } catch (error) {
        res.status(404).send(error.name)
    }
}