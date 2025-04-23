import { Request, Response } from "express";
import { BodyCredential } from "../protocols/types";
import {PostCredentialsService, GetCredentialsService, GetCredentialByIdService, EditCredentialsService, EraseCredentialsService} from "../services/credentials-Services";
import httpStatus from "http-status";

// adiciona uma credencial de acordo com o usuário
export async function PostCredentialsController (req: Request, res: Response) {
  const body = req.body as BodyCredential;
  const userId: number = res.locals.userId;
  await PostCredentialsService(body, userId);
  res.sendStatus(httpStatus.CREATED);
}

// pega todas as credenciais registradas do usuário
export async function GetCredentialsController (req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const credentials = await GetCredentialsService(userId);
  res.status(httpStatus.OK).send(credentials);
}

// procura credencial pelo /id da credencial de acordo com o usuário
export async function GetCredentialByIdController (req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const { id } = req.params;
  const credential = await GetCredentialByIdService(id, userId);
  res.status(httpStatus.OK).send(credential);
}

// edita a credencial de acordo com o usuário
export async function EditCredentialsController (req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const { id } = req.params;
  const body = req.body as BodyCredential;
  await EditCredentialsService(id, body, userId);
  res.sendStatus(httpStatus.NO_CONTENT);
}

// deleta a credencial de acordo com o usuário
export async function EraseCredentialsController (req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const { id } = req.params;
  await EraseCredentialsService(id, userId);
  res.sendStatus(httpStatus.NO_CONTENT);
}
