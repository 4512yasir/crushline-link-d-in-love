import React from "react";
import "../Css/MalePage.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer"

const MalePage = () => {
  const handleClick = () => {
    alert("Welcome to Crushline Connections—where love begins! 💖✨");
  };

  return (
  
    <div className="male-page">
       <Header/>
       <br></br>
      <header className="header1">
        <h1 className="crushline"><i>Link'd in love✨</i></h1>
        <p className="tagline">Step into a world of meaningful connections tailored for the confident man.</p>
        <button className="cta-btn" onClick={handleClick}>Join Now</button>
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
            We analyze interests, personality traits, and communication styles to foster authentic chemistry, 
            creating relationships that feel effortless and natural. Because true love isn’t random—it’s an 
            alignment of hearts, minds, and paths coming together at just the right moment.
          </p>
        </div>

        <br />

        <div className="feature1">
          <h2>ABOUT US ✨</h2>
          <p>
            We are more than just a dating platform; we are a community built on intentional connections and 
            undeniable chemistry. Our goal is to create spaces where relationships flourish, whether you're 
            seeking a soulful partnership or a lifelong commitment. Unlike generic dating apps, we focus on 
            bringing together like-minded individuals who value deep connections and meaningful conversations. 
            We believe that love should be extraordinary, and our platform is designed to provide the right 
            environment for relationships to grow naturally and authentically. Whether you're here for 
            companionship, romance, or lasting love, we ensure that every interaction is curated for success, 
            allowing you to connect with someone who truly complements your journey.
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
          <div className="testimonial-card1">
            <p>"From the first chat to our first date, everything just felt right. This platform gave me the chance to meet someone who truly complements my life. I’m beyond grateful!"</p>
            <h4>— Samuel B.</h4>
          </div>
         
        </div>
      </div>
      <>
          <Footer/>
          </>
    </div>
  );
};

export default MalePage;
