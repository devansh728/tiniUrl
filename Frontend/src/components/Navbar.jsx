import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaLink } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`h-16 ${scrolled ? 'bg-white shadow-md text-gray-800' : 'bg-transparent text-white'} z-50 flex items-center sticky top-0 transition-all duration-300`}>
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <FaLink className={`text-2xl ${scrolled ? 'text-blue-600' : 'text-white'}`} />
          <h1 className={`font-bold text-2xl ${scrolled ? 'text-blue-600' : 'text-white'} font-montserrat sm:mt-0 mt-0`}>
            Linklytics
          </h1>
        </Link>
        
        <ul
          className={`flex sm:gap-8 gap-4 sm:items-center sm:mt-1 sm:pt-0 pt-3 sm:static absolute left-0 top-[64px] sm:shadow-none shadow-md ${
            navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
          } transition-all duration-300 sm:h-fit ${scrolled ? 'sm:bg-transparent bg-white' : 'sm:bg-transparent bg-gray-900'} sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
        >
          <li className="font-medium transition-all duration-150">
            <Link
              className={`${
                path === "/" 
                  ? `${scrolled ? 'text-blue-600 font-semibold' : 'text-white font-semibold'}` 
                  : `${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-200 hover:text-white'}`
              }`}
              to="/"
              onClick={() => setNavbarOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="font-medium transition-all duration-150">
            <Link
              className={`${
                path === "/about" 
                  ? `${scrolled ? 'text-blue-600 font-semibold' : 'text-white font-semibold'}` 
                  : `${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-200 hover:text-white'}`
              }`}
              to="/about"
              onClick={() => setNavbarOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="font-medium transition-all duration-150">
            <Link
              className={`${
                path === "/dashboard" 
                  ? `${scrolled ? 'text-blue-600 font-semibold' : 'text-white font-semibold'}` 
                  : `${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-200 hover:text-white'}`
              }`}
              to="/dashboard"
              onClick={() => setNavbarOpen(false)}
            >
              Dashboard
            </Link>
          </li>
          
          <div className="flex sm:flex-row flex-col sm:gap-3 gap-2">
            <Link to="/login" onClick={() => setNavbarOpen(false)}>
              <button className="sm:ml-0 -ml-1 border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white cursor-pointer w-24 text-center font-medium px-2 py-2 rounded-md transition-all duration-300">
                Login
              </button>
            </Link>
            
            <Link to="/register" onClick={() => setNavbarOpen(false)}>
              <button className="sm:ml-0 -ml-1 bg-blue-600 text-white cursor-pointer w-24 text-center font-medium px-2 py-2 rounded-md hover:bg-blue-700 transition-all duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        </ul>
        
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex items-center sm:mt-0 mt-0"
        >
          {navbarOpen ? (
            <RxCross2 className={`${scrolled ? 'text-gray-800' : 'text-white'} text-2xl`} />
          ) : (
            <IoIosMenu className={`${scrolled ? 'text-gray-800' : 'text-white'} text-2xl`} />
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;