import React from "react";
import "../Css/girlyTheme.css";
import Header from "../Components/Header";

function GirlyTheme() {
  return (
    <>
     

      <div className="hero">
        <div className="hero-overlay">
          <div className="hero-text">
            <h1>Love starts with a genuine connection</h1>
            <p>
              Step into a space where hearts meet, stories unfold, and something
              real begins.
            </p>

            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="about-us">
        <h2>About us</h2>

        <p>
          We’re a team of four passionate dreamers, developers, and creatives
          who believe in building real connections in a digital world. Our
          journey started with a simple idea — to create a space where people
          feel seen, valued, and loved. Each of us brings something unique to
          the table: code that works like magic, designs that spark joy, words
          that speak to the heart, and ideas that keep love at the center of
          everything we do. We're not just building another dating app. We're
          planting the seeds of something meaningful — a garden where love grows
          naturally, gently, and beautifully. Let’s rewrite the love story,
          together❤️.
        </p>
      </div>

      <div className="testimonials">
        <h2>Testimonials</h2>

        <div className="testimonial-cards">
          <div className="testimonial-card">
            <img src="/src/assets/blackgirl.jpg" alt="persons image" />
            <p>
              "I never thought I'd meet someone who shares my passions and
              values. Thanks to this app, I found my soulmate, and we're now
              planning our future together. It really feels like fate brought us
              together!"
            </p>
            <h4>— Mary W.</h4>
          </div>

          <div className="testimonial-card">
            <img src="/src/assets/blackman.jpg" alt="persons image" />
            <p>
              "The interface is so easy to use, and I love how the matches feel
              more genuine compared to other dating apps. I've met so many
              interesting people here, but it was when I met Silvia that I knew
              something real was brewing. Truly, this app changed my life."
            </p>
            <h4>— Brian K.</h4>
          </div>

          <div className="testimonial-card">
            <img src="/src/assets/whitecouple.jpg" alt="persons image" />
            <p>
              "We matched on a Sunday, met on Wednesday, and by the weekend, we
              were making plans for the future. This app allowed us to find a
              connection so quickly, and it feels like we’ve known each other
              for years. We couldn’t be happier!"
            </p>
            <h4>— Joyce & David</h4>
          </div>

          <div className="testimonial-card">
            <img src="/src/assets/whitegirl.jpg" alt="persons image" />
            <p>
              "At first, I was skeptical about online dating. I had tried other
              platforms with little success. But this app proved me wrong.
              Within weeks, I met someone who truly understands me, and we’ve
              been inseparable since. I couldn’t be more thankful for this
              opportunity to find love again!"
            </p>
            <h4>— Vivian.</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default GirlyTheme;
