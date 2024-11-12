import { FaInstagram, FaEnvelope } from 'react-icons/fa'; // Importing icons
import Logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center ">
        {/* Logo */}
        <div className="mb-4">
          <img
            src={Logo}
            alt="WellNest Logo"
            className="mx-auto w-16" 
          />
        </div>

        {/* Text */}
        <p className="mb-4 text-sm">
          <p className="mb-2"><i>Your journey to wellness starts at WellNest.</i></p> 
          Join us in a holistic approach to health, fitness, and well-being.
        </p>

        {/* Contact */}
        <p className="mb-4 text-md">
          Contact us: 
          {/* <a href="mailto:contact@wellnest.com" className="text-pink-500 hover:text-pink-600"> contact@wellnest.com</a> */}
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://mail.google.com/" target="_blank" aria-label="Email">
            <FaEnvelope className="text-2xl hover:text-pink-600 transition-colors" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-2xl hover:text-pink-600 transition-colors" />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-sm text-pink-500 hover:text-pink-600">&copy; 2024 WellNest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
