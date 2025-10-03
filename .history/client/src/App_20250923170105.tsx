import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "@/assets/theme";
function App() {
 
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className='app'>
     a
    </div>
  )
}

export default App
