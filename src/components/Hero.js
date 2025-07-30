import React from 'react';
import './Hero.css';
// If you want actual icons for stars, uncomment the line below and install react-icons
// import { FaStarOfLife } from 'react-icons/fa'; // Example icon for stars

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content container">
        {/* Glowing Avatar/Logo */}
        <div className="hero-avatar-container">
          <div className="hero-avatar-outer-glow">
            <div className="hero-avatar-inner-ring">
              <div className="hero-avatar">
                <span>KB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="hero-title">KARTIK BATLA</h1>

        {/* Subtitle */}
        <p className="hero-subtitle"> Developer | Vibe Coder | Bringing Ideas to Life with AI-Assisted Creation</p>

        {/* Call to Action Button */}
        <a href="#projects" className="btn primary-glow">
          {/* Using pseudo-elements for stars in CSS, or react-icons */}
          {/* <FaStarOfLife className="btn-icon left" /> */}
          Explore My Work
          {/* <FaStarOfLife className="btn-icon right" /> */}
          </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator">
        <span className="arrow-down"></span>
      </div>

      {/* Background elements for subtle glowing dots */}
      <div className="background-dots"></div>
    </section>
  );
}

export default Hero;