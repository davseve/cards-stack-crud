const Form = () => {
  return (
    <form>
      <label htmlFor="deckTitle">Deck Title</label>
      <input type="text" id="deckTitle" onChange={handleDeckTitleChange} placeholder="Deck Title" />
      <button type="submit">Create Deck</button>
    </form>
  );
};

export default Form;