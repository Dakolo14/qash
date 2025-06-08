"use client";

import { useState, useRef, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav ref={navbarRef} className={`absolute top-0 left-0 w-full text-white z-50 ${pathname !== '/' ? 'bg-gradient-to-r from-[#4b0d18] to-orange-600' : ''}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/QA Logo.png" alt="Qash Capital Logo" width={160} height={52} className="h-10 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="hover:text-gray-200 transition-colors">Home</a>
          <a href="/about" className="hover:text-gray-200 transition-colors">About Us</a>
          <a href="/services" className="hover:text-gray-200 transition-colors">Services</a>
          <a href="/contact" className="hover:text-gray-200 transition-colors">Contact</a>
          <a href="/apply" className={`${pathname === '/' ? 'bg-gradient-to-r from-orange-600 to-red-800 text-white hover:from-orange-700 hover:to-red-900' : 'bg-white text-[#4b0d18] hover:bg-gray-100'} font-semibold py-2 px-6 rounded-full transition-colors`}>
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <HiX className="h-8 w-8" /> : <HiMenu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-75 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-[#4b0d18] z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <HiX className="h-8 w-8" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 py-8">
          <a href="/" className="text-white text-lg hover:text-gray-200 transition-colors" onClick={toggleMenu}>
            Home
          </a>
          <a href="/about" className="text-white text-lg hover:text-gray-200 transition-colors" onClick={toggleMenu}>
            About Us
          </a>
          <a href="/services" className="text-white text-lg hover:text-gray-200 transition-colors" onClick={toggleMenu}>
            Services
          </a>
          <a href="/contact" className="text-white text-lg hover:text-gray-200 transition-colors" onClick={toggleMenu}>
            Contact
          </a>
          <a href="/apply" className={`${pathname === '/' ? 'bg-gradient-to-r from-orange-600 to-red-800 text-white hover:from-orange-700 hover:to-red-900' : 'bg-white text-[#4b0d18] hover:bg-gray-100'} font-semibold py-2 px-6 rounded-full transition-colors w-3/4`} onClick={toggleMenu}>
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 