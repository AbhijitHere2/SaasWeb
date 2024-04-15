import "./Framer.css";
import React, { useState } from "react";
import logo from "../images/logo.png";
import logo1 from "../images/Default.png";

const Framer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="  mt-12 h-[81px] bg-transparent bg-gradient-to-tr from-slate-200 to-blue-100  fixed w-screen z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <div className=" ml-1">
            <a className="max-sm:hidden" href="#">
              <img src={logo} alt="logo" />
            </a>
            <a className="sm:hidden " href="#">
              <img src={logo1} alt="logo" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center max-lg:space-x-5 space-x-10">
          <a
          className=" font-sans font-normal text-base  max-sm:pb-5 text-gray-600 hover:text-black hover:font-semibold "
          href="#"
        >
          About
        </a>
        <a
          className=" font-sans font-normal text-base max-sm:pb-5 text-gray-600  hover:text-black hover:font-semibold "
          href="#"
        >
          Features
        </a>
        <a
          className=" font-sans font-normal text-base max-sm:pb-5 text-gray-600 hover:text-black hover:font-semibold "
          href="#"
        >
          Customers
        </a>
        <a
          className=" font-sans font-normal text-base max-sm:pb-5 text-gray-600  hover:text-black hover:font-semibold "
          href="#"
        >
          Updates
        </a>
        <a
          className=" font-sans font-normal text-base max-sm:pb-5 text-gray-600  hover:text-black hover:font-semibold "
          href="#"
        >
          Help
        </a>
        <a
          className="font-sans  font-medium text-base text-white border-2 bg-black py-[10px] px-[15px] rounded-xl hover:text-black hover:bg-white hover:border-black"
          href="#"
        >
          Get for free
        </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            id="menu-toggle"
            className="md:hidden focus:outline-none focus:ring-2 z-50 focus:ring-white p- rounded-md"
            onClick={toggleMobileMenu}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-black z-50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16v12H4zm-2 0h20v12H2zM4 12h16v12H4z"
              ></path>
            </svg>
          </button>

          {/* Mobile Navigation Menu */}
          <div
            id="mobile-menu"
            className={`
            md:hidden
            ${
              isOpen
                ? "block fixed top-12 right-0 w-56 bg-gradient-to-tr from-slate-200 to-blue-100 text-center z-50 transition duration-300 ease-in-out overflow-y-auto"
                : "hidden"
            }
          `}
          >
            <div className="container mx-auto px-4 pt-4 pb-8 flex flex-col z-50  space-y-4">
            <a
          className=" font-sans font-normal text-base  max-sm:pb-5 text-gray-600 hover:text-black hover:font-semibold "
          href="#"
        >
          About
        </a>
        <a
          className=" font-sans font-normal text-base max-sm:pb-5 text-gray-600  hover:text-black hover:font-semibold "
          href="#"
        >
          Features
        </a>
        <a
          className=" font-sans font-normal text-base max-sm:pb-5 text-gray-600 hover:text-black hover:font-semibold "
          href="#"
        >
          Customers
        </a>
        <a
          className=" font-sans font-normal text-base max-sm:pb-5 text-gray-600  hover:text-black hover:font-semibold "
          href="#"
        >
          Updates
        </a>
        <a
          className=" font-sans font-normal text-base max-sm:pb-5 text-gray-600  hover:text-black hover:font-semibold "
          href="#"
        >
          Help
        </a>
        <a
          className="font-sans  font-medium text-base text-white border-2 bg-black py-[10px] px-[15px] rounded-xl hover:text-black hover:bg-white hover:border-black"
          href="#"
        >
          Get for free
        </a>
        <button onClick={toggleMobileMenu} className="font-sans  text-base max-sm:pb-5 text-black font-bold  ">Close</button>
            
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Framer;
