import React from 'react';
import './BodyCoatingPage.css'; // We will create this CSS file next

// A reusable component for each coating's detailed section
const CoatingSection = ({ coating }) => (
  <div className="coating-section">
    <div className="coating-image-container">
      <img src={coating.imageUrl} alt={coating.title} className="coating-image" />
    </div>
    <div className="coating-content">
      <h2 className="coating-title">{coating.title}</h2>
      <p className="coating-description">{coating.description}</p>
      <ul className="coating-benefits">
        {coating.benefits.map((benefit, index) => (
          <li key={index}>✓ {benefit}</li>
        ))}
      </ul>
      <button className="coating-button">Get a Quote</button>
    </div>
  </div>
);

function BodyCoatingPage({ onBack }) {
  const coatings = [
    {
      id: 'diamond',
      title: 'Diamond Coating',
      description: 'The pinnacle of paint protection. Our Diamond Coating offers unparalleled hardness and a brilliant, diamond-like shine that lasts for years. This is the ultimate investment for your vehicle.',
      benefits: ['Extreme Scratch Resistance (10H Hardness)', 'Unmatched Gloss and Shine', 'Superior Hydrophobic Properties', '5+ Years of Durability'],
      imageUrl: 'https://placehold.co/800x600/111/fff?text=Diamond+Finish'
    },
    {
      id: 'ceramic',
      title: 'Ceramic Coating',
      description: 'A professional-grade shield for your paintwork. Ceramic Coating creates a durable, slick surface that repels water, dirt, and UV rays, making your car easier to clean and keeping it glossy.',
      benefits: ['Excellent UV & Chemical Resistance', 'Deep, Wet-Look Gloss', 'Enhanced Paint Clarity', 'Up to 3 Years of Protection'],
      imageUrl: 'https://placehold.co/800x600/222/fff?text=Ceramic+Sheen'
    },
    {
      id: 'graphene',
      title: 'Graphene Coating',
      description: 'The next generation of protection. Graphene-infused coatings offer all the benefits of ceramic with added heat dispersion to reduce water spotting and enhanced durability.',
      benefits: ['Advanced Heat Dispersion', 'Reduced Water Spotting', 'Incredible Slickness', 'Up to 4 Years of Protection'],
      imageUrl: 'https://placehold.co/800x600/333/fff?text=Graphene+Layer'
    }
  ];

  return (
    <div className="page-wrapper-luxury bodycoating-wrapper">
      <div className="container">
        <div className="page-header-luxury">
          <h1 className="page-title-luxury">Protective Body Coatings</h1>
          <p className="page-subtitle-luxury">Discover our range of professional coatings, engineered to provide the ultimate shield and shine for your vehicle.</p>
        </div>

        <div className="coatings-list">
          {coatings.map(coating => (
            <CoatingSection key={coating.id} coating={coating} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BodyCoatingPage;
