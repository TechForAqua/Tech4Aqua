import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scroll ? 'bg-white text-blue-900 shadow-lg' : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Logo" width={150} height={50} />
        </div>
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="#" className={`hover:text-blue-300 ${scroll ? 'text-blue-900 hover:text-blue-400' : 'text-white'}`}>Home</a>
          <a href="#" className={`hover:text-blue-300 ${scroll ? 'text-blue-900' : 'text-white'}`}>Services</a>
          <a href="#" className={`hover:text-blue-300 ${scroll ? 'text-blue-900' : 'text-white'}`}>Portfolio</a>
          <a href="#" className={`hover:text-blue-300 ${scroll ? 'text-blue-900' : 'text-white'}`}>Testimonials</a>
          <a href="#" className={`hover:text-blue-300 ${scroll ? 'text-blue-900' : 'text-white'}`}>Team</a>
          <div className="relative group">
            <a href="#" className={`hover:text-blue-300 ${scroll ? 'text-blue-900' : 'text-white'}`}>Menu</a>
            <div className="absolute hidden group-hover:block bg-white text-blue-900 p-2 mt-2 rounded-md shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-lg">About</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-lg">Pricing</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-lg">FAQs</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-lg">Terms and conditions</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-lg">Privacy Policy</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-lg">Blog</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-lg">Blog Detail page</a>
            </div>
          </div>
          <a href="#" className={`hover:text-blue-300 ${scroll ? 'text-blue-900' : 'text-white'}`}>News</a>
        </div>
        <div className="flex items-center space-x-6">
          <button className={`bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md hidden md:block ${scroll ? 'bg-blue-600' : ''}`}>Get Quotes</button>
        </div> 
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={`w-6 h-6`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-900 text-white">
          <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-700">Home</a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-700">Services</a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-700">Portfolio</a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-700">Testimonials</a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-700">Team</a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-700">Menu</a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-blue-700">News</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
