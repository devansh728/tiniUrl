import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaLink, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-14">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaLink className="text-blue-400 text-xl" />
              <h2 className="text-2xl font-bold">Linkly</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Simplifying URL shortening for efficient sharing and powerful analytics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">About</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Dashboard</Link></li>
              <li><Link to="/login" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Login</Link></li>
              <li><Link to="/register" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Sign Up</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">GDPR</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1" />
                <span className="text-gray-400">123 Link Street, Web City, Internet 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <span className="text-gray-400">support@Linkly.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Linkly. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 md:mt-0">
            Designed with ❤️ for a better web
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;