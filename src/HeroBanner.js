import React from 'react';
// stylesheet for herobanner
import './HeroBanner.css'; 
// reference to image stored in public directory
const heroImage = '/herobanner.jpg';

function HeroBanner() {
  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>A BETTER LIFE FOR INDIA'S STRAY ANIMALS</h1>
        <p>Stray animals roam the streets of India without food, veterinary care or refuge from the elements. Help us give them a chance.</p>
        <div className="hero-buttons">
          <button onClick={() => { /* TODO: donate logic */ }}>Donate</button>
          <button onClick={() => { /* TODO: adopt logic */ }}> Adopt</button>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
