import express, { json, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(json());

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("I'm OK");
});

const port = process.env.PORT || 5000 ;
app.listen(port, () => console.log(`porta ${port}`));