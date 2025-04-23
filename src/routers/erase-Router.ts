import { Router } from "express";
import { validadeToken } from "../middlewares/auth-Middleware";
import { EraseUserController } from "../controllers/erase-Controller";

const eraseRouter = Router();

eraseRouter.use(validadeToken);
eraseRouter.delete("/erase", EraseUserController)

export default eraseRouter;