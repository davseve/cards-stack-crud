function Deck() {
  const handleCArdAddition = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <div>
      <h1>Add a card to the deck</h1>
      <form onSubmit={handleCArdAddition}>
        <label htmlFor="card">Card</label>
        <input type="text" id="card" placeholder="Card" />
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
}

export default Deck;