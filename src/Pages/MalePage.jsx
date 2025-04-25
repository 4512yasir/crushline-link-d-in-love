import React, { useState } from "react";
import SignUp from "../Components/SignUp"; 
import "../Css/MalePage.css";

const MalePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    alert("Welcome to Crushline Connections—where love begins! 💖✨");
  };

  return (
    <div className="male-page">
      <header className="header1">
        <h1 className="crushline"><i>Link'd in love✨</i></h1>
        <p className="tagline">Step into a world of meaningful connections tailored for the confident man.</p>
        <button className="cta-btn" onClick={handleOpenModal}>
          Join Now
        </button>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature1">
          <h2>Destined Encounters 🔥</h2>
          <p>
            Love isn't just about chance—it’s about meaningful connections that feel truly meant to be.
            Our platform goes beyond basic compatibility by using intelligent matchmaking and personalized algorithms
            to introduce you to someone who shares your values, aspirations, and energy. Every match is crafted with
            depth and purpose, ensuring that you move beyond endless swiping and surface-level interactions.
          </p>
        </div>

        <div className="feature1">
          <h2>ABOUT US ✨</h2>
          <p>
            We are more than just a dating platform; we are a community built on intentional connections and undeniable chemistry.
            Our goal is to create spaces where relationships flourish, whether you're seeking a soulful partnership or a lifelong commitment.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
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
        </div>
      </div>

      {/* Render the SignUp modal when the button is clicked */}
      {isModalOpen && <SignUp handleClose={handleCloseModal} />}
    </div>
  );
};

export default MalePage;
