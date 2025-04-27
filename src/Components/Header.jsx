import React, { useState, useContext } from "react";
import LoginCard from "./LoginCard";
import SignUp from "./SignUp";
import { ThemeContext } from "../Themes/Usertheme"; 
import "../Css/Header.css";
import ContactUs from "../Pages/ContactUs";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isSignupVisible, setSignupVisible] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);

  const navigate = useNavigate();
  const { setTheme } = useContext(ThemeContext);

  // Handlers
  const handleLoginClick = () => setLoginVisible(true);
  const handleCloseLogin = () => setLoginVisible(false);

  const handleSignupClick = () => setSignupVisible(true);
  const handleCloseSignup = () => setSignupVisible(false);

  const handleLogout = () => {
    setIsLoggedIn(false); // Set the user as logged out
    navigate("/"); // Navigate to the homepage
  };

  return (
    <>
      <header className="header">
        <div className="logoDiv">
          <div className="logoImageDiv">
            <img className="logoImage" src="./src/assets/heart-solid.svg" alt="logo" />
          </div>
          <div className="logoNameDiv">
            <p className="logoNamePara">Link’d In<br />Love</p>
          </div>
        </div>

        <div className="navLinksDiv">
          <ul className="navUlContainer">
            <li className="navLi">
              <Link to="/">HOME</Link>
            </li>
            <li className="navLi">
              <Link to="/ContactUs" className="btn">Contact Us</Link>
            </li>

            {/* Conditionally render links based on login state */}
            {isLoggedIn && (
              <>
                <li className="navLi"><Link to="/peoplelist" className="btn">Matches</Link></li>
                <li className="navLi"><Link to="/profile" className="btn">Profile</Link></li>
                <li className="navLi">
                  <button onClick={handleLogout} className="login-btn">Logout</button>
                </li>
              </>
            )}

            {!isLoggedIn && (
              <>
                <li className="navLi">
                  <button onClick={handleLoginClick} className="login-btn">Login</button>
                </li>
                <li className="navLi">
                  <button onClick={handleSignupClick} className="login-btn">Signup</button>
                </li>
              </>
            )}

            <li className="navLi">
              <button
                onClick={() => setShowThemeModal(!showThemeModal)}
                className="login-btn"
              >
                Choose Theme
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* Theme Modal */}
      {showThemeModal && (
        <div className="theme-modal">
          <h3>Select Theme</h3>
          <button onClick={() => {
  setTheme("male");  // Set to male theme
  console.log("Switched to male theme");
}}>Male Theme</button>

<button onClick={() => {
  setTheme("girly");  // Set to girly theme
  console.log("Switched to girly theme");
}}>Girly Theme</button>
          
          <button onClick={() => setShowThemeModal(false)}>Close</button>
        </div>
      )}

      {/* Login Modal */}
      {isLoginVisible && (
        <div className="modalOverlay">
          <div className="modalContent">
            <h2>Login</h2>
            <LoginCard 
              handleClose={handleCloseLogin} 
              setIsLoggedIn={setIsLoggedIn} // Passing setIsLoggedIn to LoginCard
            />
            
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupVisible && (
        <div className="modalOverlay">
          <div className="modalContent">
            <SignUp handleClose={handleCloseSignup} />
            <button onClick={handleCloseSignup} className="closeModalBtn">Close</button>
          </div>
        </div>
      )}
    </>
  );
}
