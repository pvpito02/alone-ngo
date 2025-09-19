// Importation des dépendances nécessaires
import React from 'react';
// Importation des styles CSS spécifiques au composant
import './css/Goals.css';

// Définition du composant Goals
const Goals = () => {
  // Tableau des objectifs de développement durable avec leurs icônes
  const goals = [
    { title: "No Poverty", icon: "🚫" },
    { title: "Quality Education", icon: "🎓" },
    { title: "Clean Water and Save life", icon: "💧" },
    { title: "Good Health and Care", icon: "🏥" },
    { title: "Partnerships For the Goals", icon: "🤝" },
    { title: "Zero Hunger", icon: "🍎" }
  ];

  return (
    // Section principale des objectifs
    <section className="goals">
      <div className="container">
        {/* Titre principal de la section */}
        <h2 className="goals-title">Sustainable Development <span>Goals</span></h2>
        
        {/* Grille des objectifs */}
        <div className="goals-grid">
          {/* Mapping du tableau goals pour afficher chaque objectif */}
          {goals.map((goal, index) => (
            <div key={index} className="goal-card">
              <div className="goal-icon">{goal.icon}</div>
              <h3 className="goal-title">{goal.title}</h3>
            </div>
          ))}
        </div>
        
        {/* Section de mission */}
        <div className="goals-mission-row">
          {/* Colonne de gauche : texte de mission */}
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
          {/* Colonne de droite : image et titre de mission */}
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

// Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
export default Goals;