import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <span className="text-white text-2xl font-bold ml-2">Tumaini Prison Ministry</span>
            </NavLink>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="block md:hidden flex-shrink-0 items-center mr-4"
            >
              <svg
                className="h-6 w-6 fill-current text-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0V6zm5-3a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm6 3a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0V6z"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-2">
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
              <NavLink to="/programs" className={linkClass}>
                Programs
              </NavLink>
              <NavLink to="/newsletters" className={linkClass}>
                Newsletters
              </NavLink>
              <NavLink to="/testimonials" className={linkClass}>
                Testimonials
              </NavLink>
              <NavLink to="/contact" className={linkClass}>
                Contact Us
              </NavLink>
             
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-gray-800 py-4 text-gray-400">
          <div className="container mx-auto">
            <ul className="flex flex-col space-y-2">
              <NavLink to="/" className={linkClass} onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink to="/about" className={linkClass} onClick={closeMenu}>
                About
              </NavLink>
              <NavLink to="/programs" className={linkClass} onClick={closeMenu}>
                Programs
              </NavLink>
              <NavLink to="/newsletters" className={linkClass} onClick={closeMenu}>
                Newsletters
              </NavLink>
              <NavLink to="/testimonials" className={linkClass} onClick={closeMenu}>
                Testimonials
              </NavLink>
              <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
                Contact Us
              </NavLink>
              
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
