import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <img src="https://img.icons8.com/color/48/doctor-male--v1.png" alt="" />
            <Link to="/" className="text-white font-semibold text-xl">Rescue Hospital</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
            <Link to="/doctors" className="text-gray-300 hover:text-white">Doctors</Link>
            <Link to="/admin/page" className="text-gray-300 hover:text-white">admin</Link>
            <Link to="/user/login" className="text-gray-300 hover:text-white">Login</Link>
            <Link to="/user/register" className="text-gray-300 hover:text-white">Register</Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 9H5a1 1 0 010-2h14a1 1 0 110 2zm0 4H5a1 1 0 110-2h14a1 1 0 010 2zm0 4H5a1 1 0 110-2h14a1 1 0 010 2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 7a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 7a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden space-y-4">
            <Link to="/" className="block text-gray-300 hover:text-white">Home</Link>
            <Link to="/services" className="block text-gray-300 hover:text-white">Services</Link>
            <Link to="/doctors" className="block text-gray-300 hover:text-white">Doctors</Link>
            <Link to="/contact" className="block text-gray-300 hover:text-white">Contact Us</Link>
            <Link to="/user/login" className="block text-gray-300 hover:text-white">Login</Link>
            <Link to="/user/register" className="block text-gray-300 hover:text-white">Register</Link>
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;




