

import React from 'react';

// The onNavigate prop is new. It will be a function passed from App.js
const ServiceCard = ({ title, description, imageUrl, onNavigate }) => (
  // We now call onNavigate when the card is clicked
  <div className="service-card" onClick={onNavigate}>
    <img src={imageUrl} alt={title} className="card-image" />
    <div className="card-content">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a href="#" className="card-link" onClick={(e) => e.preventDefault()}>Learn More &rarr;</a>
    </div>
  </div>
);

// We are also passing the onNavigate function to this component
function Services({ onNavigate }) {
  const servicesData = [
    {
      id: "seatCovers",
      title: "Custom Seat Covers",
      description: "Tailor-made seat covers with your choice of design, material, and color for ultimate comfort and style.",
      imageUrl: "/custom_seatCoverhh.png"
    },
    {
      id: "bodyCoating",
      title: "Protective Body Coating",
      description: "Guard your car's paint with our premium ceramic and graphene coatings for a lasting, glossy finish.",
      imageUrl: "/coating.png?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "floorMatting",
      title: "Luxury Floor Matting",
      description: "Custom-fit floor mats that provide superior protection and a clean, sophisticated look to your car's interior.",
      imageUrl: "/Floormetting.png"
    }
  ];

  return (
    <section id="services" className="services container">
      <h2 className="section-title">Choose Your Customization</h2>
      <p className="section-subtitle">Select a service to begin your car's transformation.</p>
      <div className="services-grid">
        {servicesData.map(service => (
          <ServiceCard 
            key={service.id} 
            {...service} 
            // When a card is clicked, we call onNavigate with the service's ID
            onNavigate={() => onNavigate(service.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
