import React, { useState } from 'react';

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
            <a href="/" className="text-white font-semibold text-xl">Rescue Hospital</a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="ddd" className="text-gray-300 hover:text-white">Home</a>
            <a href="ddd" className="text-gray-300 hover:text-white">Services</a>
            <a href="ddd" className="text-gray-300 hover:text-white">Doctors</a>
            <a href="/admin/page" className="text-gray-300 hover:text-white">admin</a>
            <a href="/create/user" className="text-gray-300 hover:text-white">Login</a>
            <a href="/create/user" className="text-gray-300 hover:text-white">Register</a>
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
            <a href="ddd" className="block text-gray-300 hover:text-white">Home</a>
            <a href="ddd" className="block text-gray-300 hover:text-white">Services</a>
            <a href="ddd" className="block text-gray-300 hover:text-white">Doctors</a>
            <a href="ddd" className="block text-gray-300 hover:text-white">Contact Us</a>
            <a href="ddd" className="block text-gray-300 hover:text-white">Login</a>
            <a href="ddd" className="block text-gray-300 hover:text-white">Register</a>
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;




