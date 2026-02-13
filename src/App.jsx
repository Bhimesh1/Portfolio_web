import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

import Projects from './pages/Projects';
import Experience from './pages/Experience';
import { trackVisitor } from './utils/visitorTracker';
import ScrollToTopOnMount from './components/ScrollToTopOnMount';

// Wrapper component to use hooks
const AppContent = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    // Default to light mode if no theme is saved
    return savedTheme ? savedTheme === 'dark' : false;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Track visitor when the app loads
  useEffect(() => {
    trackVisitor();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="app-wrapper">
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

// Main App component
function App() {
  return (
    <Router>
      <ScrollToTopOnMount />
      <AppContent />
    </Router>
  );
}

export default App;
