import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

export default function Main() {
  let [city, setCity] = useState("Paris");
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showTemperature(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
    });
  }
  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b0b2f517c80e7ab3164919ae7be38b7&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div>
        <form
          onSubmit={handleSubmit}
          className="input-group mb-3"
          id="search-engin"
        >
          <input
            type="text"
            className="form-control"
            placeholder="City"
            aria-label="City"
            aria-describedby="button-addon2"
            id="city-input"
            autoComplete="off"
            onChange={updateCity}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={handleSubmit}
          >
            Search
          </button>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
