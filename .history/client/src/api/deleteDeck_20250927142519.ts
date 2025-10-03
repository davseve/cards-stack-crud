export async function deleteDeck(id: string) {
    const response = await fetch(`http://localhost:3000/decks/${id}`, {
      method: "DELETE",
    });
   return response.json();
};