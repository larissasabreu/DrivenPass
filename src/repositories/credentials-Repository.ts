import { BodyCredential } from "../protocols/types";
import prisma from "../config/db";

// procura as credentials pelo titulo e pelo id do usuário
export async function GetCredentialByTitleAndIdRepo (title: string, userId: number) {
  return await prisma.credential.findFirst({
    where: {
      title: title,
      user_id: userId,
    },
  });
}

// salva a credencial
export async function PostCredentialsRepository (body: BodyCredential, userId: number, hashedPassword: string) {
  const { title, url, username } = body;

  return await prisma.credential.create({
    data: {
      title: title,
      url: url,
      username: username,
      password: hashedPassword,
      user_id: userId,
    },
  });
}

// procura todas as credenciais de um usuário pelo id
export async function GetCredentialsRepository (user_id: number) {
  return await prisma.credential.findMany({
    where: {
      user_id: user_id,
    },
  });
}

// procura credencial pelo id e pelo usuário
export async function GetCredentialByIdRepository (id: number, user_id: number) {
  return await prisma.credential.findFirst({
    where: {
      id: id,
      user_id: user_id,
    },
  });
}

// edita a credencial
export async function EditCredentialsRepository (id: number, body: BodyCredential, user_id: number, hashedPassword: string) {
  const { title, url, username } = body;

  return await prisma.credential.update({
    where: {
      id: id,
      user_id: user_id,
    },
    data: {
      title: title,
      url: url,
      username: username,
      password: hashedPassword,
    },
  });
}

// deleta a credencial
export async function EraseCredentialsRepository (id: number, user_id: number) {
  return await prisma.credential.delete({
    where: {
      id: id,
      user_id: user_id,
    },
  });
}