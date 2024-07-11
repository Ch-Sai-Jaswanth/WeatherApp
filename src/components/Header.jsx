import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-blue-500 to-green-500 p-6 md:h-44 shadow-lg p-6 md:h-44 shadow-lg">
      <div className="flex justify-center md:justify-start">
        <img src={LOGO_URL} alt="Weather Logo" className="w-20 md:w-44 m-4 rounded-lg border-2 border-white shadow-md" />
      </div>
      <div className="flex justify-center">
        <h1 className="text-3xl md:text-5xl font-bold font-serif m-4 p-2 md:p-16 text-white tracking-wide">
          WEATHER WATCH
        </h1>
      </div>
      <div className="flex justify-center md:justify-end items-center">
        <ul className="flex flex-col md:flex-row">
          <li className="m-2 md:m-4 px-4 text-lg text-white hover:text-blue-800 transition duration-300">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="m-2 md:m-4 px-4 text-lg text-white hover:text-blue-800 transition duration-300">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="m-2 md:m-4 px-4 text-lg text-white hover:text-blue-800 transition duration-300">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
