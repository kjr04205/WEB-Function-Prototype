import React, { useRef, useState } from 'react';

const ScrollableContainer = ({ children }) => {
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollLeft = () => {
    if (!isScrolling && containerRef.current) {
      setIsScrolling(true);
      const scrollAmount = containerRef.current.clientWidth / 2; // Adjust the scroll distance as needed
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(() => {
        setIsScrolling(false);
      }, 500); // Adjust the duration as needed
    }
  };

  const scrollRight = () => {
    if (!isScrolling && containerRef.current) {
      setIsScrolling(true);
      const scrollAmount = containerRef.current.clientWidth / 2; // Adjust the scroll distance as needed
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(() => {
        setIsScrolling(false);
      }, 500); // Adjust the duration as needed
    }
  };

  return (
    <div style={{ overflowX: 'auto', width:500 }}>
      <div style={{ display: 'flex', overflow: 'auto' }} ref={containerRef}>
        {children}
      </div>
      <button onClick={scrollLeft}>Scroll Left</button>
      <button onClick={scrollRight}>Scroll Right</button>
    </div>
  );
};

export default ScrollableContainer;