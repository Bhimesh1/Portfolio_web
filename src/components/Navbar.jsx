import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <NavLink to="/" className="nav-brand">
          Bhimesh Patil
        </NavLink>
        
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            <i className="fas fa-home"></i>
            <span>Home</span>
          </NavLink>
          
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            <i className="fas fa-user"></i>
            <span>About</span>
          </NavLink>
          
          <NavLink to="/experience" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            <i className="fas fa-briefcase"></i>
            <span>Experience</span>
          </NavLink>
          
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
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