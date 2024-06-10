import React from 'react';
import './HomePageAbout.css'; // Import CSS file for styling

function HomePageAbout() {
  return (
    <div className="home-about-container my-4">
      <img
        src="https://thumbs.dreamstime.com/b/indian-man-laptop-working-home-office-technology-remote-job-lifestyle-concept-happy-computer-183616225.jpg"
        height="400px"
        width="800px"
        alt="Man working on a laptop"
        className="home-about-image my-4"
      />
      <div className="home-about-text">
        <h3>About</h3>
        <p>
          Welcome to our platform where we provide comprehensive placement courses designed to help you excel in your career. Our courses are tailored to meet industry standards and are delivered by experienced professionals. Join us to unlock your potential and elevate your career to new heights.
        </p>
        <h4>xyx</h4>
        <p>CEO & Founder</p>
      </div>
    </div>
  );
}

export default HomePageAbout;
