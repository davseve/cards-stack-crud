

export function createDecks( title: string ) {
    return await fetch("http://localhost:3000/decks", {
    method: "POST",
    body: JSON.stringify({ title }),
    headers: {
      "Content-Type": "application/json",
    },
  })