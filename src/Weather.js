import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            />{" "}
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn " />
          </div>
        </div>
      </form>
      <h1>Tokyo</h1>
      <ul>
        <li>Thursday 16:00</li>
        <li>Rain</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
            alt="rain"
          />
          <span className="temperature">19</span>{" "}
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 90%</li>
            <li>Humidity: 99%</li>
            <li>Wind: 6km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
