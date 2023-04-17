import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App() {
 let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let now = new Date;
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
 //