// Importation des dépendances nécessaires
import React from 'react';
// Importation des styles CSS spécifiques au composant
import './css/Events.css';

// Définition du composant Events qui affiche les événements à venir de l'ONG
const Events = () => {
  // Tableau des événements avec leurs détails (titre, description, lieu, date, image)
  const events = [
    {
      title: "Children, Helping",
      description: "Use Hashtags To Support Online",
      location: "United States",
      date: "07 Mar 2026",
      image: "/alone-img/events2.PNG"
    },
    {
      title: "Children, Donation",
      description: "Use Hashtags To Support Online",
      location: "United States",
      date: "06 Oct 2025",
      image: "/alone-img/cause1.jpeg"
    }
  ];

  // Rendu du composant
  return (
    // Section des événements
    <section className="events">
      <div className="container">
        {/* Conteneur principal du contenu des événements */}
        <div className="events-content">
          {/* Colonne de gauche avec le titre et le bouton */}
          <div className="events-left">
            <h3 className="events-subtitle">We Are In A Mission</h3>
            <h2 className="events-title">Explor Our <br></br><span>Upcoming Events</span> </h2>
            <button className="events-button">PLUS D'ÉVÉNEMENTS</button>
          </div>
          
          {/* Colonne de droite avec la liste des événements */}
          <div className="events-right">
            {/* Mapping du tableau des événements pour afficher chaque carte */}
            {events.map((event, index) => (
              <div key={index} className="event-card">
                {/* Conteneur de l'image de l'événement */}
                <div className="event-image">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    loading="lazy"
                  />
                </div>
                {/* Détails de l'événement */}
                <div className="event-details">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  <div className="event-info">
                    {/* Localisation de l'événement */}
                    <div className="event-location">
                      <span className="event-label">LIEU :</span>
                      <span className="event-value">{event.location}</span>
                    </div>
                    {/* Date de l'événement */}
                    <div className="event-date">
                      <span className="event-label">DATE :</span>
                      <span className="event-value">{event.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
export default Events;