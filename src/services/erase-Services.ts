import { EraseUserRepository } from "../repositories/erase-Repository";

export async function EraseUserService (userId: number) {
  await EraseUserRepository(userId);
}