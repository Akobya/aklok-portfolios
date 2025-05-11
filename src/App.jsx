
import React, { useState } from 'react';
import './index.css';

function App() {
  const [showSkills, setShowSkills] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js'];

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A futuristic portfolio showcasing my skills and projects.by using react js',
      link: 'https://example.com/portfolio',
    },
    {
      title: 'school system',
      description: 'shool managment system built with Next.js and Node.js..on progress',
      link: '#',
    },
    {
      title: 'Multiple choose quiz',
      description: 'A productivity app with JavaScript for student easy platform',
      link: 'https://akobya.github.io/Need/',
    },
  ];

  const certificates = [
    {
      title: 'fundamental programing',
      image: '/certificates/certificate1.jpg',
      pdf: '/certificates/certificate1.pdf',
    },
    {
      title: 'JavaScript Mastery Course',
      image: '/certificates/certificate2.jpg',
      pdf: '/certificates/certificate2.pdf',
    },
    {
      title: 'professtional web develop',
      image: '/certificates/certificate3.png',
      pdf: '/certificates/certificate3.png',
    },
  
  ];

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Smooth scroll to section
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); 
  };

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <h3>Akobya.</h3>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('hero')} className="nav-button">Home</button>
          <button onClick={() => scrollToSection('about')} className="nav-button">About</button>
          <button onClick={() => scrollToSection('skills')} className="nav-button">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="nav-button">Projects</button>
          <button onClick={() => scrollToSection('certificates')} className="nav-button">Certificates</button>
        </div>
      </nav>

      {/* Hero Section with Right Image */}
      <header id="hero" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm AKLOK</h1>
          <p className="hero-subtitle">Crafting Futuristic Web Experiences</p>
          <a href="#about" className="cta-button">Discover More</a>
        </div>
        <div className="hero-image">
          <img src="/image/dev-image.jpg" alt="Profile"/>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section about">
        <h2 className="section-title">About Me</h2>
        <p className="section-text">
          I'm a web developer passionate about building stunning, high-performance websites with
          modern technologies and clean code.
        </p>
      </section>

      {/* Skills Section with Cards */}
      <section id="skills" className="section skills">
        <h2 className="section-title">My Skills</h2>
        <button onClick={toggleSkills} className="toggle-button">
          {showSkills ? 'Hide Skills' : 'Show Skills'}
        </button>
        {showSkills && (
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <h3 className="skill-title">{skill}</h3>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Projects Section with Cards */}
      <section id="projects" className="section projects">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section with Cards */}
      <section id="certificates" className="section certificates">
        <h2 className="section-title">My Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <div key={index} className="certificate-card">
              <img src={certificate.image} alt={certificate.title} className="certificate-image" />
              <h3 className="certificate-title">{certificate.title}</h3>
              <a
                href={certificate.pdf}
                className="certificate-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Aklok</p>
        <div className="social-links">
          <a href="https://github.com/Akobya" className="social-link">GitHub</a>
          <a href="https://t.me/Akobyalogo" className="social-link">Telegram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
