import { Request, Response } from "express";
import { BodySignIn, BodySignUp } from "../protocols/types";
import httpStatus from "http-status";
import {PostSignUpServices, PostSignInServices} from "../services/auth-Services";

export async function PostSignUpController (req: Request, res: Response) {
  const body = req.body as BodySignUp;
  await PostSignUpServices(body);

  res.sendStatus(httpStatus.CREATED);
}

export async function PostSignInController (req: Request, res: Response) {
  const body = req.body as BodySignIn;
  const token = await PostSignInServices(body);

  res.status(httpStatus.OK).send(token);
}