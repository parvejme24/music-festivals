import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <img
          src="https://i.ibb.co/fnPjWMz/Asset-1.png"
          className="w-32 mb-3"
          alt=""
        />
        <div className="text-center mb-4">
          <h3 className="text-2xl font-semibold">Stay Connected</h3>
          <p className="text-gray-400">
            Follow us on social media for updates and announcements.
          </p>
        </div>
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <Link
            target="_blank"
            to="https://www.facebook.com/"
            className="text-2xl text-gray-400 hover:text-white"
          >
            <FaFacebook />
          </Link>
          <Link
            target="_blank"
            to="https://twitter.com/"
            className="text-2xl text-gray-400 hover:text-white"
          >
            <FaTwitter />
          </Link>
          <Link
            target="_blank"
            to="https://www.instagram.com/"
            className="text-2xl text-gray-400 hover:text-white"
          >
            <FaInstagram />
          </Link>
          <Link
            target="_blank"
            to="https://www.youtube.com/"
            className="text-2xl text-gray-400 hover:text-white"
          >
            <FaYoutube />
          </Link>
        </div>
        {/* Footer Links */}
        <ul className="mt-8 flex space-x-6 flex-wrap justify-center mx-8 md:mx-0">
          <li>
            <Link to="/home" className="text-gray-400 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutUs" className="text-gray-400 hover:text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/lineup" className="text-gray-400 hover:text-white">
              Lineup
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="text-gray-400 hover:text-white">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/campaign" className="text-gray-400 hover:text-white">
              Campaign
            </Link>
          </li>
          <li>
            <Link to="/contactUs" className="text-gray-400 hover:text-white">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/FAQs" className="text-gray-400 hover:text-white">
              FAQ
            </Link>
          </li>
        </ul>
        {/* Copyright */}
        <div className="mt-8 text-gray-400">
          &copy; {new Date().getFullYear()} Music Festival. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
