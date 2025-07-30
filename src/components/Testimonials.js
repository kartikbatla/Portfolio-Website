import React from 'react';
import './Testimonials.css'; // Create this CSS file for styling

// Example testimonials data
const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Chen',
    title: 'CTO at DevCorp',
    quote: 'Kartik is an exceptional developer. His ability to tackle complex problems and deliver robust solutions is truly impressive. A valuable asset to any team.',
    avatar: 'https://via.placeholder.com/100/A0A0FF/FFFFFF?text=SC', // Placeholder avatar
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    title: 'Founder of DataFlow',
    quote: 'Working with Kartik was a game-changer for our startup. His insights into full-stack architecture and his proactive approach significantly accelerated our product development.',
    avatar: 'https://via.placeholder.com/100/8888FF/FFFFFF?text=MR',
  },
  {
    id: 3,
    name: 'Emma Thompson',
    title: 'PM at TechStart',
    quote: 'Kartik’s dedication and technical prowess are unmatched. He consistently goes above and beyond, making him a pleasure to collaborate with on any project.',
    avatar: 'https://via.placeholder.com/100/E0A0FF/FFFFFF?text=ET',
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2>What Others Say</h2>
        <div className="testimonials-grid">
          {testimonialsData.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                <div className="testimonial-author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.title}</p>
                </div>
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;