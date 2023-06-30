import React, { useRef, useState, useEffect } from 'react';
import './Scroll.css';
import { FaCaretLeft, FaCaretRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ScrollableContainer = ({ children }) => {
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const scrollLeft = () => {
    if (!isScrolling && containerRef.current) {
      setIsScrolling(true);
      const scrollAmount = containerRef.current.clientWidth / 2;
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    }
  };

  const scrollRight = () => {
    if (!isScrolling && containerRef.current) {
      setIsScrolling(true);
      const scrollAmount = containerRef.current.clientWidth / 2;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      const { scrollWidth, clientWidth } = container;
      setShowButtons(scrollWidth > clientWidth);
    };

    const handleResize = () => {
      handleScroll();
    };

    setTimeout(() => {
      window.dispatchEvent(new Event('load'));
    }, 1000);

    setTimeout(() => {
      window.dispatchEvent(new Event('load'));
    }, 5000);

    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="container-wrap" ref={containerRef}>
        {children}
      </div>
      {showButtons && (
        <>
          <button className="leftBtn btnArrow" onClick={scrollLeft}>
            <FaArrowLeft color="#20a5d6" size="20" alt="left arrow" />
          </button>
          <button className="rightBtn btnArrow" onClick={scrollRight}>
            <FaArrowRight color="#20a5d6" size="20" alt="right arrow" />
          </button>
        </>
      )}
    </div>
  );
};

export default ScrollableContainer;
