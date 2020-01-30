import React, { useState } from "react";
import "./WeatherContainer.css";

function WeatherContainer() {
  const [searchQuery, setSearchQuery] = useState();

  function updateSearchQuery(event) {
    setSearchQuery(event.target.value);
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
          />
        </div>
      </header>
    </div>
  );
}

export default WeatherContainer;
