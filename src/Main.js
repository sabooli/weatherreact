import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

export default function Main() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    alert(`temp is ${temperature}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b0b2f517c80e7ab3164919ae7be38b7&units=metric`;
    axios.get(url).then(showTemperature);
  }
    return (
    <div className="App">
      <form
        className="input-group mb-3"
        id="search-engin"
        onSubmit={handleSubmit}
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
        >
          Search
        </button>
      </form>
      <div className="box">
        <div className="row">
          <div className="col-sm-6">
            <br />
            <h1>Paris</h1>

            <div>
              <ul>
                <li className="card-text">Sat, 31 Jul</li>{" "}
                <li>{description}</li>
              </ul>
              <br />
              <br />
              <br />
              <div>
                Humidity: <span> {humidity} </span>%
              </div>
              <div>
                Wind: <span> {wind} </span> km/h
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card-body">
              <img alt="icon" src={icon} /> <br />
              <div>
                <span className="now">{temperature} </span>{" "}
                <span className="font"> °C</span>
              </div>
              <br />
              <br />
              <br />
              <div>
                H= <span>{30}</span>°C / L=<span>{21}</span>°C
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
