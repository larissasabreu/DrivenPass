import { DeleteUserController } from "../controllers/erase-controllers";
import { Router } from "express";
import { validateToken } from "../middlewares/auth-middleware";

const eraseRouter = Router();

eraseRouter.delete("/erase/:id", validateToken, DeleteUserController);

export default eraseRouter;