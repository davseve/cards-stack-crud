import Deck from "../models/Deck";
import { Request, Response } from "express";

export async function createCardForDeckController(req: Request, res: Response) {
    const { deckId } = req.params;
    const deck = await Deck.findById(deckId);
    console.log({deck});
    if (!deck) {
      return res.status(404).json({ message: "Deck not found" });
    }

    const { text } = req.body;
    
    deck.cards.push(text);
    await deck.save();
    res.json(deck);
  
}