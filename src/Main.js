import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

export default function Main() {
  return (
    <div className="box">
      <div className="row">
        <div className="col-sm-6">
          <br />
          <h1>Paris</h1>

          <div>
            <ul>
              <li className="card-text">Sat, 31 Jul</li> <li>Clear Sky</li>
            </ul>
            <br />
            <br />
            <br />
            <div>
              Humidity: <span> {67} </span>%
            </div>
            <div>
              Wind: <span> {5} </span> km/h
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card-body">
            <img
              alt="icon"
              src="https://openweathermap.org/img/wn/01d@2x.png"
            />{" "}
            <br />
            <div>
              <span className="now">{25} </span>{" "}
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
  );
}
