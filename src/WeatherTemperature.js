import React, { useState } from "react";
import "./index.css";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celcius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <span className="now">{Math.round(props.celcius)}</span>
        <span className="font">
          {" "}
          °C |
          <a href="/" className="link" onClick={convertToFahrenheit}>
            {" "}
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="now">{Math.round((props.celcius * 9) / 5 + 32)}</span>
        <span className="font">
          {" "}
          <a href="/" className="link" onClick={convertToCelcius}>
            {" "}
            °C{" "}
          </a>
          | °F{" "}
        </span>
      </div>
    );
  }
}
