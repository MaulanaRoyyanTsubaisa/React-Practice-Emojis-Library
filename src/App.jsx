import React, { useState } from "react"; // Import useState
import Emoji from "./Emoji";
import emojipedia from "./emojipedia";
import { ThemeProvider, createTheme, CssBaseline, Switch } from "@mui/material";

function emojis(emot) {
  return (
    <Emoji
      key={emot.id}
      emoji={emot.emoji}
      name={emot.name}
      description={emot.meaning}
    />
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false); // Initialize darkMode state

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {" "}
      {/* Wrap your application in ThemeProvider */}
      <CssBaseline /> {/* This will apply the baseline styles */}
      <div className="flex justify-end items-center p-4">
        <div className="flex items-center space-x-2">
          <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
          {darkMode ? (
            <img
              src="/moon.svg"
              alt="Moon"
              className="w-6 h-6 animate-pulse"
            />
          ) : (
            <img
              src="/sun.svg"
              alt="Sun"
              className="w-6 h-6 animate-pulse"
            />
          )}
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)} // Toggle dark mode
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
      </div>
      <h1>
        <span className="shadow-2xl rounded-3xl">Emoji Pedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(emojis)}</dl>
    </ThemeProvider>
  );
}

export default App;