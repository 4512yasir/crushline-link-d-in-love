// src/theme/useTheme.jsx
import React, { createContext, useContext } from "react";
import Themes from "./Theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme: Themes }}>
      <div
        style={{
          backgroundColor: Themes.background,
          fontFamily: Themes.font,
          color: Themes.text,
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
