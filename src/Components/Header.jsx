import React from "react";

export default function Header( {login, signup} ) {
  isLoggedIn = false;
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
              <li className="navLi">
                <a href="">{login}</a>
              </li>
            )}
            {!isLoggedIn && (
              <li className="navLi">
                <a href="">{signup}</a>
              </li>
            )}
            <li className="navLi">
              <a href="">Theme</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
