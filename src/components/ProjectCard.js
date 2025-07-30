// src/components/ProjectCard.js

import React, { useState, useRef } from 'react';
import './ProjectCard.css';
// If you were using react-icons for the placeholder icon, you can remove it if you only want images:
// import { FaExternalLinkSquareAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
  // Keep the tilt effect logic as it is
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const rotateY = (mouseX / (rect.width / 2)) * 10;
    const rotateX = (mouseY / (rect.height / 2)) * -10;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.03)`,
      }}
    >
      {/* NEW: Wrapper for the image */}
      <div className="project-image-wrapper">
        <img src={project.image} alt={project.title} className="project-image" />
      </div>

      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-techs">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <a href={project.link} className="view-project-link" target="_blank" rel="noopener noreferrer">
          View Project
          <span className="link-icon"></span> {/* This is the CSS-only external link arrow */}
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;