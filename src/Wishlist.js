import React from 'react';
import './Wishlist.css'; // Make sure the CSS file is linked

function Wishlist() {
  return (
    <div className="wishlist-container">
      <div className="wishlist-card">
        <h3>Our Wishlist</h3>
        <p>
          We accept donations in all forms and not just monetary. We require these items on a daily basis and receiving these directly can help us immensely to achieve our goals.
        </p>
      </div>
      <div className="wishlist-cards">
        <div className="wishlist-card">
          <h3>Cleaning Supplies</h3>
          <ul>
            <li>Lizol</li>
            <li>Phenyl</li>
          </ul>
        </div>
        <div className="wishlist-card">
          <h3>Antiseptic Agents</h3>
          <ul>
            <li>Dettol</li>
            <li>Savlon</li>
          </ul>
        </div>
        <div className="wishlist-card">
          <h3>Food Supplies</h3>
          <ul>
            <li>Dog Food</li>
            <li>Cat Food</li>
            <li>Rice</li>
            <li>Flour</li>
          </ul>
        </div>
        {/* Include similar structure for the rest of the items */}
      </div>
      <div className="wishlist-card">
        <h3>Long Term Goals</h3>
        <p>
          In the long run, we aim to establish a standardized system to make rescue processes more efficient. Together, we can foster an environment of compassion and ensure an aware audience.
        </p>
        <p>
          Check out our long term goals <a href="<link to the goals blog>">here</a>.
        </p>
      </div>
    </div>
  );
}

export default Wishlist;
