// Importation des dépendances nécessaires
import React from 'react';
// Importation des styles CSS spécifiques au composant
import './css/News.css';

// Définition du composant News qui affiche les actualités et mises à jour de l'ONG
const News = () => {
  // Tableau des articles d'actualités avec leurs détails
  const newsItems = [
    {
      date: "MAY 14, 2025",
      comments: 0,
      title: "Sees boom in younger volunteers following pandemic",
      author: "By Bearsthemes",
      image: "/alone-img/News1.PNG",
      avatar: "/alone-img/comment-author-1.jpg"
    },
    {
      date: "MAY 11, 2025",
      comments: 0,
      title: "Breaking Barriers: Empowering Women in Sports",
      author: "By Bearsthemes",
      image: "/alone-img/News2.PNG",
      avatar: "/alone-img/comment-author-2.jpg"
    },
    {
      date: "MAY 03, 2025",
      comments: 0,
      title: "Summit to focus on responsible use of AI in fundraising",
      author: "By Bearsthemes",
      image: "/alone-img/News3.PNG",
      avatar: "/alone-img/comment-author-3.jpg"
    }
  ];

  // Rendu du composant
  return (
    // Section des actualités
    <section className="news">
      <div className="container">
        {/* Titres de la section */}
        <h2 className="news-title">We Are In A Mission</h2>
        <h3 className="news-subtitle">Explor Our <span>News & Updates</span></h3>
        
        {/* Grille des articles d'actualités */}
        <div className="news-grid">
          {/* Mapping du tableau des articles pour afficher chaque carte */}
          {newsItems.map((item, index) => (
            <article key={index} className="news-card">
              {/* Conteneur de l'image de l'article */}
              <div className="news-image-container">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="news-image" 
                  loading="lazy"
                />
              </div>
              {/* Contenu de la carte d'actualité */}
              <div className="news-content">
                {/* Métadonnées (date et nombre de commentaires) */}
                <div className="news-meta">
                  <time className="news-date" dateTime={item.date}>{item.date}</time>
                  <div className="news-comments" aria-label={`${item.comments} commentaires`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{item.comments}</span>
                  </div>
                </div>
                {/* Titre de l'article */}
                <h4 className="news-item-title">{item.title}</h4>
                {/* Auteur de l'article */}
                <div className="news-author-container">
                  <img 
                    src={item.avatar} 
                    alt={`Photo de ${item.author}`} 
                    className="author-avatar" 
                    loading="lazy"
                  />
                  <p className="news-author">{item.author}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Bouton pour afficher plus d'actualités */}
        <button className="news-button">PLUS D'ACTUALITÉS</button>
      </div>
    </section>
  );
};

// Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
export default News;