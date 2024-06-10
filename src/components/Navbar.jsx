import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ fontWeight: "bold" }}>PerfectCoaching</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">Categories</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/Help">Help</Link></li>
                  <li><Link className="dropdown-item" to="/About">About us</Link></li>
                  <li><Link className="dropdown-item" to="/our-team">Our team</Link></li>
                </ul>
              </li>
            </ul>
            <Link to="/Help" className="btn btn-outline-danger" role="button" style={{ width: '150px', minWidth: '30px', padding: '5px 10px' }}>Get in touch</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
