import Card from "../models/Card";
import { Request, Response } from "express";

export async function createCardForDeckController(req: Request, res: Response) {
    const newCard = new Card({
      title: req.body.title,
      deckId: req.body.deckId,
      front: req.body.front,
      back: req.body.back,
    });
    const createdCard = await newCard.save();
    res.json(createdCard);
}