// CoFounders.js
import React from 'react';
import './CoFounders.css'; // Import the CSS for the component

function CoFounders() {
  return (
    <div className="co-founders-container">
      <h2>Co-Founders</h2>
      <div className="card-container">
        <div className="card">
          <h3>Sanna Bandey</h3>
          <p>She is also a part of Lucknow Animal Welfare groups, and has worked in different geographies participating in rescue, rehabilitation and adoption.</p>
        </div>
        <div className="card">
          <h3>Asma Noor Sheikh</h3>
          <p>Has been actively involved with animal rescue and welfare for the past decade, and works with animal rescue groups in Delhi-NCR.</p>
        </div>
        <div className="card">
          <h3>Nighat Lone</h3>
          <p>She has been instrumental in shaping up the preliminary animal welfare system in the valley by her individual efforts since a young age.</p>
        </div>
      </div>
    </div>
  );
}

export default CoFounders;
