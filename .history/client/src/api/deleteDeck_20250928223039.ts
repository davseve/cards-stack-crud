import { API_URL } from "./config";

export async function deleteDeck(id: string) {
    const response = await fetch(`${ API_URL }/decks/${id}`, {
      method: "DELETE",
    });
   return response.json();
};