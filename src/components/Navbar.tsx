"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav ref={navbarRef} className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#4b0d18] shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/QA Logo.png" alt="Qash Capital Logo" width={160} height={52} className="h-10 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:!flex items-center text-white space-x-8">
          <Link href="/" className="text-white hover:text-gray-400 transition-colors">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-400 transition-colors">About Us</Link>
          <Link href="/services" className="text-white hover:text-gray-400 transition-colors">Services</Link>
          <Link href="/contact" className="text-white hover:text-gray-400 transition-colors">Contact</Link>
          <Link href="/apply" className={`${pathname === '/' ? 'bg-gradient-to-r from-orange-600 to-red-800 text-white hover:from-orange-700 hover:to-red-900' : 'bg-white text-[#4b0d18] hover:bg-gray-100'} font-semibold py-2 px-6 rounded-full transition-colors`}>
            Apply Now
          </Link>
        </div>
        

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#4b0d18] absolute top-full left-0 right-0 shadow-lg">
          <div className="flex flex-col items-center space-y-6 py-8">
            <Link href="/" className="text-white text-lg hover:text-gray-200 transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/about" className="text-white text-lg hover:text-gray-200 transition-colors" onClick={toggleMenu}>
              About Us
            </Link>
            <Link href="/services" className="text-white text-lg hover:text-gray-200 transition-colors" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="/contact" className="text-white text-lg hover:text-gray-200 transition-colors" onClick={toggleMenu}>
              Contact
            </Link>
            <Link href="/apply" className={`${pathname === '/' ? 'bg-gradient-to-r from-orange-600 to-red-800 text-white hover:from-orange-700 hover:to-red-900' : 'bg-white text-[#4b0d18] hover:bg-gray-100'} font-semibold py-2 px-6 rounded-full transition-colors w-3/4`} onClick={toggleMenu}>
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 