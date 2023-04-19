import React from "react";
import WeatherIcon from "./WeatherIcon";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherForecastDay(props) {
  function day() {
    let days = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];
    let date = new Date(props.data.time * 1000);
    let day = days[date.getDay()];
    return day;
  }
  return (
    <div>
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{day()}</div>{" "}            
            <WeatherIcon code={props.data.condition.icon} size={40} />{" "}
            <div className="WeatherForecast-temperatures">
              {" "}
              <span className="WeatherForecast-temperatures-max">
                {Math.round(props.data.temperature.maximum)}°
              </span>
              <span className="WeatherForecast-temperatures-min">
                {Math.round(props.data.temperature.minimum)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
