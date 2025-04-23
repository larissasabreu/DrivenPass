import { Router } from "express";
import { validadeToken } from "../middlewares/auth-Middleware";
import { validateSchema } from "../middlewares/schema-Middleware";
import { credentialSchema } from "../schemas/schemas";
import { PostCredentialsController, GetCredentialsController, GetCredentialByIdController, EditCredentialsController, EraseCredentialsController} from "../controllers/credentials-Controller";

const credentialsRouter = Router();

credentialsRouter.use(validadeToken);
credentialsRouter.post("/credentials", validateSchema(credentialSchema), PostCredentialsController);
credentialsRouter.get("/credentials", GetCredentialsController);
credentialsRouter.get("/credentials/:id", GetCredentialByIdController);
credentialsRouter.put("/credentials/:id", validateSchema(credentialSchema), EditCredentialsController);
credentialsRouter.delete("/credentials/:id", EraseCredentialsController);

export default credentialsRouter;