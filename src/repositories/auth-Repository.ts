import prisma from "../config/db";
import bcrypt from "bcrypt";


// cria novo usuário
export async function PostSignUpRepository (name: string, email: string, password: string) {
  return await prisma.user.create({
    data: {
      name,
      email,
      password: bcrypt.hashSync(password, 10),
    },
  });
}

// verifica se o email existe na db
export async function GetEmail(email: string) {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
}