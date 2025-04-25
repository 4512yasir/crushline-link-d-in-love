import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import GirlyTheme from './Pages/GirlyTheme';
import MalePage from "./Pages/MalePage";
import Header from "./Components/Header";
import Profile from "./Pages/Profile";
import PeopleList from "./Pages/PeopleList"; 
import ContactUs from "./Pages/ContactUs";
function App() {
  return (
    <Router>
      {/* Global Header on all pages */}
      <Header login="Login" signup="Signup" />

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
          element={  <Profile id={1} />  }
        />

        <Route  
        path="/ContactUs" 
           element={<ContactUs />} 
           />
      </Routes>
   
    </Router>
  );
}

export default App;
