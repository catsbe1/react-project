import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="container">
      <Weather defaultCity="New York" />
      <div className="footer">
        <p className="info-text">
          <a
            href="https://github.com/catsbe1"
            rel="noreferrer"
            target="_blank"
            className="git"
          >
            Open-source code
          </a>{" "}
          by Ana Ribeiro
        </p>
      </div>
    </div>
  );
}

export default App;
