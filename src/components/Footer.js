// components/Footer.js
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} MARVEL MODERN PROJECTS LLC. All rights reserved.</p>
        <p>Created by: <a href="mailto:mohamedraffatesmat@gmail.com">Mohamed Raffat</a></p>
      </div>
    </footer>
  );
}

export default Footer;