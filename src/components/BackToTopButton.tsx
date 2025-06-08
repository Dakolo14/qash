"use client";

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain amount
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Adjust this value as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#4b0d18] text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition-opacity duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4b0d18]"
          aria-label="Back to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
};

export default BackToTopButton; 