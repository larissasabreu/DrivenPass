import express, { Request, Response, json } from "express";
import SignUpRouter from "./routers/signUp-router";

const app = express();
app.use(json())

app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("I'm ok!");
  });

app.use(SignUpRouter);

const port = process.env.PORT || 5000 ;
app.listen(port, () => console.log(`porta ${port}`));