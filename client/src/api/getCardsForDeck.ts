import { API_URL } from "./config";

export async function getCardsForDeck(id: string): Promise<string[]> {
    const res = await fetch(`${ API_URL }/decks/${id}/cards`);
    const data = await res.json();
    console.log('cards data:', data);
    return data;
};