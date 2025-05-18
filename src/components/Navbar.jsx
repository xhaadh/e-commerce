import React from "react";
import Button from "./Button";
import Menu from "../assets/menu.svg"
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">

      <div className="text-2xl font-bold text-orange-600 cursor-pointer">your logo</div>

      <ul className="hidden md:flex gap-8 text-gray-700">
        <li className="cursor-pointer hover:text-orange-600 transition-colors">Members Area</li>
        <li className="cursor-pointer hover:text-orange-600 transition-colors">What's Included</li>
        <li className="cursor-pointer hover:text-orange-600 transition-colors">Academy</li>
        <li className="cursor-pointer hover:text-orange-600 transition-colors">Resource</li>
        <li className="cursor-pointer hover:text-orange-600 transition-colors">Help Center</li>
      </ul>

      <div className="hidden md:flex">
        <Button
        type="submit"
        title="Login"
        to="/login"
        />
      </div>

      {/* Hamburger menu icon (for mobile) */}
      <div className="md:hidden">
        <IoIosMenu className="text-orange-600 w-8 h-8 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
