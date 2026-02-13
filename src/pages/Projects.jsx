import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

const Projects = () => {
  // Get the base URL from the current window location
  const baseUrl = window.location.origin;

  const projects = [
    {
      title: "Personal Finance Tracker",
      period: "07/2024",
      description: "Full-stack application for transaction tracking, budget setting, and financial analytics.",
      details: [
        "Built a comprehensive personal finance management system",
        "Implemented transaction tracking functionality",
        "Created budget setting features",
        "Developed financial analytics dashboard"
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "GitHub Actions"],
      github: "https://github.com/Bhimesh1/finance-tracker",
      isAvailable: true
    },
    {
      title: "Q&A Hub (Spring Boot Application)",
      period: "02/2024",
      description: "CRUD application for a Q&A platform with Dockerized MySQL backend and automated testing pipelines.",
      details: [
        "Developed a full-featured Q&A platform",
        "Implemented CRUD operations with Spring Boot",
        "Set up Dockerized MySQL backend",
        "Created automated testing pipelines"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "Docker"],
      github: "https://github.com/Bhimesh1/MidlewareBhimesh",
      isAvailable: true
    },
    {
      title: "GPT Bot for Discord",
      period: "11/2023",
      description: "Intelligent Discord chatbot using OpenAI's API for real-time responses.",
      details: [
        "Created an AI-powered Discord bot",
        "Integrated OpenAI's API for intelligent responses",
        "Implemented real-time message processing"
      ],
      technologies: ["Python", "discord.py", "OpenAI API"],
      isAvailable: false
    },
    {
      title: "MyPlacement (Recruitment Portal)",
      period: "06/2023",
      description: "College recruitment system connecting students and recruiters with admin moderation features.",
      details: [
        "Built a comprehensive recruitment platform",
        "Implemented user roles for students, recruiters, and admins",
        "Created moderation features for admin control"
      ],
      technologies: ["HTML", "JavaScript", "PHP", "MySQL"],
      isAvailable: false
    },
    {
      title: "DeBallot – Decentralized Voting System",
      period: "01/2022",
      description: "Blockchain-based transparent voting system built on NEAR Protocol.",
      details: [
        "Developed a decentralized voting platform",
        "Implemented blockchain-based vote recording",
        "Created transparent vote tracking system"
      ],
      technologies: ["Node.js", "React Bootstrap", "NEAR"],
      github: "https://github.com/Bhimesh1/Deballot",
      isAvailable: true
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Projects</h1>
        <p className="subtitle">What I’ve Built</p>
        <p className="description">
          A collection of projects where I applied backend development, full-stack engineering, cloud deployment, and blockchain concepts. Each project reflects hands-on problem solving, clean architecture, and practical implementation using real-world tools.
        </p>
      </div>

      <div className="section">
        <div className="section-content">
          {projects.map((project, index) => (
            <div key={index} className="card project-card">
              <div className="project-header">
                <h2>{project.title}</h2>
                <span className="period">{project.period}</span>
              </div>

              <p className="description">{project.description}</p>

              <div className="project-details">
                <h3>Key Features</h3>
                <ul>
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="technologies">
                <h3>Technologies Used</h3>
                <div className="tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tag">{tech}</span>
                  ))}
                </div>
              </div>

              {project.isAvailable ? (
                <a href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link">
                  <i className="fab fa-github"></i>
                  View on GitHub
                </a>
              ) : (
                <div className="unavailable-notice">
                  <i className="fas fa-lock"></i>
                  Currently Not Available
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 