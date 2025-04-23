import { Request, Response } from "express";
import httpStatus from "http-status";
import { EraseUserService } from "../services/erase-Services";

export async function EraseUserController (req: Request, res: Response) {
  const userId: number = res.locals.userId;
  await EraseUserService(userId);
  res.sendStatus(httpStatus.NO_CONTENT);
}