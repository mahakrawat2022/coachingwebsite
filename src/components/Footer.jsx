import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} className="icon" /></a>
        <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
        <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
      </div>
      <p className="copyright">&#169; 2024 Perfect Coaching. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
