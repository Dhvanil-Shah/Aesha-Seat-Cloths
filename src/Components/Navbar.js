import React, { useState } from 'react';
import './Navbar.css'; 

function Navbar({ onNavigateHome, onNavigateServices, onNavigateBooking }) {
  const businessAddress = "Aesha Seat";
  const googleMapsUrl = `https://maps.app.goo.gl/cde1nRwizEgidawt7?api=1&query=${encodeURIComponent(businessAddress)}`;
  const google_contacturl=`https://g.co/kgs/TL9NMux?api=1&query=${encodeURIComponent(businessAddress)}`;
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };
  
    return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <button type="button" className="navbar-brand" onClick={onNavigateHome}>
            <span className="brand-auto">AESHA</span> SEAT CLOTHS
          </button>
          <nav className="navbar-nav-desktop">
            <button type="button" className="nav-link" onClick={onNavigateHome}>Home</button>
            <button type="button" className="nav-link" onClick={onNavigateServices}>Services</button>
            <button type="button" className="nav-link" onClick={onNavigateBooking}>Book</button>
            <a href="#" className="nav-link">Materials</a>
            <a href={google_contacturl} target="_blank" rel="noopener noreferrer" className="nav-link">Contact</a>
          </nav>
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="navbar-button">
            Get Directions
          </a>
          
          <button className="hamburger-icon" onClick={toggleSidenav}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>
      </header>

      <div className={`sidenav ${isSidenavOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidenav}>&times;</button>
        <button type="button" onClick={() => { onNavigateHome && onNavigateHome(); toggleSidenav(); }} className="sidenav-link">Home</button>
        <button type="button" onClick={() => { onNavigateServices && onNavigateServices(); toggleSidenav(); }} className="sidenav-link">Services</button>
        <button type="button" onClick={() => { onNavigateBooking && onNavigateBooking(); toggleSidenav(); }} className="sidenav-link">Book</button>
        <a href="#" onClick={toggleSidenav} className="sidenav-link">Materials</a>
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" onClick={toggleSidenav} className="sidenav-link">Contact</a>
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="sidenav-button">
            Get Directions
        </a>
      </div>

      {isSidenavOpen && <div className="overlay" onClick={toggleSidenav}></div>}
    </> );
}

export default Navbar;

