// ActionTokens.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faHandHoldingHeart, faDonate } from '@fortawesome/free-solid-svg-icons';
import './ActionTokens.css'; // Import the CSS for styling

function ActionTokens() {
  return (
    <div className="action-tokens-container">
      <div className="token">
        <FontAwesomeIcon icon={faPaw} size="3x" />
        <h3>Adopt</h3>
        <p>"You can't save all the dogs & cats in the world, but you can save one dog's (or cat’s) whole world!" and have yourself a best friend!</p>
      </div>
      <div className="token">
        <FontAwesomeIcon icon={faHandHoldingHeart} size="3x" />
        <h3>Volunteer</h3>
        <p>We need as many hands on board as possible, and you will also get a shiny new certificate! The rescues are many and people, few. Join us, to spread the love.</p>
      </div>
      <div className="token">
        <FontAwesomeIcon icon={faDonate} size="3x" />
        <h3>Donate</h3>
        <p>We rely solely on donations - monetary or otherwise - for our work. Help us achieve our goals and check out our wishlist as well.</p>
      </div>
    </div>
  );
}

export default ActionTokens;
