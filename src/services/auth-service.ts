import { users } from "@prisma/client";
import { SignUpUsersRepository, GetUsersRepository, SignInUsersRepository } from "../repositories/auth-repository";
import { EmailLogin } from "protocols/types";

export async function SignUpUsersService(user: users) {
    const PostUsers = SignUpUsersRepository(user);
    return PostUsers;
}

export async function GetUsersService() {
    const GetUsers = GetUsersRepository();
    return GetUsers;
}

export async function SignInUsersService(userReq: EmailLogin) {
    const GetUser = SignInUsersRepository(userReq);
    return GetUser;
}