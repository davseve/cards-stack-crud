import express, { Request, Response } from "express";
import mongoose from "mongoose";
const app = express();

app.use(express.json());

import Deck from "./models/Deck";

const PORT = process.env.PORT || 3000;

app.post("/decks", async (req: Request, res: Response) => {
  console.log(req.body);
  const newDeck = new Deck({
    title: req.body.title,
  });

  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});


mongoose.connect(
  // cspell:disable-next-line
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@${process.env.MONGO_DB_HOST}`
).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


