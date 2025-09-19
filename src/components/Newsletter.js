import React from 'react';
import './css/Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">SUBSCRIBE FOR NEWSLETTER</h2>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email here..." 
              className="newsletter-input"
            />
            <button className="newsletter-button">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;