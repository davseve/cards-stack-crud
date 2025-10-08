import { useParams } from "react-router-dom";
import { addCardToDeck } from "../api/addCardToDeck";
import { getCardsForDeck } from "../api/getCardsForDeck";
import { deleteCardFromDeck } from "../api/deleteCardFromDeck";
import { useState, useEffect } from "react";

function Deck() {
  const { id } = useParams();
  const [cards, setCards] = useState<string[]>([]);

  async function handleCArdAddition(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const text = formData.get('card') as string;
    await addCardToDeck( id as string, text);
    // optimistic approach to display new added cards without reloading the page
    setCards([...cards, text]);
    form.reset();
  }

  async function handleCardDeletion(text: string){
    try {
      console.log('deleting card:', text);
    await deleteCardFromDeck(id as string, text);
    } catch (error) {
      console.error('Error deleting card:', error);
    }
    setCards(cards.filter((card) => card !== text));
  }

  async function loadCards(){
    try {
    const fetchedCards = await getCardsForDeck(id as string);
      console.log('fetchedCards', fetchedCards);
      setCards(fetchedCards);
    } catch (error) {
      console.error('Error loading cards:', error);
      setCards([]);
    }
  }

  useEffect(() => {
    if(id){
      console.log('loading cards');
      loadCards();
    }
  }, [id]);

  return (
    <div>
      <h1>Add a card to the deck</h1>
      <form onSubmit={handleCArdAddition}>
        <label htmlFor="card">Card</label>
        <input type="text" id="card" name="card" placeholder="Card" />
        <button type="submit">Add Card</button>
      </form>
      {
        cards.length > 0 ? (
          <ul>
            {cards.map((card, index) => (
              <li key={index}>
                <button
                  onClick={() => handleCardDeletion(card)}
                >
                  x 
                </button> - 
                <span>{card}</span> 
              </li>
            ))}
          </ul>
        ) : (
          <p>No cards found.</p>
        )
      }
    </div>
  );
}

export default Deck;