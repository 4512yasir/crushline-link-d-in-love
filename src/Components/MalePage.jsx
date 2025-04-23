import React from "react";
import "./MalePage.css";
// import { Link } from "react-router-dom";

const MalePage = () => {
  const handleClick = () => {
    alert("Welcome to Crushline Connections—where love begins! 💖✨");
  };

  return (
    <div className="male-page">
      <header>
      <h1 className="crushline">CRUSHLINE ✨</h1>

        <p>Step into a world of meaningful connections tailored for the confident man.</p>
        <button className="cta-btn" onClick={handleClick}>  Join Now  </button>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Destined Encounters 💕🔥</h2>
          <p>Thoughtfully crafted matches that spark real chemistry—because love should feel like fate</p>
        </div>
        <div className="feature">
          <h2>ABOUT US ✨</h2>
          <p>Meet like-minded individuals in premium dating circles.</p>
        </div>
      </section>

      <footer>
        <p>Crushline Connections &copy; 2025 | Privacy Policy | Contact Us</p>
      </footer>
    </div>
  );
};

export default MalePage;
