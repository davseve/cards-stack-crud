import { useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeSettings } from "@/assets/theme";
import { CssBaseline } from "@mui/material";


function App() {
  const [title, setTitle] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title);
    fetch("http://localhost:3000/decks", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
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
      {title}
     </ThemeProvider>
    
    </div>
  )
}

export default App
