// src/Themes/Usertheme.jsx
import React, { createContext, useState } from "react";

// Create the context
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("general-theme");

  // Function to change the theme
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    document.body.className = newTheme; // Apply the theme to body or wherever you'd like
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Default export of ThemeProvider
export default ThemeProvider;
