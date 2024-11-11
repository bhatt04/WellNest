import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown,User } from "lucide-react"; // Import User icon

import Wellnest from "../assets/WellNest.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const services = [
    "Meditation",
    "Nutrition Planning",
    "Workout"
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Keep the same functionality for Home (navigate to "/")
  const handleHomeClick = () => {
    navigate("/");
  };

  // Prevent navigation for About and Contact links
  const handlePreventNavigation = (e) => {
    e.preventDefault(); // Prevent page redirection
  };

  return (
    <>
      <nav className="relative bg-white text-pink-400 shadow-md overflow-hidden">
        {/* Dynamic Background */}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                to="/home"
                className="flex items-center space-x-2 text-pink-700 hover:text-blue-400 transition
                duration-300"
              >
                <span className="text-2xl font-light tracking-wide">
                  <img src={Wellnest} alt="Wellnest logo" className="w-32 h-auto"/>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={handleHomeClick}
                className="text-black font-bold hover:text-pink-600 px-3 py-2 text-sm "
              >
                Home
              </button>
              <button
                onClick={handlePreventNavigation}
                className="text-black font-bold hover:text-pink-600 px-3 py-2 text-sm"
              >
                About Us
              </button>
              <button
                onClick={handlePreventNavigation}
                className="text-black font-bold hover:text-pink-600 px-3 py-2 text-sm "
              >
                Contact
              </button>
              {/* services List (Dummy version) */}
              <div className="relative">
                <button
                  className="text-black font-bold hover:text-pink-600 px-3 py-2 text-sm flex
                  items-center"
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="bg-pink-300 text-black font-bold px-4 py-2 rounded-sm hover:bg-pink-600 transition
                duration-300 text-bold "
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-pink-300 text-black font-bold px-4 py-2 rounded-sm
                hover:bg-pink-500 transition duration-300 text-bold "
              >
                Sign Up
              </Link>
              {/* User Profile Icon */}
              <Link
                to="/userProfile"
                className="text-black font-bold hover:text-pink-400 transition duration-300"
              >
                <User className="h-6 w-6" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-pink-700 hover:text-blue-400
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={handleHomeClick}
                className="text-pink-700 hover:text-blue-400 block px-3 py-2 rounded-md text-base "
              >
                Home
              </button>
              <button
                onClick={handlePreventNavigation}
                className="text-pink-700 hover:text-blue-400 block px-3 py-2 rounded-md text-base"
              >
                About
              </button>
              <button
                onClick={handlePreventNavigation}
                className="text-pink-700 hover:text-blue-400 block px-3 py-2 rounded-md text-base"
              >
                Contact
              </button>
              {/* Genres List (Dummy version) */}
              <div className="pl-4">
                {services.map((service) => (
                  <a
                    key={service}
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-pink-700 hover:text-blue-400
                    transition duration-300"
                    onClick={handlePreventNavigation} // Prevent dropdown functionality
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5 space-x-3">
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-bold text-white
                  hover:text-blue-400 transition duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 rounded-md text-base font-bold text-white
                  hover:text-blue-400 transition duration-300"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
