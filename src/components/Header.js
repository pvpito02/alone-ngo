// Importation des dépendances nécessaires
import React from 'react';
// Importation des styles CSS spécifiques au composant
import './css/Header.css';

// Définition du composant Header (en-tête du site)
const Header = () => {
  // Rendu du composant
  return (
    // Fragment React pour retourner plusieurs éléments sans wrapper supplémentaire
    <>
      {/* Conteneur fixe qui regroupe la barre supérieure et l'en-tête principal */}
      <div className="header-fixed">
        {/* Barre supérieure avec informations de contact et réseaux sociaux */}
        <div className="top-bar">
          <div className="container">
            <div className="top-bar-content">
              {/* Numéro de téléphone */}
              <div className="phone"><span>Phone No: </span> (+42) 348 952 11</div>
              
              {/* Section des réseaux sociaux */}
              <div className="social-section">
                <span>Follow Us:</span>
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="Facebook">fb</a>
                  <a href="#" className="social-icon" aria-label="Twitter">tw</a>
                  <a href="#" className="social-icon" aria-label="Instagram">ig</a>
                  <a href="#" className="social-icon" aria-label="LinkedIn">in</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* En-tête principal avec le logo et la navigation */}
        <header className="main-header">
          <div className="container">
            <div className="header-content">
              {/* Logo de l'organisation */}
              <div className="logo">
                <h1>ALONE</h1>
                <span>NGO Organization</span>
              </div>
              
              {/* Navigation principale */}
              <nav className="navigation" aria-label="Navigation principale">
                <a href="#home">ACCUEIL ▼</a>
                <a href="#pages">PAGES ▼</a>
                <a href="#blog">BLOG ▼</a>
                <a href="#causes">CAUSES ▼</a>
                <a href="#shop">BOUTIQUE ▼</a>
                <a href="#contact">CONTACT ▼</a>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

// Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
export default Header;