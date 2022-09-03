import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Conversion from "./Conversion";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <h2>
        <FormattedDate date={props.data.date} />
      </h2>
      <Conversion celsius={props.data.temperature} />
      <WeatherIcon code={props.data.icon} />
      <h3 className="text-capitalize">{props.data.description}</h3>
      <h4>16/23</h4>
      <ul>
        <li>Wind: {props.data.wind} km/h</li>
        <li>precipitation</li>
        <li>Humidity: {props.data.humidity}%</li>
      </ul>
    </div>
  );
}
