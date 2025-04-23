import joi from "joi";
import { BodyCredential, BodySignIn, BodySignUp } from "protocols/types";

export const signUpSchema = joi.object<BodySignUp>({
  name: joi.string().trim().required(),
  email: joi.string().trim().email().required(),
  password: joi.string().trim().required()
});

export const signInSchema = joi.object<BodySignIn>({
  email: joi.string().trim().email().required(),
  password: joi.string().trim().required()
});

export const credentialSchema = joi.object<BodyCredential>({
  title: joi.string().trim().required(),
  url: joi.string().trim().required(),
  username: joi.string().trim().required(),
  password: joi.string().trim().required()
});