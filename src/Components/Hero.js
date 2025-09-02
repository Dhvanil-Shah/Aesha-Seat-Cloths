import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <img 
        src="/herobackground.png?q=80&w=2070&fit=crop" 
        alt="Luxury Car" 
        className="hero-bg-image"
      />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Make your car journey more<span className="highlight"> luxurious </span> <span className='highlight'>and enjoyable</span>
        </h1>
        <p className="hero-subtitle">
          From custom seat covers to protective body coatings, we craft your vehicle's identity with precision and passion.
        </p>
        <a href="#services" className="hero-button">
          Explore Our Services
        </a>
      </div>
    </section>
  );
}

export default Hero;
