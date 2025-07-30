import React from 'react';
import './Footer.css'; // Create this CSS file for styling

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Kartik Batla. All rights reserved.</p>
        <p>Built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;