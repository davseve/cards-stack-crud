import express, { Request, Response } from "express";
import mongoose from "mongoose";
const app = express();

import Deck from "./models/Deck";

const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("main");
});

app.get("/aaa", (req: Request, res: Response) => {
  res.send("aaa");
});

mongoose.connect(
  // cspell:disable-next-line
  `mongodb+srv://flashcardsage:flashcardsage@cluster0.v3xtzdd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


