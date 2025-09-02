import React, { useState } from 'react';
import './BookingPage.css';

function BookingPage({ onBack }) {
  const carBrands = [
    'Toyota', 'Maruti Suzuki', 'Hyundai', 'Honda', 'Tata', 'Mahindra', 'Kia',
    'Volkswagen', 'Skoda', 'Nissan', 'Renault', 'BMW', 'Mercedes-Benz', 'Audi',
    'Ford', 'Jeep', 'Volvo', 'Lexus', 'Porsche', 'Jaguar', 'Land Rover', 'MG',
    'Citroën', 'BYD', 'Tesla', 'Fiat', 'Peugeot', 'Mitsubishi', 'Isuzu',
    'Datsun', 'Mini', 'Rolls-Royce', 'Bentley'
  ];
  const carColors = [
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Black', hex: '#111827' },
    { name: 'Silver', hex: '#C0C0C0' },
    { name: 'Gray', hex: '#6B7280' },
    { name: 'Blue', hex: '#2563EB' },
    { name: 'Red', hex: '#DC2626' },
    { name: 'Green', hex: '#16A34A' },
    { name: 'Yellow', hex: '#F59E0B' },
    { name: 'Orange', hex: '#F97316' },
    { name: 'Brown', hex: '#92400E' },
    { name: 'Beige', hex: '#D1BFA9' },
    { name: 'Maroon', hex: '#7F1D1D' },
    { name: 'Teal', hex: '#0D9488' },
    { name: 'Purple', hex: '#7C3AED' },
  ];

  const [selectedColor, setSelectedColor] = useState(carColors[0]);
  const [isColorOpen, setIsColorOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    alert(`Thank you, ${name}! Your booking request has been received. We'll contact you shortly.`);
    event.currentTarget.reset();
    setSelectedColor(carColors[0]);
    setIsColorOpen(false);
  };

  return (
    <div className="page-wrapper-luxury booking-wrapper">
      <div className="container">
        <div className="page-header-luxury">
          <h1 className="page-title-luxury">Book an Appointment</h1>
          <p className="page-subtitle-luxury">Share a few details and we'll schedule your personalized consultation.</p>
        </div>

        <div className="booking-card">
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Customer Name</label>
                <input id="name" name="name" type="text" placeholder="e.g. Priya Shah" required />
              </div>
              <div className="form-field">
                <label htmlFor="age">Age</label>
                <input id="age" name="age" type="number" min="0" max="120" placeholder="e.g. 32" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender" required>
                  <option value="" disabled selected>Choose...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" inputMode="numeric" pattern="^[0-9]{10}$" placeholder="10-digit number" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="brand">Car Brand</label>
                <input id="brand" name="carBrand" type="text" placeholder="e.g. Toyota" list="carBrands" autoComplete="off" required />
                <datalist id="carBrands">
                  {carBrands.map((brand) => (
                    <option key={brand} value={brand} />
                  ))}
                </datalist>
              </div>
              <div className="form-field">
                <label htmlFor="model">Car Model</label>
                <input id="model" name="carModel" type="text" placeholder="e.g. Fortuner" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="modelYear">Model Year</label>
                <input id="modelYear" name="carModelYear" type="number" min="1990" max="2099" step="1" placeholder="e.g. 2022" required />
              </div>
              <div className="form-field">
                <label>Car Color</label>
                <div className="color-select">
                  <button type="button" className="color-select__button" onClick={() => setIsColorOpen(!isColorOpen)} aria-haspopup="listbox" aria-expanded={isColorOpen}>
                    <span className="color-swatch" style={{ backgroundColor: selectedColor.hex }} />
                    <span className="color-select__label">{selectedColor.name}</span>
                    <span className="color-select__chevron">▾</span>
                  </button>
                  {isColorOpen && (
                    <ul className="color-select__menu" role="listbox">
                      {carColors.map(color => (
                        <li key={color.name} role="option" aria-selected={selectedColor.name === color.name} className="color-select__option" onClick={() => { setSelectedColor(color); setIsColorOpen(false); }}>
                          <span className="color-swatch" style={{ backgroundColor: color.hex }} />
                          <span className="color-select__option-label">{color.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <input type="hidden" name="carColor" value={selectedColor.name} />
                </div>
              </div>
            </div>

            <div className="form-row single">
              <div className="form-field">
                <label htmlFor="address">Address</label>
                <textarea id="address" name="address" rows="3" placeholder="House No, Street, Area, City" required />
              </div>
            </div>

            <div className="actions">
              <button type="submit" className="coating-button">Confirm Booking</button>
            </div>
            <p className="privacy-note">We respect your privacy. Your information is used only to arrange your appointment.</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;


