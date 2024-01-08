// BlogLinks.js
import React from 'react';
import './BlogLinks.css'; // Make sure to create and import the CSS for styling

function BlogLinks() {
  // Placeholder data - replace with real data as needed
  const blogs = [
    {
      title: "Insure Education For Every Children",
      description: "First charity is help homeless people around the city...",
      image: "/logo192.png", // Replace with the path to image
      progress: 82,
      amountRaised: "$61,500.00",
      goal: "$75,000.00"
    },
    {
        title: "Insure Education For Every Children",
        description: "First charity is help homeless people around the city...",
        image: "/logo192.png", // Replace with the path to image
        progress: 82,
        amountRaised: "$61,500.00",
        goal: "$75,000.00"
      },
      {
        title: "Insure Education For Every Children",
        description: "First charity is help homeless people around the city...",
        image: "/logo192.png", // Replace with the path to image
        progress: 82,
        amountRaised: "$61,500.00",
        goal: "$75,000.00"
      },
    // ... Add more blog objects
  ];

  return (
    <div className="blog-links-container">
      <h2>Recent Causes</h2>
      <p>Your little support can bring smile to the homeless people</p>
      <div className="blog-cards-container">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${blog.progress}%` }}></div>
            </div>
            <p>{blog.amountRaised} donated of {blog.goal} goal</p>
          </div>
        ))}
      </div>
      <button className="see-all-button">SEE ALL CAUSES</button>
    </div>
  );
}

export default BlogLinks;
