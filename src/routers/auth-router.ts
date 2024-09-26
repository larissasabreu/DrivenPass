import { Router } from "express";
import { SignUpUsersController, GetUsersController, SignInUsersController } from "../controllers/auth-controller";
import { validateSchema } from "../middlewares/schemas-middleware";
import { signInSchema, signUpSchema } from "../schemas/auth-schemas";

const AuthRouter = Router();

AuthRouter.post("/sign-up", validateSchema(signUpSchema), SignUpUsersController);
AuthRouter.get("/sign-up", GetUsersController);
AuthRouter.post("/sign-in", validateSchema(signInSchema), SignInUsersController);


export default AuthRouter;