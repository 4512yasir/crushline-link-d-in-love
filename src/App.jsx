import React from "react";
import MalePage from "./Components/MalePage"; 
import "./App.css";
import SignUp from "./Components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MalePage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
