import { Router } from "express";
import { GetCredentialsByUserController, PostCredentialsController } from "../controllers/credentials-controller";
import { validateSchema } from "../middlewares/schemas-middleware";
import { credentialsSchema } from "../schemas/credentials-schemas";

const credentialsRouter = Router();

credentialsRouter.get("/credentials", GetCredentialsByUserController);
credentialsRouter.post("/credentials", validateSchema(credentialsSchema), PostCredentialsController);

export default credentialsRouter;