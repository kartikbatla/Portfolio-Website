// src/components/Projects.js

import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

// Remove ALL lines that look like:
// import variableName from '/src/images/filename.jpeg';
// Or: import variableName from '../assets/images/filename.jpg';
// Those lines are the cause of your "Module not found" error.


// Example project data (you can replace this with your actual projects)
const projectsData = [
  {
    id: 1,
    title: 'Netflix Clone',
    description: 'Netflix Clone A front-end web project that replicates the user interface of Netflix using only HTML and CSS. This project is a simple, static version of the streaming platform, designed to showcase a clean and responsive design that mimics the look and feel of Netflix.',
    technologies: ['HTML', 'CSS', 'OpenAI'],
    image: '/src/images/download.jpeg', // CORRECTED: This must be a string path relative to the public folder
    link: 'https://github.com/kartikbatla/Netflix-Clone',
  },
  {
    id: 2,
    title: 'Jarvis Personal Assistant',
    description: 'Jarvis is a basic virtual assistant designed using HTML, JavaScript, and CSS. It performs simple tasks such as opening websites and providing quick access to online resources. This project serves as an introduction to building interactive web applications and showcases fundamental web development skills.',
    technologies: ['HTML', 'CSS', 'JS', 'OpenAI'],
    image: '/src/images/giphy.gif', // CORRECTED: String path
    link: 'https://github.com/kartikbatla/Jarvis---Personal-Assistant',
  },
  {
    id: 3,
    title: 'Enhance.ai — AI-Powered Data Quality Enhancer',
    description: 'Enhance.ai is a powerful AI-driven web-based tool that improves the quality of datasets by detecting and correcting issues such as missing values, anomalies, bias, and duplicate records. It helps AI Engineers and Data Engineers ensure their datasets are clean, balanced, and ready for robust machine learning model training.',
    technologies: ['Pyhton', 'Flask', 'HTML', 'CSS', 'JS', 'OpenAI'],
    image: '/src/images/ImageLP.jpg', // CORRECTED: String path (ensure this exact file is in public/images)
    link: 'https://github.com/kartikbatla/Enhance.ai',
  },
  {
    id: 4,
    title: 'Smart Parking Space Finder',
    description: 'An academic project built as part of the Software Engineering course at VIT Vellore. This system detects empty parking slots in a lot using image processing techniques (OpenCV), while following a complete software engineering lifecycle—from requirements gathering to software testing.',
    technologies: ['Frontend: HTML, CSS ,JS', 'Backend: Python', 'Libraries: OpenCV, NumPy'],
    image: '/src/images/logo.png', // CORRECTED: String path
    link: 'https://github.com/kartikbatla/Car-Parking-Finder'
  },
  {
    id: 5,
    title: 'Trading Application',
    description: 'This project is a robust, console-based stock management and simulated trading application, developed as a core part of an Object-Oriented Programming (OOP) course in C++. It is meticulously designed to demonstrate fundamental OOP principles, efficient data handling, and an interactive user experience in a simulated financial environment.',
    technologies: ['C++'],
    // You NEED to provide an image for this project, otherwise it will be blank/broken in the card.
    // Ensure you have a file like 'stock-management.jpg' in your public/images folder.
    image: '/src/images/stock-management.jpg', // ADDED: Example path for stock management image
    link: 'https://github.com/kartikbatla/Project/blob/main/Stock%20Management%20Application'
  },
  {
    id: 6,
    title: 'AI ToolKit Store',
    description: 'Created as a vibe coding project with Lovable, this innovative AI micro-store is designed to streamline the discovery of suitable AI solutions. It features a unique "Use Wizard" that guides users through various niches, helping them identify the best AI models and tools tailored to their specific needs, simplifying the process of exploring and leveraging AI for diverse applications.',
    technologies: ['Lovable'],
    image: '/src/images/Gemini_Generated_Image_kk4updkk4updkk4u.png', // CORRECTED: String path
    link: 'https://preview--toolly-ai-design-kit.lovable.app/'
  },
  {
    id: 7,
    title: 'CreatorSuite AI',
    description: 'Created as a lovable vibe coding project, this AI-powered platform is designed to empower digital creators with essential tools for growth. It currently features innovative solutions like a Reel Script Generator and a Caption Generator, simplifying content creation workflows. With a roadmap for many more upcoming tools, Creator Suite AI aims to be a comprehensive resource for creators looking to enhance their online presence.',
    technologies: ['Lovable'],
    image: '/src/images/Gemini_Generated_Image_g0xawrg0xawrg0xa.png', // CORRECTED: String path
    link: 'https://preview--creatorsuiteai.lovable.app/tools/caption-generator'
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
