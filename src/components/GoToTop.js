// src/components/GoToTop.js

import React, { useState, useEffect } from 'react';
import './GoToTop.css'; // Custom CSS for styling

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="go-to-top" onClick={scrollToTop} style={{ display: visible ? 'block' : 'none' }}>
      <span><b>&uarr;</b></span> 
    </div>
  );
};

export default GoToTop;
