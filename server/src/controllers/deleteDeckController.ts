import Deck from "../models/Deck";
import { Request, Response } from "express";

export async function deleteDeckController(req: Request, res: Response) {
    const { id } = req.params;
    await Deck.findByIdAndDelete(id);
    res.json({ message: "Deck deleted" });
};