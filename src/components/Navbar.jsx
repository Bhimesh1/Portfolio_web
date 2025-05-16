import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import VisitorCounter from './VisitorCounter';
import '../styles/Navbar.css';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <NavLink to="/" className="nav-brand" onClick={() => handleNavigation('/')}>
          Bhimesh Patil
        </NavLink>
        
        <div className="nav-links">
          <VisitorCounter />
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavigation('/')}
          >
            <i className="fas fa-home"></i>
            <span>Home</span>
          </NavLink>
          
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavigation('/about')}
          >
            <i className="fas fa-user"></i>
            <span>About</span>
          </NavLink>
          
          <NavLink 
            to="/experience" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavigation('/experience')}
          >
            <i className="fas fa-briefcase"></i>
            <span>Experience</span>
          </NavLink>
          
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavigation('/projects')}
          >
            <i className="fas fa-code"></i>
            <span>Projects</span>
          </NavLink>
          
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkMode ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 