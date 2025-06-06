import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans pt-24">
      {/* Top Contact Bar */}
      <div className="bg-gray-800 text-white text-sm py-2 px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex flex-col sm:flex-row sm:space-x-6 items-center">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <span>(+91) 1234567890</span>
          </div>
          <div className="flex items-center space-x-2 mt-1 sm:mt-0">
            <FaEnvelope />
            <span>recipes@gmail.com</span>
          </div>
        </div>
        <div className="flex space-x-4 text-lg mt-1 sm:mt-0">
          <FaTwitter className="cursor-pointer hover:text-pink-400" />
          <FaFacebookF className="cursor-pointer hover:text-pink-400" />
          <FaInstagram className="cursor-pointer hover:text-pink-400" />
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[80vh] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "url('https://mastcell360.com/wp-content/uploads/2019/08/Low-Histamine-Low-Oxalate-Low-Lectin-Meal-Ideas-Mast-Cell-360.jpg')",
        }}
      >
        <div className="pt-40 md:pt-80 text-black max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-md leading-tight">
            Best food for your taste
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 drop-shadow-md">
            Discover delectable cuisine and unforgettable moments <br />
            in our welcoming, culinary haven.
          </p>

          <button
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full transition"
            onClick={() => navigate("/recipes")}
          >
            Explore Menu
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
