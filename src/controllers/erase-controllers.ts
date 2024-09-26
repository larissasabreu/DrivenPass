import { DeleteUserService } from "../services/erase-service";
import {Request, Response} from 'express';

export async function DeleteUserController(req: Request, res: Response) {
    const { id } = req.params
    console.log(id)
    const user_id = parseInt(id)

    try {
        const DeleteUser = DeleteUserService(user_id) 
        res.status(200).send(DeleteUser)
    } catch (error) {
        res.status(400).send(error)
    }
}