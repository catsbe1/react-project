import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  let background = "card";

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      timezone: response.data.timezone,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  let time = new Date();
  let localTimeOffset = time.getTimezoneOffset() * 60;
  time.setSeconds(time.getSeconds() + localTimeOffset + weatherData.timezone);
  let hours = time.getHours();
  if (hours >= 20 && hours < 24) {
    background = "card night";
  } else if (hours >= 5 && hours < 12) {
    background = "card morning";
  } else if (hours >= 12 && hours < 17) {
    background = "card afternoon";
  } else if (hours >= 17 && hours < 20) {
    background = "card evening";
  } else if (hours >= 0 && hours < 5) {
    background = "card night";
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "094780c710fa4efd669f0df8c3991927";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function getCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className={background}>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="Search"
              autoFocus="on"
              onChange={getCity}
              className="SearchInput"
            />
            <input type="submit" value="🔎" className="submit" />
          </form>
          <WeatherInfo data={weatherData} />
          <Forecast coord={weatherData.coord} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
