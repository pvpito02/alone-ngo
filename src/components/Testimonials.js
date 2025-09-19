import React from 'react';
import './css/Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonial-wrapper">
          <div className="testimonial-image">
            <img src="/poche-main.png" alt="Testimonial visual" />
          </div>
          
          <div className="testimonial-content">
            <h2 className="testimonials-title">We Are A Mission</h2>
            <h3 className="testimonials-subtitle">What Clients Says About Performance</h3>
            
            <blockquote className="testimonial-quote">
              "This charity is doing amazing work in rural areas where help is often overlooked. 
              I'm proud to support their mission to lift families out of poverty with dignity and care."
            </blockquote>
            
            <div className="testimonial-author">
              <img src="/alone-img/testimonial.jpg" alt="Zahid R." className="author-avatar" />
              <div className="author-info">
                <span className="author-name">— Zahid R.</span>
                <span className="author-location">Neirobi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;