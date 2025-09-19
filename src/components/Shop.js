// Importation des dépendances nécessaires
import React from 'react';
// Importation des styles CSS spécifiques au composant
import './css/Shop.css';

// Définition du composant Shop qui affiche les produits en vente
const Shop = () => {
  // Tableau des produits avec leurs informations (nom, prix, étiquette, image)
  const products = [
    {
      name: "Sana Fatir Reusable Collection",
      price: "£15.00 – £20.00",
      tag: "Handmade",
      image: "/alone-img/shop1.jpeg"
    },
    {
      name: "Fair-Trade Coffee Beans",
      price: "£30.00 £13.00",
      tag: "Eco-Friendly",
      image: "/alone-img/shop2.jpeg"
    },
    {
      name: "Aloe Vera Eco Hand Soap",
      price: "£5.00",
      tag: "Natural",
      image: "/alone-img/shop3.jpeg"
    },
    {
      name: "Natural Lip Balm",
      price: "£7.00",
      tag: "Natural",
      image: "/alone-img/shop4.jpeg"
    },
  ];

  // Rendu du composant
  return (
    // Section de la boutique avec un ID pour la navigation
    <section id="shop" className="shop">
      <div className="container">
        {/* Titres de la section */}
        <h4 className="shop-title">We Are In A Mission</h4>
        <h3 className="shop-subtitle">Boutique <span>Produits</span></h3>
        
        {/* Grille des produits */}
        <div className="shop-grid">
          {/* Mapping du tableau des produits pour afficher chaque carte de produit */}
          {products.map((product, index) => (
            <article key={index} className="product-card" role="article">
              {/* Image du produit */}
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  loading="lazy"
                />
              </div>
              {/* Informations du produit */}
              <div className="product-info">
                <h4 className="product-name">{product.name}</h4>
                {/* Affichage du prix si disponible */}
                {product.price && (
                  <p className="product-price">
                    {product.price.includes('£') 
                      ? product.price.replace(/£/g, '€') // Conversion des livres en euros
                      : product.price}
                  </p>
                )}
                {/* Étiquette du produit (ex: Fait main, Écologique, etc.) */}
                <span className="product-tag">
                  {product.tag === 'Handmade' ? 'Fait main' : 
                   product.tag === 'Eco-Friendly' ? 'Écologique' : 
                   product.tag === 'Natural' ? 'Naturel' : product.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
export default Shop;