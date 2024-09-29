import { SignUpUsersService, GetUsersService, SignInUsersService } from "../services/auth-service";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import {Request, Response} from 'express';

export async function SignUpUsersController(req: Request, res: Response) {
    const SignUpReq = req.body;

    try {
    const PostUsers = await SignUpUsersService(SignUpReq);
    res.status(200).send(PostUsers)
    } catch (error) {
    res.status(401).send(error)
    }
}

export async function GetUsersController(req: Request, res: Response) {

    try {
        const GetUsers = await GetUsersService();
        res.status(200).send(GetUsers)
    } catch (error) {
        res.status(404).send(error)
    }
}

export async function SignInUsersController(req: Request, res: Response) {
    const {email, password} = req.body;

    try {

    const GetUser = await SignInUsersService({email})
    
    if (GetUser && bcrypt.compareSync(password, GetUser.password)) {

        const token = jwt.sign({id: GetUser.id}, process.env.JWT_SECRET, {expiresIn: 86400})
        console.log(token)
        res.status(200).send(token) 
    } else {
        res.status(401).send('Email ou senha não correspondentes!')
    }} catch (error) {
        res.status(400).send(error)
    }
}
