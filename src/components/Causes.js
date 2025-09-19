// Importation des dépendances nécessaires
import React from 'react';
// Importation des styles CSS spécifiques au composant
import './css/Causes.css';

// Définition du composant Causes qui affiche les différentes causes soutenues par l'ONG
const Causes = () => {
  // Tableau des causes avec leurs détails (titre, date, montant, description, image)
  const causes = [
    {
      title: "Your Small Donation Can Change a Life",
      date: "February 14, 2025",
      amount: "$120,000",
      description: "Donation Needed",
      image: "/alone-img/cause1.jpeg"
    },
    {
      title: "A New Album by Rebecca: Help poor people",
      date: "February 14, 2025",
      amount: "$50,000",
      description: "Donation Needed",
      image: "/alone-img/cause2.jpeg"
    },
    {
      title: "South African Pre Primary School Build",
      date: "February 14, 2025",
      amount: "$32,000",
      description: "Donation Needed",
      image: "/alone-img/cause3.jpeg"
    }
  ];

  // Rendu du composant
  return (
    // Section des causes avec un ID pour la navigation
    <section id="causes" className="causes">
      <div className="container">
        {/* Sous-titre et titre de la section */}
        <h5 className="causes-subtitle">We are in a mission</h5>
        <h2 className="causes-title">Explor Our <span>Latest Causes</span></h2>
        
        {/* Grille des cartes de causes */}
        <div className="causes-grid">
          {/* Mapping du tableau des causes pour afficher chaque carte */}
          {causes.map((cause, index) => (
            <div key={index} className="cause-card">
              {/* Conteneur de l'image de la cause */}
              <div className="cause-image-container">
                <img 
                  src={cause.image} 
                  alt={cause.title}
                  className="cause-image"
                  loading="lazy"
                />
              </div>
              {/* Contenu textuel de la carte */}
              <div className="cause-content">
                <h3 className="cause-card-title">{cause.title}</h3>
                <p className="cause-date">{cause.date}</p>
                <p className="cause-amount">{cause.amount}</p>
                <p className="cause-description">{cause.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bouton pour afficher plus de causes */}
        <button className="causes-button">PLUS DE CAUSES</button>
      </div>
    </section>
  );
};

// Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
export default Causes;