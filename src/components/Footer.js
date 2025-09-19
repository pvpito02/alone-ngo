// Importation des dépendances nécessaires
import React from 'react';
// Importation des styles CSS spécifiques au composant
import './css/Footer.css';

// Définition du composant Footer (pied de page du site)
const Footer = () => {
  // Tableau des images pour la galerie des faits marquants
  const highlightImages = [
    "/alone-img/footer1.jpeg",
    "/alone-img/footer2.jpeg",
    "/alone-img/footer3.PNG",
    "/alone-img/footer4.PNG",
    "/alone-img/footer5.PNG",
    "/alone-img/footer6.PNG"
  ];

  // Rendu du composant
  return (
    // Section principale du pied de page
    <footer className="footer" role="contentinfo">
      <div className="container">
        {/* Conteneur principal des sections du pied de page */}
        <div className="footer-content">
          {/* Section d'information sur l'ONG */}
          <div className="footer-section">
            <h3 className="footer-title">INFORMATION</h3>
            <p className="footer-description">
              Dedicated to making a difference, our NGO provides essential support, 
              resources, and hope to vulnerable communities around the world.
            </p>
            <a href="#" className="footer-link">EN SAVOIR PLUS</a>
          </div>
          
          {/* Section de contact */}
          <div className="footer-section">
            <h3 className="footer-title">CONTACT US</h3>
            <address className="footer-address">
              Elliott Ave, Parkville VIC 3052, Melbourne Canada<br />
              Téléphone: (+42) 348 952 11<br />
              Email: info@domain.com
            </address>
            <a href="#" className="footer-link">NOUS CONTACTER</a>
          </div>
          
          {/* Section des liens rapides */}
          <div className="footer-section">
            <h3 className="footer-title">LIENS RAPIDES</h3>
            <ul className="footer-links">
              <li><a href="#">S'impliquer</a></li>
              <li><a href="#">Faire un don</a></li>
              <li><a href="#">Devenir bénévole</a></li>
              <li><a href="#">Carrières</a></li>
              <li><a href="#">Plan du site</a></li>
            </ul>
          </div>
          
          {/* Section des faits marquants avec galerie d'images */}
          <div className="footer-section">
            <h3 className="footer-title">FAITS MARQUANTS</h3>
            <p className="footer-highlights">Découvrez nos dernières actions...</p>
            <div className="footer-highlights-grid">
              {highlightImages.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`Action ${index + 1} de l'ONG`} 
                  className="footer-highlight-image"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Section inférieure du pied de page */}
        <div className="footer-bottom">
          <p className="copyright"> Tous droits réservés 2025 - Alone</p>
          <p className="footer-note">Achetez Alone sur 4 envolts</p>
        </div>
      </div>
    </footer>
  );
};

// Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
export default Footer;