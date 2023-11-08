import React from 'react';
import './GoalsCard.css'; // Make sure to create and import the CSS for styling

function GoalsCard() {
  // Array of goals, each with a title and description
  const goals = [
    {
      title: "Lifetime Sanctuary",
      description: "A lifetime sanctuary for animals with permanent disabilities."
      // Add more properties as needed, like id, image, link, etc.
    },
    {
      title: "Diagnostic Center",
      description: "Fully operational diagnostic center and dispensary."
      // Add more properties as needed
    },
    {
      title: "Surgical Unit",
      description: "A surgical unit for immediate and on-going surgeries."
      // Add more properties as needed
    },
    {
      title: "Mobile Unit",
      description: "A mobile treatment unit for on-spot medical attention."
      // Add more properties as needed
    }
    // ... Add more goals as needed
  ];

  return (
    <div className="goals-container">
      <h2>Help us achieve our goals</h2>
      <p>Animals deserve as much help and support as humans do. We have some goals focused on this very thought.</p>
      <div className="goals-card-container">
        {goals.map((goal, index) => (
          <div className="goal-card" key={index}>
            <h3>{goal.title}</h3>
            <p>{goal.description}</p>
            {/* Add additional elements like images, links, etc. */}
          </div>
        ))}
      </div>
      <button className="see-all-button">SEE All GOALS</button>
      <button className="support-button">Click here, to support us.</button>
    </div>
  );
}

export default GoalsCard;
