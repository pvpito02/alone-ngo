import React from 'react';
import './css/Mission.css';

const Mission = () => {
  return (
    <section className="mission">
      <div className="container">
        <div className="mission-row">
          <div className="mission-col mission-col-left-1">
            <h2 className="mission-title">We Work in More Than <br></br> <span>7K Countries</span> To Strengthen Civic Space</h2>
          </div>
          <div className="mission-col mission-col-right">
            <p className="mission-description">
              Empowering communities worldwide by protecting human rights, promoting free expression, 
              and supporting active citizen participation. Our work helps ensure that civil society can thrive, 
              speak freely, and shape their own future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;