import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  console.log(props.data);
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="forecast">
      <div className="day">{day()}</div>
      <div className="icon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="dailyTemp">
        {minTemp()}/{maxTemp()}
      </div>
    </div>
  );
}
