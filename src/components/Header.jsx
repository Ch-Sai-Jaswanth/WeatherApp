import React from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-blue-200 p-4 md:h-44">
      <div className="flex justify-center md:justify-start">
        <img src={LOGO_URL} alt="Weather Logo" className="w-20 md:w-44 m-4 rounded-lg" />
      </div>
      <div className="flex justify-center">
        <h1 className="text-3xl md:text-5xl font-bold font-serif m-4 p-2 md:p-16">WEATHER WATCH</h1>
      </div>
      <div className="flex justify-center md:justify-end items-center">
        <ul className="flex flex-col md:flex-row">
          <li className="m-2 md:m-4 px-4 text-lg"><Link to={"/WeatherApp"}>Home</Link></li>
          <li className="m-2 md:m-4 px-4 text-lg"><Link to={"/WeatherApp/about"}>About</Link></li>
          <li className="m-2 md:m-4 px-4 text-lg"><Link to={"/WeatherApp/contact"}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
