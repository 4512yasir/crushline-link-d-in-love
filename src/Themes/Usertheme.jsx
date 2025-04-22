// src/theme/useTheme.jsx
import React, { createContext, useContext } from "react";
import themes from "./Theme";
// Creating the Context
const ThemeContext = createContext();

// Creating the ThemeProvider component
export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme: Themes }}>
      <div
        style={{
          backgroundColor: Themes.general.background, // Using general theme
          fontFamily: Themes.general.font, // Using general font
          color: Themes.general.text, // Using general text color
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Creating a custom hook to access the current theme
export const useTheme = () => useContext(ThemeContext);

