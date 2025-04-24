import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Footer from './Components/Footer';
import GirlyTheme from './Pages/GirlyTheme';
import MalePage from "./Pages/MalePage";
import Header from "./Components/Header";
import Profile from "./Pages/Profile";
import PeopleList from "./Pages/PeopleList"; 
import Login from './Components/LoginCard'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ login state

  return (
    <Router>
      {/* ✅ Pass login state to Header */}
      <Header login="Login" 
        signup="Signup"
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <GirlyTheme />
              <MalePage />
              <Footer />
            </>
          }
        />

        <Route 
          path="/peoplelist"  
          element={<PeopleList />}
        />

        <Route
          path="/profile"
          element={<Profile id={1} />}
        />

        {/* ✅ Login Route */}
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
