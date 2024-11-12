import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User } from "lucide-react";

import Wellnest from "../assets/WellNest.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  const services = [
    { name: "Workout", path: "/workout" },
    { name: "Meditation", path: "/meditation" },
    { name: "Nutrition", path: "/nutrition" },
  ];

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <>
      <nav className="relative bg-white text-pink-400 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/home" className="flex items-center text-pink-700 hover:text-blue-400 transition duration-300">
                <img src={Wellnest} alt="Wellnest logo" className="w-32 h-auto"/>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => navigate("/")} className="text-black font-bold hover:text-pink-600 px-3 py-2 text-sm">
                Home
              </button>
              {/* <button className="text-black font-bold hover:text-pink-600 px-3 py-2 text-sm">About Us</button>
              <button className="text-black font-bold hover:text-pink-600 px-3 py-2 text-sm">Contact Us</button> */}


<Link to="/about">
  <button className="text-black font-bold hover:text-pink-600 px-3 py-2 text-sm">About Us</button>
</Link>

<Link to="/contact">
  <button className="text-black font-bold hover:text-pink-600 px-3 py-2 text-sm">Contact Us</button>
</Link>
              <a href="#bmi"><button className="text-blue-600 font-bold hover:text-pink-600 px-2 py-2 text-sm">BMI </button></a>
              <a href="#journal"><button className="text-blue-600 font-bold hover:text-pink-600 px-2 py-2 text-sm">Journal </button></a>

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-black font-bold hover:text-pink-600 px-3 py-2 text-sm flex items-center"
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-pink-100 transition duration-300"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login" className="bg-pink-300 text-black font-bold px-4 py-2 rounded-sm hover:bg-pink-600 transition duration-300">
                Login
              </Link>
              <Link to="/register" className="bg-pink-300 text-black font-bold px-4 py-2 rounded-sm hover:bg-pink-500 transition duration-300">
                Sign Up
              </Link>
              <Link to="/userProfile" className="text-black font-bold hover:text-pink-400 transition duration-300">
                <User className="h-6 w-6" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-pink-700 hover:text-blue-400 focus:outline-none">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => navigate("/")} className="text-pink-700 hover:text-blue-400 block px-3 py-2 rounded-md text-base">
                Home
              </button>
              <button className="text-pink-700 hover:text-blue-400 block px-3 py-2 rounded-md text-base">About</button>
              <button className="text-pink-700 hover:text-blue-400 block px-3 py-2 rounded-md text-base">Contact</button>
              
              {/* Mobile Services Dropdown */}
              <div className="pl-4">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-3 py-2 rounded-md text-base font-medium text-pink-700 hover:text-blue-400 transition duration-300"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5 space-x-3">
                <Link to="/login" className="block px-3 py-2 rounded-md text-base font-bold text-white hover:text-blue-400 transition duration-300">
                  Login
                </Link>
                <Link to="/register" className="block px-3 py-2 rounded-md text-base font-bold text-white hover:text-blue-400 transition duration-300">
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

