import React from 'react';
import './Certifications.css'; // Create this CSS file for styling

// Example certification data
const certificationsData = [
  {
    id: 1,
    name: 'AWS Solutions Architect Professional',
    issuer: 'Amazon Web Services',
    date: 'Jan 2024',
    credentialId: 'ABCDE12345',
    link: '#',
  },
  {
    id: 2,
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: 'Nov 2023',
    credentialId: 'FGHIJ67890',
    link: '#',
  },
  {
    id: 3,
    name: 'MongoDB Certified Developer',
    issuer: 'MongoDB Inc.',
    date: 'Sep 2023',
    credentialId: 'KLMNO11223',
    link: '#',
  },
  {
    id: 4,
    name: 'Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    date: 'Jul 2023',
    credentialId: 'PQRST44556',
    link: '#',
  },
  {
    id: 5,
    name: 'TensorFlow Developer Certificate',
    issuer: 'Google TensorFlow',
    date: 'May 2023',
    credentialId: 'UVWXY77889',
    link: '#',
  },
  {
    id: 6,
    name: 'React Advanced Certification',
    issuer: 'Meta',
    date: 'Mar 2023',
    credentialId: 'ZABCD00112',
    link: '#',
  },
];

function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2>Certifications</h2>
        <div className="certification-stats">
          <div className="stat-item">
            <h3>6+</h3>
            <p>Active Certifications</p>
          </div>
          <div className="stat-item">
            <h3>4</h3>
            <p>Cloud Platforms</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Current & Valid</p>
          </div>
        </div>
        <div className="certifications-grid">
          {certificationsData.map(cert => (
            <div key={cert.id} className="certification-item">
              <h3>{cert.name}</h3>
              <p><strong>Issued by:</strong> {cert.issuer}</p>
              <p><strong>Date:</strong> {cert.date}</p>
              <p><strong>Credential ID:</strong> {cert.credentialId}</p>
              <a href={cert.link} className="btn tertiary" target="_blank" rel="noopener noreferrer">
                View Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;