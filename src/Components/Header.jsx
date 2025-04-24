import React, { useState, useContext } from "react";
import LoginCard from "./LoginCard";
import SignUp from "./SignUp";
import { ThemeContext } from "../Themes/Usertheme"; 
import "../Css/Header.css";
import { Link } from "react-router-dom";

export default function Header({ login, signup }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isSignupVisible, setSignupVisible] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);

  const { changeTheme } = useContext(ThemeContext); 
  // Login modal handlers
  const handleLoginClick = () => setLoginVisible(true);
  const handleCloseLogin = () => setLoginVisible(false);

  // Signup modal handlers
  const handleSignupClick = () => setSignupVisible(true);
  const handleCloseSignup = () => setSignupVisible(false);

  return (
    <>
      <header className="header">
        <div className="logoDiv">
          <div className="logoImageDiv">
            <img
              className="logoImage"
              src="./src/assets/heart-solid.svg"
              alt="logo"
            />
          </div>
          <div className="logoNameDiv">
            <p className="logoNamePara">
              Link’d In
              <br />
              Love
            </p>
          </div>
        </div>

        <div className="navLinksDiv">
          <ul className="navUlContainer">
            <li className="navLi">
              <Link to="/">HOME</Link>
            </li>
            <li className="navLi">
              <Link to="/peoplelist">Matches</Link>
            </li>
            <li className="navLi">
              <Link to="/profile">Profile</Link>
            </li>

            {!isLoggedIn && (
              <li className="navLi">
                <button onClick={handleLoginClick} className="login-btn">
                  {login}
                </button>
                <button onClick={handleSignupClick} className="login-btn">
                  {signup}
                </button>
              </li>
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
          <button onClick={() => changeTheme("male-theme")}>Male</button>
          <button onClick={() => changeTheme("female-theme")}>Female</button>
          <button onClick={() => changeTheme("general-theme")}>General</button>
          <button onClick={() => setShowThemeModal(false)}>Close</button>
        </div>
      )}

      {/* Login Modal */}
      {isLoginVisible && (
        <div className="modalOverlay">
          <div className="modalContent">
            <h2>Login</h2>
            <LoginCard handleClose={handleCloseLogin} />
            <button onClick={handleCloseLogin} className="closeModalBtn">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupVisible && (
        <div className="modalOverlay">
          <div className="modalContent">
            <SignUp handleClose={handleCloseSignup} />
            <button onClick={handleCloseSignup} className="closeModalBtn">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
