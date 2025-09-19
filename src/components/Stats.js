import React from 'react';
import './css/Stats.css';

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-content">
          <div className="stats-header">
            <h2 className="stats-title">Lets Change The <br></br> <span className="stats-title1">World With Humanity</span></h2>
            <p className="stats-subtitle">Delivering help and hope to children</p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">6,5960</div>
              <div className="stat-label">Completed Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3719</div>
              <div className="stat-label">People We Helped</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">569</div>
              <div className="stat-label">Awards Achieved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;