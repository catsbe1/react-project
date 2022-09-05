import React, { useState } from "react";
import "./Conversion.css";

export default function Conversion(props) {
  const [unit, setUnit] = useState("celsius");
  let fahrenheit = (props.celsius * 9) / 5 + 32;
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div>
        <span className="temp">{Math.round(props.celsius)}°</span>
        <span className="convert">
          C |
          <a href="/" onClick={convertFahrenheit} className="fahrenheit">
            F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temp">{Math.round(fahrenheit)}°</span>
        <span className="convert">
          <a href="/" onClick={convertCelsius} className="celsius">
            C
          </a>{" "}
          | F
        </span>
      </div>
    );
  }
}
