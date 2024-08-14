import React, { useRef, useState, useEffect } from 'react';
import './ScrollBar.css';

const ScrollBar = ({ sectionNames, onSectionClick, highlightedIndex }) => {
  const scrollContainerRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    container.scrollTo({
      left: scrollIndex * container.clientWidth / 5, // Adjust scroll based on container width
      behavior: 'smooth',
    });
  }, [scrollIndex]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (highlightedIndex < 5) {
      setScrollIndex(0);
    } else if (highlightedIndex > sectionNames.length - 5) {
      setScrollIndex(sectionNames.length - 5);
    } else {
      setScrollIndex(highlightedIndex - 2);
    }
  }, [highlightedIndex, sectionNames.length]);

  const handlePrevClick = () => {
    setScrollIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setScrollIndex(prevIndex => Math.min(prevIndex + 1, sectionNames.length - 5));
  };

  return (
    <div className="scroll-bar">
      <span className="scroll-title">Select Services:</span>
      <button className="scroll-arrow left" onClick={handlePrevClick}>‹</button>
      <div className="scroll-container" ref={scrollContainerRef}>
        <div className="scroll-content">
          {sectionNames.map((name, index) => (
            <div
              key={index}
              className={`scroll-item ${
                highlightedIndex === index ? 'highlighted' : ''
              }`}
              onClick={() => onSectionClick(index)}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <button className="scroll-arrow right" onClick={handleNextClick}>›</button>
    </div>
  );
};

export default ScrollBar;
