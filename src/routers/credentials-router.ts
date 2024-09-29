import { Router } from "express";
import { EditCredentialsByIdController, GetCredentialsByIdController, GetCredentialsByUserController, PostCredentialsController } from "../controllers/credentials-controller";
import { validateSchema } from "../middlewares/schemas-middleware";
import { credentialsSchema } from "../schemas/credentials-schemas";
import { validateToken } from "../middlewares/auth-middleware";
const credentialsRouter = Router();

credentialsRouter.get("/UserCredentials/:id", validateToken, GetCredentialsByUserController);
credentialsRouter.get("/credentials/:id", validateToken, GetCredentialsByIdController)
credentialsRouter.post("/credentials", validateToken, validateSchema(credentialsSchema), PostCredentialsController);
credentialsRouter.put("/credentials/:id", validateToken, validateSchema(credentialsSchema), EditCredentialsByIdController)

export default credentialsRouter;