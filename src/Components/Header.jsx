import React, { useState } from "react";
import LoginCard from "./LoginCard";

export default function Header({ login, signup }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);

  const handleLoginClick = () => {
    setLoginVisible(true);
  };

  const handleCloseLogin = () => {
    setLoginVisible(false);
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
              <a href="#home">Home</a>
            </li>

            {!isLoggedIn && (
              <>
                <li className="navLi">
                  <button onClick={handleLoginClick} className="login-btn">
                    {login}
                  </button>
                </li>
                <li className="navLi">
                  <a href="#signup">{signup}</a>
                </li>
              </>
            )}

            <li className="navLi">
              <a href="#theme">Theme</a>
            </li>
          </ul>
        </div>
      </header>

      {/* Simple Modal UI for login (conditionally rendered) */}
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
    </>
  );
}
