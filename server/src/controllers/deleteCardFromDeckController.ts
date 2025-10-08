import Deck from "../models/Deck";
import { Request, Response } from "express";

export async function deleteCardFromDeckController(req: Request, res: Response) {
    const { id, text } = req.params;
    console.log('deleteCardFromDeckController', id, text);
    const deck = await Deck.findById(id);
    console.log('deck', deck);
    if (deck) {
        deck.cards = deck.cards.filter((card) => card !== text);
        // save deck in database
        await deck.save();
        
        res.json({ message: "card deleted" });
        
        console.log(`card ${text} deleted`);
    } else {
        return res.status(404).json({ message: "Deck not found" });
    }
    
 
};