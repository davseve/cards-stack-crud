import { useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeSettings } from "@/assets/theme";
import { CssBaseline } from "@mui/material";


function App() {
  const [title, setTitle] = useState("");
 
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className='app'>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <form>
        <label htmlFor="deckTitle">Deck Title</label>
        <input 
          type="text" 
          id="deckTitle" 
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }} placeholder="Deck Title" />
        <button type="submit">Create Deck</button>
      </form>
      {title}
     </ThemeProvider>
    
    </div>
  )
}

export default App
