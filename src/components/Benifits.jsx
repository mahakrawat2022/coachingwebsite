import React from 'react';

function Benifits(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
      <div>
        <div className="card text-bg-white" style={{ border: "none" }}>
          <img src={props.img} className="card-img" alt="..." style={{ height: "300px", width: "1100px" }} />
          <div className="card-img-overlay">
            <h3 className="card-title" style={{fontWeight:"bold"}}>{props.title}</h3>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small>Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benifits;
