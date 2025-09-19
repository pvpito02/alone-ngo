import React from 'react';
import './css/Header.css';

const Header = () => {
  return (
    <>
      {/* Conteneur fixe pour les deux barres */}
      <div className="header-fixed">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="container">
            <div className="top-bar-content">
              <div className="phone"><span>Phone No: </span> (+42) 348 952 11</div>
              <div className="social-section">
                <span>Follow Us:</span>
                <div className="social-icons">
                  <a href="#" className="social-icon">fb</a>
                  <a href="#" className="social-icon">tw</a>
                  <a href="#" className="social-icon">ig</a>
                  <a href="#" className="social-icon">in</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header className="main-header">
          <div className="container">
            <div className="header-content">
              <div className="logo">
                <h1>ALONE</h1>
                <span>NGO Organization</span>
              </div>
              
              <nav className="navigation">
                <a href="#home">HOME ▼</a>
                <a href="#pages">PAGES ▼</a>
                <a href="#blog">BLOG ▼</a>
                <a href="#causes">CAUSES ▼</a>
                <a href="#shop">SHOP ▼</a>
                <a href="#contact">CONTACT ▼</a>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;