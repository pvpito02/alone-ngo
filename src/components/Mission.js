// Importation des dépendances nécessaires
import React from 'react';
// Importation des styles CSS spécifiques au composant
import './css/Mission.css';

// Définition du composant Mission qui présente la portée internationale de l'ONG
const Mission = () => {
  // Rendu du composant
  return (
    // Section de la mission avec une classe pour le style
    <section className="mission">
      <div className="container">
        {/* Ligne principale de la section mission */}
        <div className="mission-row">
          {/* Colonne de gauche avec le titre principal */}
          <div className="mission-col mission-col-left-1">
            <h2 className="mission-title">Nous travaillons dans plus de <br></br> <span>7 000 pays</span> pour renforcer l'espace civique</h2>
          </div>
          {/* Colonne de droite avec la description de la mission */}
          <div className="mission-col mission-col-right">
            <p className="mission-description">
              Nous autonomisons les communautés du monde entier en protégeant les droits de l'homme, en promouvant la liberté d'expression 
              et en soutenant la participation active des citoyens. Notre travail contribue à garantir que la société civile peut prospérer, 
              s'exprimer librement et façonner son propre avenir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
export default Mission;