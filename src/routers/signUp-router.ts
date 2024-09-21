import { Router } from "express";
import { SignUpUsersController, GetUsersController } from "../controllers/signUp-controller";
import { validateSchema } from "../middlewares/schemas-middleware";
import { signUpSchema } from "../schemas/signUp-schemas";

const SignUpRouter = Router();

SignUpRouter.post("/sign-up", validateSchema(signUpSchema), SignUpUsersController);
SignUpRouter.get("/sign-up", GetUsersController);

export default SignUpRouter;