import { API_URL } from "./config";

export async function deleteCardFromDeck(id: string, text: string) {
    console.log('deleting card:', id, text);
    const response = await fetch(`${ API_URL }/decks/${id}/cards/${text}`, {
      method: "DELETE",
    });
    console.log('response deleteCardFromDeck:', await response.json());
   return await response.json();
};