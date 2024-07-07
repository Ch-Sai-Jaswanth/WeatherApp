import React from "react";
import { useState } from "react";
import { API_KEY } from "../utils/constants";
import Swal from "sweetalert2";

const Body = () => {
  const [city, setCity] = useState("");
  const [weat, setWeat] = useState("");
  const [warning, setWarning] = useState("");

  const fetchWeather = async () => {
    if (city.trim() === "") {
      Swal.fire({
        title: "Error",
        text: "Please enter a city name!!",
        icon: "warning"
      });
      return;
    }
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const json = await data.json();
      console.log(json);
      setWeat(json);
    } catch (error) {
      setWarning("City not found");
    }
  };

  return (
    <div className="flex m-2 items-center justify-center min-h-screen bg-orange-200 overflow-hidden">
      <div className="w-full max-w-md bg-gray-200 border border-green-200 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
        <input
          type="text"
          className="border border-gray-400 px-4 py-2 w-full mb-4 rounded-lg focus:outline-none"
          placeholder="Enter your City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600"
          onClick={fetchWeather}
        >
          Search
        </button>

        {weat && (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold">{weat.name}</h2>
            <h2 className="text-lg">{Math.round(weat.main.temp - 273.15)}°C</h2>
            <p className="mt-2">{weat.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
