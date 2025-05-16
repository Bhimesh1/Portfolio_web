import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  // Get the base URL from the current window location
  const baseUrl = window.location.origin;

  const skills = [
    {
      title: "Backend Development",
      icon: "fas fa-server",
      description: "Specialized in Java and Spring Boot, creating robust and scalable backend systems.",
      tags: ["Java", "Spring Boot", "REST APIs", "JUnit"]
    },
    {
      title: "Cloud & DevOps",
      icon: "fas fa-cloud",
      description: "Experience with Azure, Docker, and CI/CD pipelines for efficient deployment.",
      tags: ["Azure", "Docker", "GitHub Actions", "CI/CD"]
    },
    {
      title: "Full-Stack Projects",
      icon: "fas fa-code",
      description: "Building end-to-end solutions with modern frameworks and best practices.",
      tags: ["React", "Node.js", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Tools & Technologies",
      icon: "fas fa-tools",
      description: "Proficient with industry-standard development tools and practices.",
      tags: ["IntelliJ", "Git", "JUnit", "MySQL"]
    }
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Hi, I'm Bhimesh Patil</h1>
        <p className="subtitle">Java Developer & Software Technology Student</p>
        <p className="description">
          I'm a Java developer with a passion for building clean and reliable backend systems. Currently
          pursuing my M.Sc. in Software Technology while working on exciting projects that combine modern
          technologies with practical solutions.
        </p>
        <div className="btn-group">
          <Link to="/about" className="btn btn-primary">
            <i className="fas fa-user"></i>
            About Me
          </Link>
          <Link to="/projects" className="btn btn-secondary">
            <i className="fas fa-code"></i>
            View Projects
          </Link>
          <a href={`${baseUrl}/resume.pdf`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <i className="fas fa-file-pdf"></i>
            View Resume
            </a>
        </div>
      </div>

      <div className="featured-section">
        <h2>Core Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="tags">
                {skill.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="contact-section">
          <div className="contact-content">
            <div className="contact-text">
              <h2>Let's Connect!</h2>
              <p>I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to chat about technology, I'd love to hear from you!</p>
              <div className="contact-highlights">
                <div className="highlight-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Based in Stuttgart, Germany</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-clock"></i>
                  <span>Available for Full-time Positions</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-code-branch"></i>
                  <span>Open to Collaboration</span>
                </div>
              </div>
            </div>
            
            <div className="contact-box">
              <h3>Get in Touch</h3>
              <div className="contact-methods">
                <a href="mailto:bhimeshpatil1@gmail.com" className="contact-method email">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email Me</h4>
                    <span>bhimeshpatil1@gmail.com</span>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/bhimesh-patil/" target="_blank" rel="noopener noreferrer" className="contact-method linkedin">
                  <i className="fab fa-linkedin-in"></i>
                  <div>
                    <h4>Connect on LinkedIn</h4>
                    <span>Professional Network</span>
                  </div>
                </a>
                <a href="https://github.com/Bhimesh1" target="_blank" rel="noopener noreferrer" className="contact-method github">
                  <i className="fab fa-github"></i>
                  <div>
                    <h4>Check My GitHub</h4>
                    <span>View My Projects</span>
                  </div>
                </a>
              </div>
              <div className="availability">
                <i className="fas fa-circle"></i>
                <span>Available for new opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 