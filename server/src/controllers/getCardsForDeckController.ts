import Deck from "../models/Deck";
import { Request, Response } from "express";

export async function getCardsForDeckController(req: Request, res: Response) {
    const { id } = req.params;
    
    const deck = await Deck.findById(id);
    
    if (!deck) {
        return res.status(404).json({ message: "Deck not found" });
    }

    res.json(deck.cards);
}
