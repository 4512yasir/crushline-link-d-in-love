// src/theme/useTheme.jsx
import React, { createContext, useContext } from "react";
import themes from "./Theme"; // Ensure this file exists

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const generalTheme = themes.generalTheme; // Extract this from themes

  return (
    <ThemeContext.Provider value={{ theme: themes }}>
      <div
        style={{
          backgroundColor: generalTheme?.background || "#fff", // Add fallback values
          fontFamily: generalTheme?.font || "Arial",
          color: generalTheme?.text || "#000",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);
