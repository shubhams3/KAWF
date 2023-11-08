import React from 'react';
import './PartnerNetwork.css'; // Import the CSS for styling

function PartnerNetwork() {
  // This array will hold our partner data. In a real-world scenario, this could come from an API or other data source.
  const partners = [
    {
      name: "Stray World",
      handle: "@strayworld._",
      link: "https://instagram.com/strayworld._"
      // Add other partner details similarly
    },
    {
        name: "ARK (No rescues as of now) ",
        handle: "@animal_rescue_kashmir",
        link: "https://www.instagram.com/animal_rescue_kashmir/"
        // Add other partner details similarly
      },
      {
        name: "Stray World",
        handle: "@strayworld._",
        link: "https://instagram.com/strayworld._"
        // Add other partner details similarly
      },
      {
        name: "Stray World",
        handle: "@strayworld._",
        link: "https://instagram.com/strayworld._"
        // Add other partner details similarly
      },
    // ... more partners
  ];

  return (
    <div className="partner-network">
      <h2>Kashmir Animal Welfare Network & Partners</h2>
      <p>KAWFCares works very hard to ensure that at least a few of the many animals in Kashmir receive timely help and treatment...</p>
      <div className="cards-container">
        {partners.map((partner, index) => (
          <div className="card" key={index}>
            <h3>{partner.name}</h3>
            {partner.handle}<br></br>
            <a href={partner.link} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        ))}
      </div>
      <p>And many volunteers</p>
      <p>Refer to these <b>emergency first-aid guidelines</b> for animals:</p>
      <a href="https://maps.app.goo.gl/xJBkH6TBDbawKGei9" target="_blank" rel="noopener noreferrer">
        <p>List of Veterinary centers in Srinagar area</p>
      </a>
    </div>
  );
}

export default PartnerNetwork;
