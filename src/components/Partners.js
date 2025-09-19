// Importation des dépendances nécessaires
import React from 'react';
// Importation des styles CSS spécifiques au composant
import './css/Partners.css';

// Définition du composant Partners qui affiche les partenaires de l'ONG
const Partners = () => {
  // Tableau des partenaires avec leurs informations (nom, logo, catégorie)
  const partners = [
    {
      name: "Business",
      logo: "/partners/business.jpg",
      category: "Business"
    },
    {
      name: "Shop",
      logo: "/partners/shop.PNG",
      category: "Shopping"
    },
    {
      name: "Cosmetic",
      logo: "/partners/cosmetic.PNG",
      category: "Cosmetic"
    },
    {
      name: "Entreprise",
      logo: "/partners/entreprise.PNG",
      category: "Enterprise"
    },
    {
      name: "Product",
      logo: "/partners/product.PNG",
      category: "Product"
    }
  ];

  // Duplication des partenaires pour créer un effet de défilement infini fluide
  const duplicatedPartners = [...partners, ...partners];

  // Rendu du composant
  return (
    // Section des partenaires
    <section className="partners" aria-label="Nos partenaires">
      <div className="container">
        {/* Conteneur pour l'effet de défilement */}
        <div className="partners-scroll-container">
          {/* Piste de défilement contenant les cartes des partenaires */}
          <div className="partners-track">
            {/* Mapping du tableau des partenaires dupliqués */}
            {duplicatedPartners.map((partner, index) => (
              <div key={index} className="partner-card" role="listitem">
                {/* Logo du partenaire */}
                <div className="partner-logo">
                  <img 
                    src={partner.logo} 
                    alt={`Logo de ${partner.name}`} 
                    loading="lazy"
                  />
                </div>
                {/* Informations du partenaire */}
                <div className="partner-info">
                  <h3 className="partner-name">{partner.name}</h3>
                  <span className="partner-category">{partner.category}</span>
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
export default Partners;