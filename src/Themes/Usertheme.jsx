// src/theme/useTheme.jsx
import React, { createContext, useContext } from "react";
import themes from "./Theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme: themes }}>
      <div
        style={{
          backgroundColor: generalTheme.background,
          fontFamily: generalTheme.font,
          color: generalTheme.text,
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
