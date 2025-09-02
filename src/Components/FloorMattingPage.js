import React, { useState } from 'react';
import './FloorMattingPage.css';
// === NEW: Import the image directly ===
import headerBackgroundImage from './leatherimg1.jpg'; 

function FloorMattingPage({ onBack }) {
  const [selectedMat, setSelectedMat] = useState(null);

    const matTypes = [
    {
      id: '7d-mat',
      title: '7D Floor Mats',
      category: 'Premium Protection',
      description: 'Our advanced 7D floor mats feature a unique 7-dimensional design that provides superior protection against dirt, water, and wear. The innovative honeycomb structure ensures maximum durability while maintaining a luxurious appearance.',
      benefits: [
        '7-Layer Construction for Ultimate Durability',
        'Advanced Water & Dirt Resistance',
        'Custom-Fit for Perfect Coverage',
        'Easy to Clean & Maintain',
        'Anti-Slip Technology'
      ],
      detailedImages: [
        '/7dimg1.jpg',
        '/7dimg2.jpg',
        '/7dimg3.jpg',
        
      ],
      features: [
        'Premium 7-layer construction for maximum durability',
        'Advanced honeycomb pattern for superior water drainage',
        'Custom-fit design for perfect coverage',
        'Anti-slip backing for secure placement',
        'Easy to clean and maintain',
        'Available in multiple colors and finishes'
      ]
    },
    {
      id: 'leather-mat',
      title: 'Leather Floor Mats',
      category: 'Luxury Elegance',
      description: 'Experience the epitome of luxury with our handcrafted leather floor mats. Made from premium automotive-grade leather, these mats combine sophisticated aesthetics with exceptional protection for your vehicle\'s interior.',
      benefits: [
        'Genuine Automotive Leather',
        'Handcrafted Premium Quality',
        'Luxurious Texture & Feel',
        'Superior Stain Resistance',
        'Custom Embroidery Available'
      ],
      detailedImages: [
        '/leatherimg1.jpg',
        '/leatherimg2.jpg',
        '/leatherimg3.jpg',
        
      ],
      features: [
        'Genuine automotive-grade leather construction',
        'Handcrafted with premium stitching techniques',
        'Superior stain and water resistance',
        'Custom embroidery and personalization options',
        'Professional installation service available',
        'Comprehensive care and maintenance guide'
      ]
    }
  ];

  const handleSeeMore = (matType) => {
    setSelectedMat(matType);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedMat(null);
    window.scrollTo(0, 0);
  };

  // Show detailed view if a mat is selected
  if (selectedMat) {
    return (
      <div className="page-wrapper-luxury floormatting-wrapper">
        <div className="container">
          <button onClick={handleBackToList} className="back-button">&larr; Back to Floor Matting</button>
          
          <div className="page-header-luxury">
            <h1 className="page-title-luxury">{selectedMat.title}</h1>
            <p className="page-subtitle-luxury">{selectedMat.category}</p>
          </div>

          <div className="detail-content">
            <div className="detail-description">
              <h2>Overview</h2>
              <p>{selectedMat.description}</p>
            </div>

            <div className="detail-images-grid">
              {selectedMat.detailedImages.map((image, index) => (
                <div key={index} className="detail-image-container">
                  <img src={image} alt={`${selectedMat.title} detail ${index + 1}`} className="detail-image" />
                </div>
              ))}
            </div>

            <div className="detail-features">
              <h2>Key Features</h2>
              <ul className="features-list">
                {selectedMat.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            <div className="detail-benefits">
              <h2>Benefits</h2>
              <ul className="benefits-list">
                {selectedMat.benefits.map((benefit, index) => (
                  <li key={index}>✓ {benefit}</li>
                ))}
              </ul>
            </div>

            <div className="detail-actions">
              <button className="coating-button">Get a Quote</button>
              <button className="coating-button secondary">Book Consultation</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show main list view
  return (
    <div className="page-wrapper-luxury floormatting-wrapper">
      <div className="container">
        {/* === THIS IS THE NEW HEADER STRUCTURE === */}
        <div className="page-header-luxury">
          <img src={headerBackgroundImage} alt="Luxury car interior with floor mats" className="header-bg-image" />
          <div className="header-overlay"></div>
          <div className="header-content">
            <h1 className="page-title-luxury">Luxury Floor Matting</h1>
            <p className="page-subtitle-luxury">Discover our premium collection of floor mats, engineered for both protection and elegance.</p>
          </div>
        </div>

        <div className="coatings-list">
          {matTypes.map(matType => (
            <div key={matType.id} className="coating-section">
              <div className="coating-content">
                <h2 className="coating-title">{matType.title}</h2>
                <p className="coating-description">{matType.description}</p>
                <ul className="coating-benefits">
                  {matType.benefits.map((benefit, index) => (
                    <li key={index}>✓ {benefit}</li>
                  ))}
                </ul>
                <button className="coating-button" onClick={() => handleSeeMore(matType)}>See More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FloorMattingPage;
