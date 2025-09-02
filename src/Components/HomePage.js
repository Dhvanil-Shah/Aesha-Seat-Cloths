import React from 'react';
import Hero from './Hero';
import Services from './Services';
import CallbackForm from './CallbackForm';

function HomePage({ onNavigate }) {
  return (
    <>
      <Hero />
      <Services onNavigate={onNavigate} />
      <CallbackForm />
    </>
  );
}

export default HomePage;




