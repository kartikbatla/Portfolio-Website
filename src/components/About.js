import React, { useState, useEffect, useRef } from 'react';
import './About.css';

// Custom hook to observe element visibility for scroll animations (no change needed here)
const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options, isVisible]);

  return [ref, isVisible];
};


function About() {
  const [aboutTextRef, aboutTextVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [skillsRef, skillsVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [timelineRef, timelineVisible] = useIntersectionObserver({ threshold: 0.2 });

  // Example skill data (no change needed here)
  const skillsData = [
    { name: 'JavaScript', level: 60 },
    { name: 'Python', level: 60 },
    { name: 'React', level: 50 },
    { name: 'C/C++', level: 75 },
    { name: 'HTML CSS', level: 85 },
  ];

  // Example timeline data (no change needed here)
  const timelineData = [
    {
      year: '2025',
      title: 'Currently in 3rd Year B.Tech CSE with Business Systems',
      company: 'VIT Vellore',
      description: 'Diving deeper into advanced algorithms, data structures, and enterprise systems. Actively working on personal projects.',
    },
    {
      year: '2024',
      title: 'Completed 2nd Year B.Tech CSE with Business Systems',
      company: 'VIT Vellore',
      description: 'Strengthened core computer science fundamentals and gained practical experience in software development methodologies through coursework and group projects.',
    },
    {
      year: '2023',
      title: 'Commenced B.Tech in Computer Science and Engineering with Business Systems',
      company: 'VIT Vellore',
      description: 'Embarked on my undergraduate journey, focusing on the intersection of technology and business to build innovative solutions. Concurrently, successfully completed 12th Grade (PCM).',
    },
    {
      year: '2021-2023', // Combined for concise 11th and 12th
      title: 'Completed 11th & 12th Grade (PCM)',
      company: 'DPS Hapur', // You can add your school name here
      description: 'Developed a strong foundation in Physics, Chemistry, and Mathematics, which laid the groundwork for my engineering studies. Explored early interests in programming.',
    },
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div
            ref={aboutTextRef}
            className={`about-text fade-in-up ${aboutTextVisible ? 'is-visible' : ''}`}
          >
            <p>
            I am a driven and passionate third-year B.Tech student at VIT Vellore, specializing in Computer Science and Engineering with Business Systems. My academic journey is fueled by a profound interest in bridging cutting-edge technology with strategic business insights, a synergy I actively explore through my coursework and projects.
            </p>
            <p>
            Equipped with a robust foundation in programming languages such as C, C++, and Python, I am also proficient in core web technologies including HTML, CSS, JavaScript, and React, enabling me to build dynamic and responsive applications.
            </p>
            <p>
            My true fascination lies at the intersection of development and Artificial Intelligence. I am currently immersing myself in the exciting world of AI and the creation of intelligent AI bots. I possess a deep interest and growing knowledge in AI automation, agent-based systems, and leveraging various AI models to streamline processes and innovate solutions. My goal is to harness the power of AI to create intelligent, automated systems that drive efficiency and growth.
            </p>
            <p>
            With a strong affinity for coding and a strategic understanding of business principles, I am dedicated to crafting robust, scalable, and impactful solutions. I thrive on problem-solving and am constantly seeking new challenges to expand my expertise, particularly in areas where technology can deliver real-world value and transform operations
            </p>
          </div>

          <div
            ref={skillsRef}
            className={`technical-skills fade-in-up ${skillsVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <h3>Technical Skills</h3>
            <ul>
              {skillsData.map((skill, index) => (
                <li key={skill.name}>
                  {/* New structure for skill item */}
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: skillsVisible ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={timelineRef}
            className={`journey-timeline fade-in-up ${timelineVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <h3>Journey Timeline</h3>
            <div className="timeline-items">
              {timelineData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{item.year}: {item.title}{item.company && `, ${item.company}`}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;