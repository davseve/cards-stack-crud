import { useMemo, useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeSettings } from "@/assets/theme";
import { CssBaseline } from "@mui/material";


function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState([]);

  interface Deck {
    _id: string;
    title: string;
  }

  interface Decks {
    decks: Deck[];
  }



  useEffect(() => {
    async function fetchDecks() {
      const res = await fetch("http://localhost:3000/decks");
      const data = await res.json();
      setDecks(data);
    }

    fetchDecks();
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title);
    const response = await fetch("http://localhost:3000/decks", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await response.json();
    setDecks([...decks, data]);
    setTitle("");
  };

  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:3000/decks/${id}`, {
      method: "DELETE",
    });
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
          <li key={deck._id}>{deck.title}
          <button onClick={() => handleDelete(deck._id)}>x</button>
          </li>
        ))}
        </ul>
      </div>
     </ThemeProvider>
    </div>
  )
}

export default App
