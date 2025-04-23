import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { unauthorizedError } from "../errors/errors";
dotenv.config();

export async function validadeToken(req: Request, res: Response, next: NextFunction) {
  // header
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer", "").trim();
  if (!token) throw unauthorizedError("");

 // validação do usuario
  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) throw unauthorizedError("");
    if (!decoded || typeof decoded !== 'object') throw unauthorizedError("");
    const userId = decoded.userId;
    if (!userId) throw unauthorizedError("");
    res.locals.userId = userId;

    next();
  });
}