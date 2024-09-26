import express, { Request, Response, json } from "express";
import AuthRouter from "./routers/auth-router";
import credentialsRouter from "./routers/credentials-router";
import eraseRouter from "./routers/erase-router";

const app = express();
app.use(json())

app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("I'm ok!");
  });

app.use(AuthRouter);
app.use(credentialsRouter);
app.use(eraseRouter);

const port = process.env.PORT || 5000 ;
app.listen(port, () => console.log(`porta ${port}`));