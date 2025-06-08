"use client";

import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted') {
      setHasAccepted(true);
    } else if (consent === 'rejected') {
      setHasAccepted(true); // Don't show if rejected previously
    } else {
      setIsVisible(true); // Show the banner if no choice yet
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    setHasAccepted(true);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
    setHasAccepted(true);
  };

  if (hasAccepted || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#4b0d18] text-white p-4 shadow-lg z-50 transform translate-y-0 transition-transform duration-500 ease-in-out">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="mb-4 md:mb-0 text-sm md:text-base text-center md:text-left">
          This website uses cookies to ensure you get the best experience on our website. 
          By continuing to use this site, you agree to our <a href="/privacy" className="underline hover:text-gray-200">Privacy Policy</a>.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleAccept}
            className="bg-white text-[#4b0d18] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-md"
          >
            Accept
          </button>
          <button
            onClick={handleReject}
            className="border border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#4b0d18] transition-colors shadow-md"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 