import React, { useState } from "react";
import App from "./App";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

export default function Main() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [heading, setHeading] = useState(null);
  let [max, setMax] = useState(null);
  let [min, setMin] = useState(null);
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setHeading(response.data.name);
    setMax(response.data.main.temp_max);
    setMin(response.data.main.temp_min);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b0b2f517c80e7ab3164919ae7be38b7&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form className="input-group mb-3" id="search-engin">
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
      <div className="box">
        <div className="row">
          <div className="col-sm-6">
            <br />
            <h1>{heading}</h1>

            <div>
              <ul>
                <li className="card-text">
                  <App />
                </li>{" "}
                <li>{description}</li>
              </ul>
              <br />
              <br />
              <br />
              <div>
                Humidity: <span> {Math.round(humidity)} </span>%
              </div>
              <div>
                Wind: <span> {Math.round(wind)} </span> km/h
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card-body">
              <img alt="icon" src={icon} /> <br />
              <div>
                <span className="now">{Math.round(temperature)}</span>{" "}
                <span className="font"> °C</span>
              </div>
              <br />
              <br />
              <br />
              <div>
                H= <span>{Math.round(max)}</span>°C / L=
                <span>{Math.round(min)}</span>°C
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
