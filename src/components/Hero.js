// Importation des dépendances nécessaires
import React from 'react';
// Importation des styles CSS spécifiques au composant
import './css/Hero.css';

// Définition du composant Hero (section héro en haut de la page d'accueil)
const Hero = () => {
  // Rendu du composant
  return (
    // Section héro avec un ID pour la navigation
    <section id="home" className="hero">
      {/* Overlay pour améliorer la lisibilité du texte sur l'image de fond */}
      <div className="hero-overlay">
        <div className="container">
          {/* Contenu principal de la section héro */}
          <div className="hero-content">
            {/* Sous-titre avec espacement entre les lettres */}
            <h2 className="hero-subtitle">R a i s e  Y o u r  H a n d</h2>
            
            {/* Titre principal accrocheur */}
            <h1 className="hero-title">We Help All People In Need Around The World</h1>
            
            {/* Description de la mission */}
            <p className="hero-description">
              From providing food, shelter, and medical aid to supporting education and disaster relief, 
              we work tirelessly to uplift lives and restore hope across borders.
            </p>
            
            {/* Bouton d'appel à l'action principal */}
            <button className="hero-button">DONATE NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
export default Hero;