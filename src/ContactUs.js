// ContactUs.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './ContactUs.css'; // Import your CSS file

const mailIcon = <FontAwesomeIcon icon={faEnvelope} />;
const phoneIcon = <FontAwesomeIcon icon={faPhone} />;

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      {/* Instagram */}
      <div className="contact-card">
        <FontAwesomeIcon icon={faInstagram} size="3x" className="contact-icon" />
        <p><a href="">Instagram</a></p>
      </div>

      {/* Facebook */}
      <div className="contact-card">
        <FontAwesomeIcon icon={faFacebook} size="3x" className="contact-icon" />
        <p>Facebook</p>
      </div>

      {/* Mail */}
      <div className="contact-card">
        <FontAwesomeIcon icon={faEnvelope} size="3x" className="contact-icon" />
        <p>Mail</p>
      </div>

      {/* Mobile */}
      <div className="contact-card">
        <FontAwesomeIcon icon={faPhone} size="3x" className="contact-icon" />
        <p>Mobile</p>
      </div>
    </div>
  );
};

export default ContactUs;
