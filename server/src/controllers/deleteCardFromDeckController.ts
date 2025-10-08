import Deck from "../models/Deck";
import { Request, Response } from "express";

export async function deleteCardFromDeckController(req: Request, res: Response) {
    const { id, text } = req.params;
    const deck = await Deck.findById(id);
    if (deck) {
        deck.cards = deck.cards.filter((card) => card !== text);
        // save deck in database
        await deck.save();
        
        res.json({ message: "card deleted" });
    } else {
        return res.status(404).json({ message: "Deck not found" });
    }
    
 
};