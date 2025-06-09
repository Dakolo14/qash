"use client";

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-600 to-red-800 text-white p-4 rounded-full shadow-lg hover:from-orange-700 hover:to-red-900 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75 z-50"
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default BackToTopButton; 