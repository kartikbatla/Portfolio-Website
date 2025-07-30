import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  // Use state to keep track of the active link. Default to 'home'.
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <ul className="nav-menu">
          <li className="nav-links">
            Portfolio Website          
            </li>
          <li className="nav-item">
            <a
              href="#home"
              className={`nav-links ${activeLink === 'home' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              className={`nav-links ${activeLink === 'projects' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              className={`nav-links ${activeLink === 'about' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('about')}
            >
              About
            </a>
          </li>
          {/* <li className="nav-item">
            <a
              href="#certifications"
              className={`nav-links ${activeLink === 'certifications' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('certifications')}
            >
              Certifications
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#testimonials"
              className={`nav-links ${activeLink === 'testimonials' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('testimonials')}
            >
              Testimonials
            </a>
          </li> */}
          <li className="nav-item">
            <a
              href="#contact"
              className={`nav-links ${activeLink === 'contact' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;