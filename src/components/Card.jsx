import React from 'react';
import './Card.css'; // Ensure this CSS file is imported

function Card({ heading, img }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start h-100" alt={heading} style={{ objectFit: 'cover' }} />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-between h-100">
            <div>
              <h5 className="card-title">{heading}</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
