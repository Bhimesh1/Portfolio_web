import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Blockchain-Based Geospatial Data Storage",
      role: "Master Thesis",
      company: "Hochschule für Technik Stuttgart",
      period: "10/2024 – present",
      location: "Stuttgart, Germany",
      companyLink: "https://www.hft-stuttgart.de/forschung/i-city",
      projectLink: "https://github.com/Bhimesh1/Secure_Geospatial_Blockchain",
      description: "Leading the development of a secure geospatial data management system using blockchain technology.",
      achievements: [
        "Designed a secure full-stack system for encrypted geospatial data using AES, RSA, and Ethereum Smart Contracts.",
        "Built a FastAPI backend (Web3.py) and React frontend for secure uploads, permission control, and map visualization.",
        "Deployed using Docker, NGINX, and GitHub Actions to enable decentralized access and scalable operations."
      ],
      technologies: ["Blockchain", "FastAPI", "React", "Docker", "NGINX", "GitHub Actions", "Web3.py"]
    },
    {
      title: "Full-Stack Developer",
      role: "Working Student",
      company: "KNIGHT Project",
      period: "04/2024 – 09/2024",
      location: "Stuttgart, Germany",
      companyLink: "https://www.hft-stuttgart.com/research/projects/current/knight-project",
      description: "Working on data ingestion and visualization pipelines for the KNIGHT project.",
      achievements: [
        "Built a MongoDB-based backend integrated with Amazon S3 for efficient data ingestion pipelines.",
        "Automated data uploads and visualization using Python scripts and MongoDB Compass.",
        "Created CI/CD pipelines and integrated Grafana for real-time analytics on MySQL datasets."
      ],
      technologies: ["MongoDB", "Amazon S3", "Python", "MySQL", "Grafana", "CI/CD"]
    },
    {
      title: "Software Developer",
      role: "Full-time",
      company: "Tata Consultancy Services",
      period: "05/2022 – 02/2023",
      location: "Mumbai, India",
      companyLink: "https://www.tcs.com/",
      description: "Worked on modernizing legacy systems and developing microservices.",
      achievements: [
        "Modernized a legacy mainframe app into a cloud-based accounting platform on Azure.",
        "Developed transaction-processing microservices using Spring Boot.",
        "Automated revenue distribution processes using Spring Batch, reducing manual effort significantly."
      ],
      technologies: ["Azure", "Spring Boot", "Spring Batch", "Microservices"]
    },
    {
      title: "Cloud Computing Intern",
      role: "Intern",
      company: "Verzeo",
      period: "02/2021 – 04/2021",
      location: "Remote, India",
      /*companyLink: "https://verzeo.com/",*/
      description: "Focused on Azure cloud infrastructure and performance optimization.",
      achievements: [
        "Worked on Azure VNet and Blob Storage setups; conducted server role testing and disaster recovery validation.",
        "Identified and optimized CPU resource allocations to improve server performance."
      ],
      technologies: ["Azure VNet", "Azure Blob Storage", "Server Management"]
    },
    {
      title: "Website Development & Administrative Support",
      role: "Developer",
      company: "VHBS Enterprises",
      period: "11/2019 – 05/2020",
      location: "Mumbai, India",
      companyLink: "https://vhbsenterprises.wixstudio.com/vhbs",
      description: "Handled website development and administrative responsibilities.",
      achievements: [
        "Designed and maintained a business website (Wix, WordPress), boosting company visibility.",
        "Handled administrative operations, including billing, quotations, and client correspondence."
      ],
      technologies: ["WordPress", "Wix", "Web Development", "Business Administration"]
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Experience</h1>
        <p className="subtitle">My Professional Journey</p>
        <p className="description">
          An overview of my work as a software engineer, focusing on backend development, cloud systems, and secure applications. I have worked on microservices, blockchain-based platforms, data pipelines, and CI/CD automation, building reliable and scalable systems using modern technologies.
        </p>
      </div>

      <div className="section">
        <div className="section-content">
          {experiences.map((exp, index) => (
            <div key={index} className="card experience-card">
              <div className="experience-header">
                <h2>{exp.title}</h2>
                <span className="role">{exp.role}</span>
              </div>

              <div className="company-info">
                <p className="company">
                  <i className="fas fa-building"></i>
                  <a href={exp.companyLink} target="_blank" rel="noopener noreferrer">
                    {exp.company}
                  </a>
                </p>
                <p className="period">
                  <i className="fas fa-calendar"></i>
                  {exp.period}
                </p>
                <p className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  {exp.location}
                </p>
                {exp.projectLink && (
                  <p className="project-link">
                    <i className="fas fa-code-branch"></i>
                    <a href={exp.projectLink} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </p>
                )}
              </div>

              <p className="description">{exp.description}</p>

              <div className="achievements">
                <h3>Key Achievements</h3>
                <ul>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="technologies">
                <h3>Technologies Used</h3>
                <div className="tags">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 