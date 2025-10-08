import { API_URL } from "./config";

export async function addCardToDeck( id: string, cardTitle: string ) {
    console.log({'addCardToDeck': id, cardTitle});
    try {
        const response = await fetch(`${ API_URL }/decks/${id}/cards`, {
            method: "POST",
            body: JSON.stringify({text: cardTitle}),
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
    } catch (error) {
        console.error('Error adding card to deck', error);
        return null;
    }
}