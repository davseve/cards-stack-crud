import { API_URL } from "./config";

export async function addCardToDeck( id: string, text: string ) {
    console.log({'addCardToDeck': id, text});
    try {
        const response = await fetch(`${ API_URL }/decks/${id}/cards`, {
            method: "POST",
            body: JSON.stringify({
                text
            }),
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