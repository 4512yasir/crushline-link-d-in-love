import React, { useState } from "react";
import LoginCard from "./LoginCard";
import SignUp from './SignUp';
import "../Css/Header.css";

export default function Header({ login, signup }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isSignupVisible, setSignupVisible] = useState(false);

  // login
  const handleLoginClick = () => {
    setLoginVisible(true);
  };

  const handleCloseLogin = () => {
    setLoginVisible(false);
  };
// sign up
  const handleSignupClick = () => {
    setSignupVisible(true);
  };

  const handleCloseSignup = () => {
    setSignupVisible(false);
  };

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
              <a href="#">Home</a>
            </li>
            <li className="navLi">
              <a href="#matches">MATCHES</a>
            </li>
            <li className="navLi">
              <a href="#profile">Profile Page</a>
            </li>

            {!isLoggedIn && (
              <>
                <li className="navLi">
                  <button onClick={handleLoginClick} className="login-btn">
                    {login}
                  </button>
                  <button onClick={handleSignupClick} className="login-btn">
                    {signup}
                  </button>
                </li>
              </>
            )}

            <button>
              <a href="">THEMES</a>
            </button>
          </ul>
        </div>
      </header>

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

{isSignupVisible && (
  <div className="modalOverlay">
    <div className="modalContent">
      <SignUp handleClose={handleCloseSignup} />
    </div>
  </div>
)}


   
    </>
  );
}
