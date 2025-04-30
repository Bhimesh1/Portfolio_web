import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="page-header">
          <h1>About Me</h1>
      </div>

      <div className="section">
        <div className="section-content">
          <div className="card">
            <h2>Summary</h2>
            <p>Java developer with over a year of hands-on experience in the IT industry and currently pursuing an M.Sc. in Software Technology. I enjoy building clean and reliable backend systems, with experience ranging from Azure to projects working on Spring boot. Focused on teamwork, automation, and developing software that genuinely improves user experience.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-content">
          <div className="card">
            <h2>Education</h2>
            <div className="education-item">
              <h3>Masters of Science In Software Technology</h3>
              <p className="institution">Hochschule für Technik Stuttgart</p>
              <p className="duration">03/2023 – present | Stuttgart, Germany</p>
              <p>Key Subjects: DSA, Software Architecture, Middleware Technology, Software Project Management, Software V&V.</p>
            </div>
            <div className="education-item">
              <h3>Bachelor of Science In Information Technology</h3>
              <p className="institution">University Of Mumbai</p>
              <p className="duration">07/2019 – 04/2022 | Mumbai, India</p>
              <p>Key Subjects: OOP, C++, Python, Java, Linux, AI, Database Systems, .NET, C#, Business Intelligence.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-content">
          <div className="card">
            <h2>Work Experience <Link to="/experience" className="page-link">(View Details)</Link></h2>
            <ul className="experience-list">
              <li>
                <h3>Blockchain-Based Geospatial Data Storage</h3>
                <p className="duration">Master Thesis | Hochschule für Technik Stuttgart | 10/2024 – present</p>
                <div className="tags">
                  <span className="tag">Blockchain</span>
                  <span className="tag">FastAPI</span>
                  <span className="tag">React</span>
                  <span className="tag">Docker</span>
                  <span className="tag">NGINX</span>
                  <span className="tag">GitHub Actions</span>
                </div>
              </li>
              <li>
                <h3>Full-Stack Developer</h3>
                <p className="duration">Working Student | KNIGHT Project | 04/2024 – 09/2024</p>
                <div className="tags">
                  <span className="tag">MongoDB</span>
                  <span className="tag">Amazon S3</span>
                  <span className="tag">Python</span>
                  <span className="tag">MySQL</span>
                  <span className="tag">Grafana</span>
                </div>
              </li>
              <li>
                <h3>Software Developer</h3>
                <p className="duration">Tata Consultancy Services | 05/2022 – 02/2023</p>
                <div className="tags">
                  <span className="tag">Azure</span>
                  <span className="tag">Spring Boot</span>
                  <span className="tag">Spring Batch</span>
                  <span className="tag">Microservices</span>
                </div>
              </li>
              <li>
                <h3>Cloud Computing Intern</h3>
                <p className="duration">Verzeo | 02/2021 – 04/2021</p>
                <div className="tags">
                  <span className="tag">Azure VNet</span>
                  <span className="tag">Azure Blob Storage</span>
                  <span className="tag">Server Management</span>
                </div>
              </li>
              <li>
                <h3>Website Development & Administrative Support</h3>
                <p className="duration">VHBS Enterprises | 11/2019 – 05/2020</p>
                <div className="tags">
                  <span className="tag">WordPress</span>
                  <span className="tag">Wix</span>
                  <span className="tag">Web Development</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-content">
          <div className="card">
            <h2>Projects <Link to="/projects" className="page-link">(View Details)</Link></h2>
            <ul className="projects-list">
              <li>
                <h3>Personal Finance Tracker</h3>
                <p className="duration">07/2024</p>
                <div className="tags">
                  <span className="tag">Java</span>
                  <span className="tag">Spring Boot</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">Docker</span>
                  <span className="tag">GitHub Actions</span>
                </div>
              </li>
              <li>
                <h3>Q&A Hub (Spring Boot Application)</h3>
                <p className="duration">02/2024</p>
                <div className="tags">
                  <span className="tag">Java</span>
                  <span className="tag">Spring Boot</span>
                  <span className="tag">MySQL</span>
                  <span className="tag">Docker</span>
                </div>
              </li>
              <li>
                <h3>GPT Bot for Discord</h3>
                <p className="duration">11/2023</p>
                <div className="tags">
                  <span className="tag">Python</span>
                  <span className="tag">discord.py</span>
                  <span className="tag">OpenAI API</span>
                </div>
              </li>
              <li>
                <h3>MyPlacement (Recruitment Portal)</h3>
                <p className="duration">06/2023</p>
                <div className="tags">
                  <span className="tag">HTML</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">PHP</span>
                  <span className="tag">MySQL</span>
                </div>
              </li>
              <li>
                <h3>DeBallot – Decentralized Voting System</h3>
                <p className="duration">01/2022</p>
                <div className="tags">
                  <span className="tag">Node.js</span>
                  <span className="tag">React Bootstrap</span>
                  <span className="tag">NEAR</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
          </div>

      <div className="section">
        <div className="section-content">
          <div className="card">
            <h2>Skills</h2>
            <div className="tags">
              <span className="tag">Java</span>
              <span className="tag">Spring Boot</span>
              <span className="tag">Javascript</span>
              <span className="tag">Azure Cloud</span>
              <span className="tag">Docker</span>
              <span className="tag">IntelliJ</span>
              <span className="tag">Git</span>
              <span className="tag">JUnit</span>
            </div>
          </div>
        </div>
      </div>
        
      <div className="section">
        <div className="section-content">
          <div className="card">
            <h2>Certificates</h2>
            <ul className="certificates-list">
              <li>Microsoft Certified: SC-900 (Security, Compliance, and Identity Fundamentals)</li>
              <li>Microsoft Certified: AZ-900 (Azure Fundamentals)</li>
              <li>NVIDIA DLI: Fundamentals of Deep Learning</li>
              <li>Cisco Networking Academy: Introduction to Cybersecurity</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-content">
          <div className="card">
            <h2>Languages</h2>
            <div className="tags">
              <span className="tag">English: CEFR - C1</span>
              <span className="tag">German: A2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 