import Deck from "../models/Deck";
import { Request, Response } from "express";

export async function createCardForDeckController(req: Request, res: Response) {
    const newCard = new Deck({
      card: req.body.card,
      front: req.body.front,
      back: req.body.back,
      deckId: id,
      front: req.body.front,
      back: req.body.back,
    });
    const createdCard = await newCard.save();
    res.json(createdCard);
}