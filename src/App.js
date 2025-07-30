import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
// import Certifications from './components/Certifications';
// import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Assuming you'd want a footer

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      {/* <Certifications /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;