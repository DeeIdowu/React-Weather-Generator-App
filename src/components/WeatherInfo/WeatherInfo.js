import React from "react";
import "./WeatherInfo.css";

function WeatherInfo(props) {
  const { temperature, humidity, description, city } = props.data;
  return (
    <React.Fragment>
      <div>
        <p style={{ fontWeight: "bold" }}>City:</p>
        <p>{city}</p>
      </div>

      <div>
        <p style={{ fontWeight: "bold" }}>Description:</p>
        <p>{description}</p>
      </div>

      <div>
        <p style={{ fontWeight: "bold" }}>Temperature:</p>
        <p>
          {temperature}
          <span className="degree-symbol"></span>C
        </p>
      </div>

      <div>
        <p style={{ fontWeight: "bold" }}>Humidity:</p>
        <p>{humidity}%</p>
      </div>
    </React.Fragment>
  );
}

export default WeatherInfo;
