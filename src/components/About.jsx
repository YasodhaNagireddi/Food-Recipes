import { useState } from "react";
import AboutImg from "../assets/AboutImg.png";
import HeroSectionImg from "../assets/HeroSectionImg.png";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b ">
      <button
        className="w-full text-left py-4 text-lg font-medium text-pink-600 flex justify-between items-center"
        onClick={onClick}
      >
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="pb-4 text-gray-700">{content}</p>}
    </div>
  );
};

const About = () => {
  const [openIndex, setopenIndex] = useState(null);

  const toggleAccordian = (index) => {
    setopenIndex(openIndex === index ? null : index);
  };

  const sampleData = [
    {
      title: "Who are we?",
      content:
        "We are a passionate team of food enthusiasts committed to sharing delicious and easy-to-follow recipes for all occasions.",
    },
    {
      title: "What do we offer?",
      content:
        "From traditional dishes to modern cuisine, our platform offers a wide range of recipes that suit every palate and skill level.",
    },
    {
      title: "Why choose us?",
      content:
        "We ensure our recipes are tested, easy to understand, and provide nutritional information so you can cook with confidence.",
    },
  ];

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

      {/* Accordion Section  */}
      <div className="max-w-4xl mx-auto p-6">
        {sampleData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => toggleAccordian(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
