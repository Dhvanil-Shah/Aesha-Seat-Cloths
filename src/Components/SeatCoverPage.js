
import React, { useState } from 'react';
import './SeatCoverPage.css'; 

// Section layout matching BodyCoatingPage
const MaterialSection = ({ material, onSelect }) => (
  <div className="coating-section">
    <div className="coating-image-container">
      <img src={material.imageUrl} alt={material.title} className="coating-image" />
    </div>
    <div className="coating-content">
      <h2 className="coating-title">{material.title}</h2>
      <p className="coating-description">{material.description}</p>
      <button className="coating-button" onClick={onSelect}>View Material</button>
    </div>
  </div>
);

// New component for the Product Detail Modal
const ProductDetailModal = ({ product, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close-button" onClick={onClose}>&times;</button>
      <div className="modal-image-container">
        <img src={product.imageUrl} alt={product.title} className="modal-image" />
      </div>
      <div className="modal-details">
        <p className="modal-category">{product.category}</p>
        <h1 className="modal-title">{product.title}</h1>
        <p className="modal-description">{product.description}</p>
        <div className="modal-button-group">
          <button className="modal-contact-button">Enquire About This Material</button>
          {/* === THIS IS THE NEW BUTTON === */}
          <button className="modal-secondary-button">View Designs in this</button>
        </div>
      </div>
    </div>
  </div>
);


function SeatCoverPage({ onBack }) {
  // This state will hold the product that the user wants to see in detail
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 'fabric',
      title: 'Fabric',
      category: 'Woven Textile', // The category is a short label
      description: 'Comfortable, breathable, and available in a wide variety of textures and colors. Ideal for daily use and warmer climates.',
      imageUrl: '/Febric.png'
    },
    {
      id: 'rexine',
      title: 'Rexine Leather',
      category: 'Leatherette', // The category is a short label
      description: 'A durable and cost-effective synthetic leather that is water-resistant and very easy to clean. Perfect for a tough, low-maintenance interior.',
      imageUrl: '/Rexine-removebg-preview.png'
    },
    {
      id: 'pu-leather',
      title: 'Polyurethane (PU) Leather',
      category: 'Vegan Leather', // The category is a short label
      description: 'Our premium vegan leather. It\'s softer and more flexible than Rexine, offering a luxurious experience that closely mimics the feel of genuine leather.',
      imageUrl: '/pu.png'
    }
  ];

  return (
    <div className="page-wrapper-luxury seatcover-wrapper">
      <div className="container">
        <div className="page-header-luxury">
          <h1 className="page-title-luxury">The Aesha Collection</h1>
          <p className="page-subtitle-luxury">An exclusive selection of materials, crafted for the discerning automotive enthusiast.</p>
        </div>

        <div className="coatings-list">
          {products.map(product => (
            <MaterialSection
              key={product.id}
              material={product}
              onSelect={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      {/* Conditionally render the modal only when a product is selected */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          // Pass a function to close the modal by resetting the state
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}

export default SeatCoverPage;
