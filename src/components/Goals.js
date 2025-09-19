import React from 'react';
import './css/Goals.css';

const Goals = () => {
  const goals = [
    { title: "No Poverty", icon: "🚫" },
    { title: "Quality Education", icon: "🎓" },
    { title: "Clean Water and Save life", icon: "💧" },
    { title: "Good Health and Care", icon: "🏥" },
    { title: "Partnerships For the Goals", icon: "🤝" },
    { title: "Zero Hunger", icon: "🍎" }
  ];

  return (
    <section className="goals">
      <div className="container">
        <h2 className="goals-title">Sustainable Development <span>Goals</span></h2>
        
        <div className="goals-grid">
          {goals.map((goal, index) => (
            <div key={index} className="goal-card">
              <div className="goal-icon">{goal.icon}</div>
              <h3 className="goal-title">{goal.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="goals-mission-row">
          <div className="mission-col mission-col-left">
            <div className="mission-content-box">
              <h3 className="mission-subtitle">Help is <span>Our Goal</span> </h3>
              <p className="mission-text">
                At the heart of everything we do is a simple mission: to help those in need. 
                Whether it's providing food, shelter, education, or emergency aid, we strive to bring relief, 
                hope, and lasting change to individuals and communities around the world.
              </p>
              <button className="mission-button">MORE ABOUT</button>
            </div>
          </div>
          <div className="mission-col mission-col-right">
            <div className="mission-highlight-container">
              <h4 className="mission-goal-title">We Are In A Mission</h4>
              <h3 className="mission-highlight">To Help <span>The Helpless</span></h3>
            </div>
            <div className="mission-image">
              <img src="/alone-img/goals.jpg" alt="Our Mission" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 

export default Goals;