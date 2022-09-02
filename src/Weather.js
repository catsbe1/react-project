import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: "Wednesday, March 1, 07:00h",
      description: response.data.weather[0].description,
      iconUrl: "",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <form>
          <input type="Search" />
          <input type="submit" />
        </form>
        <h1>{weatherData.city}</h1>
        <h2>{weatherData.date}</h2>
        <p>{Math.round(weatherData.temperature)}</p>
        <img src={weatherData.iconUrl} alt="icon" />
        <h3 className="text-capitalize">{weatherData.description}</h3>
        <h4>16/23</h4>
        <ul>
          <li>Wind: {weatherData.wind} km/h</li>
          <li>precipitation</li>
          <li>Humidity: {weatherData.humidity}%</li>
        </ul>
      </div>
    );
  } else {
    const apiKey = "094780c710fa4efd669f0df8c3991927";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
