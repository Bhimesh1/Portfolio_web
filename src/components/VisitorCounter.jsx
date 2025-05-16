import React, { useState, useEffect } from 'react';
import '../styles/VisitorCounter.css';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Get the current count from localStorage
    const savedCount = localStorage.getItem('visitorCount');
    if (savedCount) {
      setCount(parseInt(savedCount));
    }
  }, []);

  return (
    <div className="visitor-counter">
      <i className="fas fa-eye"></i>
      <span>{count.toLocaleString()} visitors</span>
    </div>
  );
};

export default VisitorCounter; 