import { users } from "@prisma/client";

export type EmailLogin = Omit<users, "id" | "user_name" | "password">;

export type Login = Omit<users, "id" | "user_name">;

export type UserId = {
    id: number
}