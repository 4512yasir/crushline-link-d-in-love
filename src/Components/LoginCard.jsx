import React from 'react';
import "../Css/login.css";

export function LoginCard({ handleClose }) {
  return (
    <div className="login-modal">
      <div className="login-card">
        <h2>Login</h2>
        <form action="">
          <div className="input-group">
            <label htmlFor="username">Enter your username</label>
            <input id="username" type="text" required />
          </div>

          <div className="input-group">
            <label htmlFor="password">Enter Password</label>
            <input id="password" type="password" required />
          </div>

         <div className="forgot">
         <a href="#">Forgot password?</a>
         </div>
          <button type="submit">Submit</button>
          <p>or</p>
          <p>
            New user? <a href="#">Create account</a>
          </p>
        </form>
        <button onClick={handleClose} className="close-btn">Close</button>
      </div>
    </div>
  );
}

export default LoginCard;
