import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="container">
      <Weather defaultCity="New York" />
    </div>
  );
}

export default App;
