import { BodyCredential } from "../protocols/types";
import Cryptr from "cryptr";
import { conflictError, notFoundError} from "../errors/errors";
import {GetCredentialByTitleAndIdRepo, PostCredentialsRepository, GetCredentialsRepository, GetCredentialByIdRepository, EditCredentialsRepository, EraseCredentialsRepository } from "../repositories/credentials-Repository";

const cryptr = new Cryptr("cryptr");

export async function PostCredentialsService (body: BodyCredential, userId: number) {
  // procura se já existe uma credencial com o mesmo título pelo usuário no db
  const existingCredential = await GetCredentialByTitleAndIdRepo(body.title, userId);
  if (existingCredential) throw conflictError("Credential");

  const hashedPassword = cryptr.encrypt(body.password);
  await PostCredentialsRepository(body, userId, hashedPassword);
}

export async function GetCredentialsService (user_id: number) {
  const credentials = await GetCredentialsRepository(user_id);

  // decripta a credencial para mostrar
  const decryptedCredentials = credentials.map((credential) => {
    return {
      ...credential,
      password: cryptr.decrypt(credential.password),
    };
  });

  return decryptedCredentials;
}

export async function GetCredentialByIdService (id: string, user_id: number) {
  const credential = await GetCredentialByIdRepository(
    Number(id),
    user_id
  );
  if (!credential) throw notFoundError("Credential");

  // decripta a credencial para mostrar
  const decryptedCredential = {
    ...credential,
    password: cryptr.decrypt(credential.password),
  };

  return decryptedCredential;
}

export async function EditCredentialsService (id: string, body: BodyCredential, user_id: number) {
  // procura se a credencial existe
  const credential = await GetCredentialByIdRepository(
    Number(id),
    user_id
  );
  if (!credential) throw notFoundError("Credencial");

  // encripta a senha da credencial para salvar
  const hashedPassword = cryptr.encrypt(body.password);

  await EditCredentialsRepository(
    Number(id),
    body,
    user_id,
    hashedPassword
  );
}

export async function EraseCredentialsService (id: string, user_id: number) {
  // procura se a credencial existe
  const credential = await GetCredentialByIdRepository(
    Number(id),
    user_id
  );
  if (!credential) throw notFoundError("Credential");

  await EraseCredentialsRepository(Number(id), user_id);
}