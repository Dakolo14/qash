import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#4b0d18] to-orange-600 text-white py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-x-16 gap-y-12">
          {/* Column 1: Qash Capital Info */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              {/* Placeholder for QA Logo - Replace with actual image if available */}
              <Image src="/QA Logo.png" alt="Qash Capital Logo" width={160} height={52} className="h-10 object-contain" />
            </div>
            <p className="text-gray-200 leading-relaxed mb-6">
              Providing innovative financial solutions to help Nigerians achieve their goals through flexible loans,
              smart savings, and expert financial services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full p-3 bg-[#4b0d18] flex items-center justify-center hover:bg-opacity-80 transition-colors">
                <FaLinkedinIn className="text-white text-3xl" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full p-3 bg-[#4b0d18] flex items-center justify-center hover:bg-opacity-80 transition-colors">
                <FaTwitter className="text-white text-3xl" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full p-3 bg-[#4b0d18] flex items-center justify-center hover:bg-opacity-80 transition-colors">
                <FaInstagram className="text-white text-3xl" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-serif mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-200 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-200 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="text-gray-200 hover:text-white transition-colors">Services</a></li>
                <li><a href="/contact" className="text-gray-200 hover:text-white transition-colors">Contact</a></li>
              </ul>
              <ul className="space-y-3">
                <li><a href="/terms" className="text-gray-200 hover:text-white transition-colors">Terms</a></li>
                <li><a href="/privacy" className="text-gray-200 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Stay Connected */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold font-serif mb-6">Stay Connected</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <FiPhone className="text-white text-xl" />
                <span className="text-gray-200">09027740184</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-white text-xl" />
                <span className="text-gray-200">info@qashcapital.com</span>
              </div>
            </div>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="w-full bg-white text-[#4b0d18] font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-6 text-center text-gray-300 text-sm">
          © 2025 Qash Capital Limited. All rights reserved.
        </div>
        <div className="mt-4 text-center text-gray-300 text-sm">
          Developed by <a href="https://www.ajosedamilare.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Ajose Damilare</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 