import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
          <h1>{props.data.city}</h1>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <FormattedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">{props.data.description}</li>
                <li>
                  Humidity:{" "}
                  <strong>
                    <span id="humidity">{props.data.humidity}</span>%
                  </strong>
                  <span> </span>Wind:{" "}
                  <strong>
                    <span id="wind">{props.data.wind}</span> km/h
                  </strong>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="d-flex">
                <div>
                  <img src={props.data.icon} alt="weather-icon"></img>
                </div>
    
                <div>
                  <WeatherTemperature celsius={props.data.temperature} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}