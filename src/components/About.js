import React from 'react';
import './css/About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="">
          <h3>Let's Begin More</h3>
        </div>
        <div className="about-content">
          <h2 className="about-title">Welcome to Alone NGO Charity Organization Helping Poor Community.</h2>
          <p className="about-subtitle">Delivering help and hope to children</p>
          <div className="about-actions">
            <button className="about-btn about-btn-primary">DONATE NOW</button>
            <button className="about-btn about-btn-secondary">APPLY FOR VOLUNTEER</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;