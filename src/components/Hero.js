import React from 'react';
import './css/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-subtitle">R a i s e  Y o u r  H a n d</h2>
            <h1 className="hero-title">We Help All People In Need Around The World</h1>
            <p className="hero-description">
              From providing food, shelter, and medical aid to supporting education and disaster relief, 
              we work tirelessly to uplift lives and restore hope across borders.
            </p>
            <button className="hero-button">DONATE NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;