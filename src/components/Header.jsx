import { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { CgMenuCake } from "react-icons/cg";
import { RiCloseLargeLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-gray-100 shadow-md fixed top-0 left-0 z-50">
      <div className="w-full max-w-7xl mx-auto  flex justify-between items-center px-6 py-3">
        <div>
          <img
            className="w-24 cursor-pointer"
            src="https://e7.pngegg.com/pngimages/415/27/png-clipart-fruit-logo-food-recipe-business-seasoning-ingredients-natural-foods-dried-fruit.png"
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
        {/* Desktop menu */}
        <ul className="hidden md:flex items-center space-x-6">
          <Link to={"/"}>
            <li className=" text-pink-500 hover:text-green-400 text-xl cursor-pointer ">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className=" text-pink-500 hover:text-green-400 text-xl cursor-pointer ">
              About
            </li>
          </Link>
          <Link to={"/contact"}>
            <li className=" text-pink-500 hover:text-green-400 text-xl cursor-pointer ">
              Contact
            </li>
          </Link>
          <Link to={"/recipes"}>
            <li className=" text-pink-500 hover:text-green-400 text-xl cursor-pointer ">
              Recipes
            </li>
          </Link>
        </ul>

        {/* Mobile menu icon  */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <RiCloseLargeLine size={30} /> : <CgMenuCake size={30} />}
        </div>
      </div>

      {/* Mobile Menu  */}
      {menuOpen && (
        <div className=" md:hidden w-full bg-gray-100 shadow-md px-4 pb-4 pt-2">
          <ul className=" flex flex-col items-center space-y-4">
            <Link to={"/"}>
              <li
                className="m-4 p-4 text-pink-500 hover:text-sky-400 text-xl cursor-pointer "
                onClick={toggleMenu}
              >
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              <li
                className="m-4 p-4 text-pink-500 hover:text-sky-400 text-xl cursor-pointer "
                onClick={toggleMenu}
              >
                About
              </li>
            </Link>
            <Link to={"/contact"}>
              <li
                className="m-4 p-4 text-pink-500 hover:text-sky-400 text-xl cursor-pointer "
                onClick={toggleMenu}
              >
                Contact
              </li>
            </Link>
            <Link to={"/recipes"}>
              <li
                className=" text-pink-500 hover:text-green-400 text-xl cursor-pointer "
                onClick={toggleMenu}
              >
                Recipes
              </li>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
