import { Router } from "express";
import { validateSchema } from "../middlewares/schema-Middleware";
import { signInSchema, signUpSchema } from "../schemas/schemas";
import { PostSignInController, PostSignUpController } from "../controllers/auth-Controller";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema(signUpSchema), PostSignUpController);
authRouter.post("/sign-in", validateSchema(signInSchema), PostSignInController);

export default authRouter;