import React from 'react';
import './AboutPage.css'; // Import CSS file for styling

function AboutPage() {
  return (
    <div className="about-container">
      <h3 className="statement">Unlock Your Potential: Elevate Your Career with Our Placement Courses!</h3>
      <button className=" btn btn-warning cta-button ">Learn More</button>
      <img src="https://www.lga.cpa/wp-content/uploads/2021/03/celebrate-success-1.jpg" alt="Celebrating Success" className="image" />
    </div>
  );
}

export default AboutPage;
