export type TDeck = {
    _id: string;
    title: string;
};

export async function getDecks() {
    const res = await fetch("http://localhost:3000/decks");
    return res.json();
}