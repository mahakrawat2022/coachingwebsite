import React from 'react';
import './CourseCard.css'; // Import the CSS file

function CourseCard(props) {
  return (
    <div className="course-card">
      <img src={props.img} className="course-card-img" alt="Course Image" />
      <div className="course-card-content">
        <h5 className="course-card-title">{props.title}</h5>
        <p className="course-card-text">{props.text}</p>
        <a href="#" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
  );
}

export default CourseCard;
