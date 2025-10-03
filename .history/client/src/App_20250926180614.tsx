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
    await fetch("http://localhost:3000/decks", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => {
      return res.json();
    })
    setTitle("");
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
      {decks.map((deck: Deck) => (
        <div key={deck._id}>{deck.title}</div>
      ))}
     </ThemeProvider>
    
    </div>
  )
}

export default App
