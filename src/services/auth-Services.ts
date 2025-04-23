import { notFoundError, conflictError, unauthorizedError } from "../errors/errors";
import { BodySignIn, BodySignUp } from "../protocols/types";
import {GetEmail, PostSignUpRepository} from "../repositories/auth-Repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Registra
export async function PostSignUpServices (body: BodySignUp) {
  const { name, email, password } = body;

  // procura se o email já está registrado
  const userExists = await GetEmail(email);
  if (userExists) throw conflictError("Usuário");

  await PostSignUpRepository(name, email, password);
}

// Login
export async function PostSignInServices (body: BodySignIn) {
  const { email, password } = body;

  // procura se é um email já registrado
  const user = await GetEmail(email);
  if (!user) throw notFoundError("Email");

  // compara senha
  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) throw unauthorizedError("Senha");

  // gera token
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  return token;
}
