import { DeleteUserController } from "../controllers/erase-controllers";
import { Router } from "express";

const eraseRouter = Router();

eraseRouter.delete("/erase", DeleteUserController);

export default eraseRouter;