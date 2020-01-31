import React from "react";
import "./WeatherInfo.css";

function WeatherInfo(props) {
  const { temperature, humidity, description, city } = props.data;
  return (
    <React.Fragment>
      <div>
        <p>City:</p>
        <p>{city}</p>
      </div>
      <br></br>
      <div>
        <p>Description:</p>
        <p>{description}</p>
      </div>
      <br></br>
      <div>
        <p>Humidity:</p>
        <p>{humidity}</p>
      </div>
      <br></br>
      <div>
        <p>Temperature:</p>
        <p>{temperature}</p>
      </div>
    </React.Fragment>
  );
}

export default WeatherInfo;
