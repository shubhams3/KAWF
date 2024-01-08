import React from 'react';
import './AboutCoFounder.css'; // Make sure the CSS file is linked

function AboutCoFounder() {
  return (
    <div className="about-co-founder-container">
      <div className="about-co-founder-card">
        <img src="/nighat.png" alt="Nighat Lone" className="co-founder-image" />
        <div className="co-founder-info">
          <a href="https://jkmonitor.org/categories/nighat-lone-founder-and-the-chairperson-of-kashmir-animal-welfare-foundation-kawf-cares-highlights-uphill-battle-for-animal-welfare-in-kashmir">
            Nighat Lone<br /> Co-Founder and Trustee<br /> Kashmir Animal Welfare Foundation (KAWF Cares)
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutCoFounder;
