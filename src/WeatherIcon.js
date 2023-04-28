import React from "react";
import ReactAnimatedWeather from "react-animated-weather";


export default function WeatherIcon(props) {
    const codemapping = {
      "01d": "CLEAR_DAY",
      "clear-sky-day": "CLEAR_DAY",
      "01n": "CLEAR_NIGHT",
      "02d": "PARTLY_CLOUDY_DAY",
      "few-clouds-day": "PARTLY_CLOUDY_DAY",
      "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
      "02n": "PARTLY_CLOUDY_NIGHT",
      "03d": "CLOUDY",
      "03n": "CLOUDY",
      "04d": "CLOUDY",
      "04n": "CLOUDY",
      "broken-clouds-day": "CLOUDY",
      "09d": "RAIN",
      "rain-day": "RAIN",
      "09n": "RAIN",
      "10d": "RAIN",
      "10n": "RAIN",
      "11d": "RAIN",
      "11n": "RAIN",
      "13d": "SNOW",
      "13n": "SNOW",
      "50d": "FOG",
      "50n": "FOG",
    };
return (
  <ReactAnimatedWeather
    icon={codemapping[props.code]}
    color="#363A3D"
    size={props.size}
    animate={true}
  />
);
}