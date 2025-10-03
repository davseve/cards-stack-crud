import { useMemo, useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeSettings } from "@/assets/theme";
import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import { getDecks } from "./api/getDecks";
import { createDecks } from "./api/createDeck";
import { handleDelete } from "./api/deleteDeck";


function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<Deck[]>([]);

  interface Deck {
    _id: string;
    title: string;
  }

  useEffect(() => {
    const decks = getDecks();
    setDecks(decks);
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title);
   
    const deck = await createDecks(title);

    setDecks([...decks, deck]);

    setTitle("");
  };

  const handleDelete = async (id: string) => {
    setDecks(decks.filter((deck: Deck) => deck._id !== id));
  };
 
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className='app'>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <form onSubmit={handleSubmit}>
        <label htmlFor="deckTitle">Deck Title</label>
        <input 
          type="text" 
          id="deckTitle" 
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }} 
          placeholder="Deck Title"
          value={title}
          />
        <button type="submit">Create Deck</button>
      </form>
      <div className="decks">
        <ul>
        {decks.map((deck: Deck) => (
          <li key={deck._id}>
          <button onClick={() => handleDelete(deck._id)}>x</button>
          <Link to={`/decks/${deck._id}`}>{deck.title}</Link>
          </li>
        ))}
        </ul>
      </div>
     </ThemeProvider>
    </div>
  )
}

export default App
