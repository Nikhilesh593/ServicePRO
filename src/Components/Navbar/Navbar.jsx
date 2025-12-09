import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaTools } from 'react-icons/fa';
import Login from "../Login/Login";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full px-6 lg:px-16">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-teal-600 p-2 rounded-lg text-white">
              <FaTools className="text-xl" />
            </div>
            <span className="text-2xl font-black text-gray-900 font-heading tracking-tight">
              ServiConnect
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-10">
            {[
              { name: 'Services', path: '/' },
              { name: 'How it Works', path: '/' },
              { name: 'Providers', path: '/providers' },
              { name: 'Reviews', path: '/' },
              { name: 'Dashboard', path: '/user/dashboard' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-500 hover:text-teal-600 font-medium transition-colors text-[15px]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/signup" className="text-sm font-bold text-gray-500 hover:text-brand-900 transition-colors">
              Login / Sign Up
            </Link>
            <Link to="/signup" className="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-bold rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Book a Service
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-600 focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors">
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fadeIn border-t border-gray-100">
            <div className="flex flex-col gap-2 pt-4">
              {[
                { name: 'Services', path: '/' },
                { name: 'How it Works', path: '/' },
                { name: 'Providers', path: '/providers' },
                { name: 'Reviews', path: '/' },
                { name: 'Dashboard', path: '/user/dashboard' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-600 hover:text-teal-600 hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button className="w-full text-center text-gray-900 font-bold py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  Log In
                </button>
                <div className="w-full bg-teal-600 text-white py-3 rounded-lg font-bold text-center">
                  <Login />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
