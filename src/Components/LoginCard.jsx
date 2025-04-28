import React, { useState } from 'react';
import "../Css/login.css";
import { useNavigate } from 'react-router-dom';

export function LoginCard({ setIsLoggedIn, handleClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/user');
      const users = await res.json();

      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        alert('Login successful!');
        setIsLoggedIn(true); // Set login state to true
        navigate('/peoplelist'); // Redirect to people list
        handleClose(); // Close the modal after successful login
      } else {
        setError('Invalid username or password.');
      }
    } catch (err) {
      console.error('Error fetching users:', err);
      setError('Something went wrong. Try again later.');
    }
  };

  return (
    <div className="login-modal">
      <div className="login-card">
        <div className="logo">
            Link'd in love
        </div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Enter your username</label>
            <input 
              id="username" 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Enter Password</label>
            <input 
              id="password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <div className="forgot">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit">Submit</button>
          {error && <p className="error">{error}</p>}
          <p class="create-p">or</p>
          <p className='create'>
            New user? <a href="#">Create account</a>
          </p>
        </form>
        <button onClick={handleClose} className="close-btn">Close</button>
      </div>
    </div>
  );
}

export default LoginCard;
