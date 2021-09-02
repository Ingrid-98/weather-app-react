import React from "react";
import "./Weather";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/ingrid-opdebeeck-1b1b11148/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Ingrid Opdebeeck
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/Ingrid-98/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
