"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">SolarOptima</div>

        {/* Navigation Items */}
        <div className="flex-grow flex justify-center">
          <div
            className={`lg:flex items-center ${isOpen ? "block" : "hidden"}`}
          >
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white py-2 lg:py-0"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white py-2 lg:py-0"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white py-2 lg:py-0"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white py-2 lg:py-0"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Sign In Button */}
        <div className="hidden lg:block">
          <Link
            href="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
