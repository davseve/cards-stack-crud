import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import { getDecksController } from "./controllers/getDeckController";
import { createDeckController } from "./controllers/createDeckController";

config();

const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json());

import Deck from "./models/Deck";

const PORT = process.env.PORT || 3000;

app.get("/decks", getDecksController);

app.post("/decks", createDeckController);


app.delete("/decks/:id", deleteDeckController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


