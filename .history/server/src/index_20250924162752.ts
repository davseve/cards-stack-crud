import express, { Request, Response } from "express";
import mongoose from "mongoose";
const app = express();

import Deck from "./models/Deck";

app.get("/", (req: Request, res: Response) => {
  res.send("main");
});

app.get("/aaa", (req: Request, res: Response) => {
  res.send("aaa");
});

mongoose.connect(
  'mongodb+srv://process.env.MONGO_DB_USER:process.env.MONGO_DB_PASS@cluster0.v3xtzdd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
).then(() => {
  console.log("Connected to MongoDB");
  app.listen(3000, () => {} );
});


