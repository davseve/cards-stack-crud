import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("main");
});

app.get("/a", (req: Request, res: Response) => {
  res.send("aaa");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});