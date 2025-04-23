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
      <h1 className="crushline"><i>Link'd in love✨</i></h1>

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
      <div className="testimonials1">
  <h2>Testimonials</h2>

  <div className="testimonial-cards1">
    <div className="testimonial-card1">
     
      <p>"I was tired of endless swiping and superficial connections. This app introduced me to real conversations and meaningful relationships. Meeting Anita here was the best thing that ever happened to me!"</p>
      <h4>— James O.</h4>
    </div>

    <div className="testimonial-card1">
     
      <p>"I always believed love finds you when you least expect it. I signed up on a whim, and now, I'm planning my future with someone truly special. Thank you for making love feel effortless!"</p>
      <h4>— Kelvin T.</h4>
    </div>

    <div className="testimonial-card1">

      <p>"From the first chat to our first date, everything just felt right. This platform gave me the chance to meet someone who truly complements my life. I’m beyond grateful!"</p>
      <h4>— Samuel B.</h4>
    </div>
  </div>
</div>

    </div>
  );
};

export default MalePage;
