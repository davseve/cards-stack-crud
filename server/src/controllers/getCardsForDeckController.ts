import Deck from "../models/Deck";
import { Request, Response } from "express";

export async function getCardsForDeckController(req: Request, res: Response) {
    const { id } = req.params;
    console.log('Getting cards for deck:', id);
    
    const deck = await Deck.findById(id);
    console.log('Found deck:', deck);
    
    if (!deck) {
        return res.status(404).json({ message: "Deck not found" });
    }

    res.json(deck.cards);
}
