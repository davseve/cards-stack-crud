import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeSettings } from "@/assets/theme";
import { CssBaseline } from "@mui/material";


function App() {
 
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className='app'>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <form>
        <label htmlFor="deckTitle">Deck Title</label>
        <input type="text" placeholder="Deck Title" id="deckTitle" onChange={handleDeckTitleChange} />
        <button type="submit">Create Deck</button>
      </form>
     </ThemeProvider>
    </div>
  )
}

export default App
