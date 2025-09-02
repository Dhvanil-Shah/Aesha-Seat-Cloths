import React from 'react';

function Footer() {
  const businessAddress = "City Center, 15/16, Gayatri Mandir Rd, opposite Bhramahkumari, opp. Brhmakumaris Center, Mahavirnagar, Himatnagar, Gujarat 383001";
  const googleMapsUrl = `https://g.co/kgs/TL9NMux?api=1&query=${encodeURIComponent(businessAddress)}`;

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3><span className="brand-auto">Ae</span>Sha</h3>
          <p>We bring your vision to life with unparalleled craftsmanship.</p>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#">Book Now</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul>
            <li><a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">{businessAddress}</a></li>
            <li><a href="tel:+911234567890">(+91) 9825538414</a></li>
            <li><a href="mailto:contact@autoelite.com">kalpnik.shah@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Aesha Seat Cloths. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
