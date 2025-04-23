import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({ username: "", email: "", phone: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${formData.username}!`);
  };

  return (
    <div className="signup-container">
        <h2><i>Welcome to Crushline</i></h2>
        <p> ✨✨✨</p>
      <h2 className="signup-title">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" className="signup-input" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="signup-input" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" className="signup-input" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="signup-input" onChange={handleChange} required />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>

      <p className="login-link">
        Already have an account? <Link to="/login" className="login-link-text">Log in here</Link>
      </p>

      <div className="social-login">
        <button className="facebook-btn">Sign up with Facebook</button>
        <button className="google-btn"> Sign up with Google</button>
      </div>

      <footer className="signup-footer">
        <p>© 2025 Crushline | Connecting Hearts 💖</p>
      </footer>
    </div>
  );
};

export default SignUp;
