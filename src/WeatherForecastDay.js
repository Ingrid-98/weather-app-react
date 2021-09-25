import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function weatherForecastDay(props) {
  function maxTempereature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTempereature() {
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
    <div>
      <div className="WeatherForecast-day"> {day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={35} />
      <div className="WeatherForecast-temp">
        {" "}
        <span className="WeatherForecast-temp-max">
          {maxTempereature()}
        </span>{" "}
        <span className="WeatherForecast-temp-min"> {minTempereature()}</span>
      </div>
    </div>
  );
}
