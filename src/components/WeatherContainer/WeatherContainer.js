import React, { useState } from "react";
import "./WeatherContainer.css";

function WeatherContainer() {
  return (
    <div className="weather-container">
      <header>
        <h3>Weather Generator</h3>
        <div>
          <input placeholder="Enter Zip Code" className="search-engine" />
        </div>
      </header>
    </div>
  );
}

export default WeatherContainer;
