import React from 'react';
import './AboutUs.css'; // This will import the CSS for the component

function AboutUs() {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>KAWF is a registered (Reg. No. 2354168) Not-for-Profit self-funded, volunteer-based organization in Kashmir Valley, which aims to help and improve the life of abused & starving strays of the valley. It is the result of the efforts of three Kashmiri girls who have been actively working and contributing in the Animal Rescue Domain for the past 15 years.</p>
      <p>From a handful of animal lovers to a significant volunteer base, KAWF has come a long way. Our volunteers and those who work with us are 20-40 years old who are empathetic enough and have realized the importance of having a consolidated welfare system for animals in the valley.</p>
      <h3>Challenges:</h3>
      <ul>
        <li>Abhorrent attitude towards stray animals; especially dogs who are tagged as dirty and impure</li>
        <li>Lack of awareness programs at educational or social levels</li>
        <li>Absence of ambulances and mobile para-vet system for on-spot treatments</li>
      </ul>
    </div>
  );
}

export default AboutUs;
