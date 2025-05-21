import React, { useEffect, useState } from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import './styles.css';
import feather from 'feather-icons';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }

        if (scrollPosition > sectionTop - window.innerHeight * 0.75) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="portfolio">
      <header>
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '10px', color: '#00ff88'}}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <h1>Dang Thanh Loc</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#certificates" className={activeSection === 'certificates' ? 'active' : ''}>Certificates</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="hero-image">
              <img src="/image/cat.png" alt="Dang Thanh Loc" />
            </div>
            <div className="hero-text">
              <h2>Hi, I'm Dang Thanh Loc</h2>
              <h2 style={{color: '#FFF'}}>Software Developer</h2>
              <div className="hero-buttons">
                <a href="#contact" className="btn primary">Contact Me</a>
                <a href="#projects" className="btn secondary">View My Work</a>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="certificates">
          <Certificates />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <h1>Dang Thanh Loc - Portfolio</h1>
          <div className="social-links">
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;