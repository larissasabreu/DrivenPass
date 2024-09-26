import { DeleteUserRepository } from "../repositories/erase-repository";

export async function DeleteUserService(id: number) {
    const DeleteUser = DeleteUserRepository(id);
    return DeleteUser;
}