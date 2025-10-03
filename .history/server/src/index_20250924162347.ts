import express, { Request, Response } from "express";
import mongoose from "mongoose";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("main");
});

app.get("/aaa", (req: Request, res: Response) => {
  res.send("aaa");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

main().catch((err) => {
  console.log(err);
});


const db = mongoose.connect('mongodb+srv://process.env.MONGO_DB_USER:process.env.MONGO_DB_PASS@cluster0.v3xtzdd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
