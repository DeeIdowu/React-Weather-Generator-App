import React, { useState } from "react";
import "./WeatherContainer.css";

function WeatherContainer() {
  const API_KEY = "6f5f2082b4fd44b3747c6ac39562862d";
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherData, setWeatherData] = useState({
    temperature: null,
    humidity: null,
    description: null,
    city: null
  });

  const [isValidZipCode, setIsValidZipCode] = useState(true);

  function updateSearchQuery(event) {
    let zipCode = event.target.value;
    let isValid = validateZipCode(zipCode);
    setSearchQuery(zipCode);

    if (isValid || zipCode === "" || isValid.length === 5) {
      setIsValidZipCode(true);
    } else {
      setIsValidZipCode(false);
    }
    setSearchQuery(event.target.value);
  }

  function validateZipCode(zipCode) {
    let regex = /[0-9]{5}/;
    return regex.test(zipCode);
  }

  function getWeatherData() {
    //obtain data from api
  }

  return (
    <div className="weather-container">
      <header className="weather-header">
        <h3>Weather Generator</h3>
        <div>
          <input
            placeholder="Enter Zip Code"
            className="search-engine"
            onChange={updateSearchQuery}
            maxLength="5"
          />
          <button onClick={getWeatherData} className="material-icons">
            search
          </button>
        </div>
      </header>
      <p className="error">{isValidZipCode ? "" : "*Invalid Zip Code*"}</p>
      <div className="weather-info">
        {weatherData.temperature === null ? (
          <p>
            No Weather To Display
            <i className="material-icons">wb_sunny</i>
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default WeatherContainer;
