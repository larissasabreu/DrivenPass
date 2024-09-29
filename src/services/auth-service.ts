import { users } from "@prisma/client";
import { SignUpUsersRepository, GetUsersRepository, SignInUsersRepository } from "../repositories/auth-repository";
import { EmailLogin } from "protocols/types";

export async function SignUpUsersService(user: users) : Promise<users> {
    const PostUsers = SignUpUsersRepository(user);
    return PostUsers;
}

export async function GetUsersService() : Promise<users[]>  {
    const GetUsers = GetUsersRepository();
    return GetUsers;
}

export async function SignInUsersService(userReq: EmailLogin) : Promise<users> {
    const GetUser = SignInUsersRepository(userReq);
    return GetUser;
}