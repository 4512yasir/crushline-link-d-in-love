import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import GirlyTheme from './Pages/GirlyTheme';
import MalePage from "./Pages/MalePage";
import Header from "./Components/Header";
import Profile from "./Pages/Profile";
import PeopleList from "./Pages/PeopleList"; 

import LoginCard from './Components/LoginCard';
import { ThemeProvider, ThemeContext } from "./Themes/Usertheme";
import './Css/girlyTheme.css'
import './Css/MalePage.css'
import ContactUs from "./Pages/ContactUs";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Use useContext to access the theme
  const { theme } = useContext(ThemeContext);

  // This part in App.jsx works correctly now 👇
useEffect(() => {
  document.body.classList.remove("male-theme", "female-theme");

  if (theme === "male") {
    document.body.classList.add("male-theme");
  } else {
    document.body.classList.add("female-theme");
  }
}, [theme]);


  return (

    <ThemeProvider>
      <Router>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<><MainPage /><Footer /></>} />
          <Route path="/peoplelist" element={<PeopleList />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/login" element={<LoginCard setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </ThemeProvider>

 
  );
}

// MainPage component decides based on the theme
const MainPage = () => {
  const { theme } = useContext(ThemeContext);
  return theme === "male" ? <MalePage /> : <GirlyTheme />;
};

export default App;