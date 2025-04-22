import React, { useState } from 'react';
import './App.css';
import LoginCard from './Components/LoginCard'; // Your login card component

function App() {
  const [isLoginVisible, setLoginVisible] = useState(false); // State to manage modal visibility

  const handleLoginClick = () => {
    setLoginVisible(true); // Show login card when the button is clicked
  };

  const handleCloseLogin = () => {
    setLoginVisible(false); // Close login card
  };

  return (
    <div className="app">
      {/* Button to show login pop up */}
      <button onClick={handleLoginClick} className="login-btn">
        Login
      </button>

      {/* Conditional rendering of the login card (popup) */}
      {isLoginVisible && (
        <div className="modal-backdrop">
          <LoginCard handleClose={handleCloseLogin} />
        </div>
      )}
    </div>
  );
}

export default App;
