import React from 'react';
import './css/Footer.css';

const Footer = () => {
  // Tableau d'images 
  const highlightImages = [
    "/alone-img/footer1.jpeg",
    "/alone-img/footer2.jpeg",
    "/alone-img/footer3.PNG",
    "/alone-img/footer4.PNG",
    "/alone-img/footer5.PNG",
    "/alone-img/footer6.PNG"
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">INFORMATION</h3>
            <p className="footer-description">
              Dedicated to making a difference, our NGO provides essential support, 
              resources, and hope to vulnerable communities around the world.
            </p>
            <a href="#" className="footer-link">READ MORE</a>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">CONTACT US</h3>
            <address className="footer-address">
              Elliott Ave, Parkville VIC 3052, Melbourne Canada<br />
              Phone: (+42) 348 952 11<br />
              Email: info@domain.com
            </address>
            <a href="#" className="footer-link">CONTACT US</a>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">QUICK LINKS</h3>
            <ul className="footer-links">
              <li><a href="#">Get involved</a></li>
              <li><a href="#">Donate Now</a></li>
              <li><a href="#">Become a Volunteer</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Site Map</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">HIGHLIGHTS</h3>
            <p className="footer-highlights">Content for highlights goes here...</p>
            <div className="footer-highlights-grid">
              {highlightImages.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`Highlight ${index + 1}`} 
                  className="footer-highlight-image"
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© All right reserved 2025 Alone</p>
          <p className="footer-note">Buy Alone on 4 envolts</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;