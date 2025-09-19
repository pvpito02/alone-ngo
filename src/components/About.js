// Importation des dépendances nécessaires
import React from 'react';
// Importation des styles CSS spécifiques au composant
import './css/About.css';

// Définition du composant About
const About = () => {
  // Rendu du composant
  return (
    // Section principale "À propos"
    <section className="about">
      <div className="container">
        {/* En-tête de la section */}
        <div className="">
          <h3>Let's Begin More</h3>
        </div>
        {/* Contenu principal de la section */}
        <div className="about-content">
          {/* Titre principal */}
          <h2 className="about-title">Welcome to Alone NGO Charity Organization Helping Poor Community.</h2>
          {/* Sous-titre */}
          <p className="about-subtitle">Delivering help and hope to children</p>
          {/* Boutons d'action */}
          <div className="about-actions">
            <button className="about-btn about-btn-primary">DONATE NOW</button>
            <button className="about-btn about-btn-secondary">APPLY FOR VOLUNTEER</button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
export default About;