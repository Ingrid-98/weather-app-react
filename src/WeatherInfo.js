import React from "react";
import FriendlyDate from "./FriendlyDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> 📍{props.data.city}</h1>
      <ul>
        <li>
          <FriendlyDate date={props.data.date} />
        </li>
        <li className="text-capitalize">✨ {props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 ">
          <WeatherIcon code={props.data.icon} size={55} />

          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6 mt-3">
          <ul>
            <li>💦 Humidity: {props.data.humidity}%</li>
            <li>💨 Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
