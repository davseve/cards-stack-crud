import Deck from "../models/Deck";
import { Request, Response } from "express";

export async function getCardsForDeckController(req: Request, res: Response) {
    const { id } = req.params;
    const decks = await Deck.findById(id);
    console.log('decks', decks);
    res.json(decks?.cards);
    console.log('decks?.cards', decks?.cards);
};