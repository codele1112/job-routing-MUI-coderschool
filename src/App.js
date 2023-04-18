import * as React from "react";
import { useState } from "react";
import ButtonAppBar from "./components/SearchAppBar";
import HomePage from "./pages/HomePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <div className="App">
        <ButtonAppBar check={darkMode} change={() => setDarkMode(!darkMode)} />
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
