import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Logo / Brand */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <img
              src="https://e7.pngegg.com/pngimages/415/27/png-clipart-fruit-logo-food-recipe-business-seasoning-ingredients-natural-foods-dried-fruit.png"
              alt="Recipe Delight Logo"
              className="w-10 h-10 rounded-full"
            />
            <h2 className="text-2xl font-bold">Recipe Delight</h2>
          </div>
          <p className="mt-3 text-sm text-gray-400">
            Delicious recipes made simple. Taste the love in every dish! 🍳
          </p>
        </div>

        {/* Navigation */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="hover:text-white transition">
                Recipes
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-xl text-gray-300">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 px-2">
        &copy; {new Date().getFullYear()} Yasodha's Recipe Delight. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
