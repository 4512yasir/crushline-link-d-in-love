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

        <p className="tagline">Step into a world of meaningful connections tailored for the confident man.</p>
        <button className="cta-btn" onClick={handleClick}>  Join Now  </button>
      </header>

      <section className="features">
        <div className="feature">
          <h2 className="crushline">Destined Encounters 💕🔥</h2>
          <p className="tagline">Thoughtfully crafted matches that spark real chemistry—because love should feel like fate</p>
        </div>
        <div className="feature">
          <h2 className="crushline">ABOUT US ✨</h2>
          <p className="tagline">Meet like-minded individuals in premium dating circles.</p>
        </div>
      </section>

      <footer>
        <p className="tagline">Crushline Connections &copy; 2025 | Privacy Policy | Contact Us</p>
      </footer>
    </div>
  );
};

export default MalePage;
