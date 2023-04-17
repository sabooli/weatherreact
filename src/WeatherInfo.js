import React from "react";
import App from "./App";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props) {
    return (
      <div className="box">
        <div className="row">
          <div className="col-sm-6">
            <br />
            <h1>{props.data.city}</h1>

            <div>
              <ul>
                <li className="card-text">
                  <App />
                </li>
                <li>{props.data.description}</li>
              </ul>
              <br />
              <br />
              <br />
              <div>
                Humidity: <span> {Math.round(props.data.humidity)} </span>%
              </div>
              <div>
                Wind: <span> {Math.round(props.data.wind)} </span> km/h
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card-body mt-4">
              <WeatherIcon code = {props.data.icon} />
              <br />
              <div>
                <span className="now">
                  {Math.round(props.data.temperature)}
                </span>
                <span className="font"> °C</span>
              </div>
              <br />
              <br />
              <br />
              <div>
                H= <span>{Math.round(props.data.max)}</span>°C / L=
                <span>{Math.round(props.data.min)}</span>°C
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}