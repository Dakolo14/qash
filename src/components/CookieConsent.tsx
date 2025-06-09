"use client";

import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50"
         style={{ transform: isVisible ? 'translateY(0)' : 'translateY(100%)' }}>
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-gray-800 mb-4 md:mb-0">
          <p className="text-sm">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={acceptCookies}
            className="bg-gradient-to-r from-orange-600 to-red-800 text-white px-6 py-2 rounded-full hover:from-orange-700 hover:to-red-900 transition-all duration-300"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 