// Importation des dépendances nécessaires
import React from 'react';
// Importation des styles CSS spécifiques au composant
import './css/Stats.css';

// Définition du composant Stats qui affiche les statistiques de l'ONG
const Stats = () => {
  // Rendu du composant
  return (
    // Section des statistiques
    <section className="stats" aria-label="Nos réalisations">
      <div className="container">
        {/* Conteneur principal du contenu des statistiques */}
        <div className="stats-content">
          {/* En-tête de la section des statistiques */}
          <div className="stats-header">
            <h2 className="stats-title">Changeons le monde <br></br> <span className="stats-title1">avec humanité</span></h2>
            <p className="stats-subtitle">Apporter de l'aide et de l'espoir aux enfants</p>
          </div>
          
          {/* Grille des statistiques */}
          <div className="stats-grid" role="list">
            {/* Premier élément de statistique */}
            <div className="stat-item" role="listitem">
              <div className="stat-number" aria-label="65 960 projets">65 960</div>
              <div className="stat-label">Projets réalisés</div>
            </div>
            
            {/* Deuxième élément de statistique */}
            <div className="stat-item" role="listitem">
              <div className="stat-number" aria-label="3 719 personnes">3 719</div>
              <div className="stat-label">Personnes aidées</div>
            </div>
            
            {/* Troisième élément de statistique */}
            <div className="stat-item" role="listitem">
              <div className="stat-number" aria-label="569 récompenses">569</div>
              <div className="stat-label">Récompenses obtenues</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
export default Stats;