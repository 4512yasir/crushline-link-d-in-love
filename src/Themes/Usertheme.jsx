// Themes/Usertheme.jsx
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();// creating our toy box

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null); // Start as null
  const [ready, setReady] = useState(false); // New state to track readiness

  useEffect(() => {
    const storedTheme = localStorage.getItem("appTheme") || "male";
    setTheme(storedTheme);
    setReady(true); // Now ready to render app
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("appTheme", theme); //we set the theme in the local storage
      document.body.classList.remove("male-theme", "female-theme");
      document.body.classList.add(theme === "male" ? "male-theme" : "female-theme");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {ready ? children : null} {/* Only render when theme is ready */}
    </ThemeContext.Provider>
  );
};
