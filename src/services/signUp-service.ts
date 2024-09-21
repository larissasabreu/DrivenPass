import { users } from "@prisma/client";
import { SignUpUsersRepository, GetUsersRepository } from "../repositories/signUp-repository";

export async function SignUpUsersService(user: users) {
    const PostUsers = SignUpUsersRepository(user);
    return PostUsers;
}

export async function GetUsersService() {
    const GetUsers = GetUsersRepository();
    return GetUsers
}