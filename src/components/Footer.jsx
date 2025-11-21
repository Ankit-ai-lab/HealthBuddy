import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Linkedin, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-900 dark:bg-[#212738] dark:text-white py-12 px-4 md:px-8 font-inter border-t-4 border-red-500 rounded-t-4xl  shadow-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand Section */}
        <div className="col-span-1 lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2 tracking-widest italic">
            IGNITE
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Fitness tracking for real life.
          </p>
          <button className="bg-white text-blue-700 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center cursor-pointer dark:hover:bg-gray-500 dark:hover:text-white">
            START TODAY
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4">Products</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              <a
                href="#"
                className="relative inline-block hover:text-gray-800 dark:hover:text-white transition duration-200 group"
              >
                Exercise
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative inline-block hover:text-gray-800 dark:hover:text-white transition duration-200 group"
              >
                Apps
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative inline-block hover:text-gray-800 dark:hover:text-white transition duration-200 group"
              >
                Premium
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              <a
                href="#"
                className="relative inline-block hover:text-gray-800 dark:hover:text-white transition duration-200 group"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative inline-block hover:text-gray-800 dark:hover:text-white transition duration-200 group"
              >
                Community
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative inline-block hover:text-gray-800 dark:hover:text-white transition duration-200 group"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative inline-block hover:text-gray-800 dark:hover:text-white transition duration-200 group"
              >
                Support Center
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              <Link
                to="/about"
                className="relative inline-block hover:text-gray-800 dark:hover:text-white transition duration-200 group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="relative inline-block hover:text-gray-800 dark:hover:text-white transition duration-200 group"
              >
                Careers
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="relative inline-block hover:text-gray-800 dark:hover:text-white transition duration-200 group"
              >
                Press
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative inline-block hover:text-gray-800 dark:hover:text-white transition duration-200 group"
              >
                Advertise With Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400 text-sm">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Ignite, Inc. Community Guidelines
          Feedback Terms Privacy API Cookie Preferences
        </p>
        <div className="flex justify-center space-x-6">
          {/* Social Media Icons (using Phosphor Icons or similar visual placeholders) */}
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-gray-800 dark:hover:text-white transition duration-200"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-gray-800 dark:hover:text-white transition duration-200"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:text-gray-800 dark:hover:text-white transition duration-200"
          >
            <Youtube size={20} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-gray-800 dark:hover:text-white transition duration-200"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            aria-label="TikTok"
            className="hover:text-gray-800 dark:hover:text-white transition duration-200"
          >
            <Music size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
