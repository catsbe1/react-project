import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Conversion from "./Conversion";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <h5>
        <FormattedDate date={props.data.date} />
      </h5>
      <Conversion celsius={props.data.temperature} />
      <WeatherIcon code={props.data.icon} />
      <h3 className="text-capitalize">{props.data.description}</h3>
      <ul>
        <li>Wind: {props.data.wind} km/h</li>
        <li>Humidity: {props.data.humidity}%</li>
      </ul>
    </div>
  );
}
