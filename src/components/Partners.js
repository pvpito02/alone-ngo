import React from 'react';
import './css/Partners.css';

const Partners = () => {
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

  // Dupliquer les partenaires pour créer un effet de défilement fluide
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="partners">
      <div className="container">
        <div className="partners-scroll-container">
          <div className="partners-track">
            {duplicatedPartners.map((partner, index) => (
              <div key={index} className="partner-card">
                <div className="partner-logo">
                  <img src={partner.logo} alt={partner.name} />
                </div>
                <div className="partner-info">
                  <h3 className="partner-name">{partner.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;