import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const BookCover = ({ text, color }) => (
  <div
    className={`w-32 h-48 ${color} rounded-lg shadow-lg flex flex-col justify-center items-center p-4 transform transition-all duration-300 hover:scale-110`}
  >
    <p className="text-white text-md font-semibold text-center">{text}</p>
  </div>
);
const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const books = [
    {
      text: "A Reading Experience That Feels Just Right",
      color: "bg-gradient-to-r from-blue-800 to-blue-500",
    },
    {
      text: "Explore Unlimited Genres & Accurate Insights",
      color: "bg-gradient-to-r from-green-800 to-green-500",
    },
    {
      text: "Discover Books That Speak to Your Soul",
      color: "bg-gradient-to-r from-red-800 to-red-500",
    },
  ];
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 bg-pink-500"
        style={{
          backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
          transition: "background-position 0.3s ease-out",
        }}
      ></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-6xl font-bold mb-6 tracking-wide">
          {" "}
          <span className="text-transparent bg-clip-text bg-white">
            WellNest
          </span>
        </h1>
        {/* Interactive Book Showcase */}
        <div
          className="flex space-x-4 mb-8 perspective-1000"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {books.map((book, index) => (
            <div
              key={book.title}
              className="transform transition-all duration-500"
              style={{
                transform: isHovering
                  ? `rotateY(${(index - 2) * 15}deg) translateZ(${
                      Math.abs(index - 2) * 20
                    }px)`
                  : "rotateY(0) translateZ(0)",
              }}
            >
              <BookCover {...book} />
            </div>
          ))}
        </div>
        <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto text-center font-serif">
          elevate your  journey today!
        </p>
        {/* Interactive Buttons */}
        <div className="flex space-x-6 mt-10">
          <Link
            to="/login"
            className="group relative px-8 py-3 overflow-hidden rounded-lg bg-white text-gray-900 shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <span
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100
transition-opacity duration-300 z-0"
            ></span>
            <span className="relative z-10 font-semibold group-hover:text-white transition-colors duration-300">
              Login
            </span>
          </Link>
          <Link
            to="/register"
            className="group relative px-8 py-3 overflow-hidden rounded-lg bg-purple-600 text-white shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <span
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100
transition-opacity duration-300 z-0"
            ></span>
            <span className="relative z-10 font-semibold">Register</span>
          </Link>
        </div>
      </div>
      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
      </div>
    </div>
  );
};
export default About;
