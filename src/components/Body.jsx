import React, { useState } from "react";
import { API_KEY } from "../utils/constants";
import Swal from "sweetalert2";

const Body = () => {
  const [city, setCity] = useState("");
  const [weat, setWeat] = useState("");

  const fetchWeather = async () => {
    if (city.trim() === "") {
      Swal.fire({
        title: "Error",
        text: "Please enter a city name!",
        icon: "warning"
      });
      return;
    }
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await response.json();
      
      if (data.cod !== 200) {
        Swal.fire({
          title: "City not found",
          text: "Please enter a valid city name.",
          icon: "error"
        });
        return;
      }

      setWeat(data);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again later.",
        icon: "error"
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-4">
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-lg p-6">
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600 transition duration-300"
          onClick={fetchWeather}
        >
          Search
        </button>

        {weat && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">{weat.name}</h2>
            <h2 className="text-xl text-gray-600">
              {Math.round(weat.main.temp - 273.15)}°C
            </h2>
            <p className="mt-2 text-gray-500 capitalize">
              {weat.weather[0].description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
