import { API_URL } from "./config";

export async function deleteCardFromDeck(id: string, text: string) {
    const response = await fetch(`${ API_URL }/decks/${id}/cards/${text}`, {
      method: "DELETE",
    });
   return await response.json();
};