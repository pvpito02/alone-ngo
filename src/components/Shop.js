import React from 'react';
import './css/Shop.css';

const Shop = () => {
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

  return (
    <section id="shop" className="shop">
      <div className="container">
        <h4 className="shop-title">We Are In A Mission</h4>
        <h3 className="shop-subtitle">Product <span>Shop</span></h3>
        
        <div className="shop-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h4 className="product-name">{product.name}</h4>
                {product.price && <p className="product-price">{product.price}</p>}
                <span className="product-tag">{product.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;