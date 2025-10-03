export async function getDecks() {
    const res = await fetch("http://localhost:3000/decks");
    const data = await res.json();
    return data;
}