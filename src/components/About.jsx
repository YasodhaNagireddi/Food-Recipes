import React from "react";
import AboutImg from "../assets/AboutImg.png";
import HeroSectionImg from "../assets/HeroSectionImg.png";

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div
        className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${HeroSectionImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
          <p className="text-lg mt-2">
            Discover our story and passion for recipes.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={AboutImg}
            alt="About"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-gray-800">
          <p className="mb-4 text-lg">
            Welcome to <span className="font-semibold">Recipe Delight</span>! We
            are passionate about sharing easy, healthy, and tasty recipes from
            around the world.
          </p>
          <p className="mb-4 text-lg">
            Our mission is to inspire home cooks with creative and nutritious
            meal ideas. Whether you're a beginner or a seasoned chef, we’ve got
            something for everyone.
          </p>
          <p className="text-lg">
            Thank you for being part of our culinary journey. Let's cook
            something amazing together! 🍽️
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
