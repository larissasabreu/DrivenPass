import express, { json, Request, Response } from "express";
import dotenv from "dotenv";
import "express-async-errors";
import authRouter from "./routers/auth-Router";
import credentialsRouter from "./routers/credentials-Router";
import userRouter from "./routers/erase-Router";
import errorHandler from "./middlewares/errorHandler-Middleware";

dotenv.config();

const app = express();

app.use(json());

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("I'm OK");
});

app.use(authRouter);
app.use(credentialsRouter);
app.use(userRouter);
app.use(errorHandler);

const port = process.env.PORT || 5000 ;
app.listen(port, () => console.log(`porta ${port}`));