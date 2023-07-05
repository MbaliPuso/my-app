import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.time * 1000),
      icon: `http://openweathermap.org/img/wn/${
        response.data.weather[0].icon
      }@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(); 
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "97c2f6a3b34509ac62090edc5d18d949";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (weather.ready) {
    return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input
                        type="search"
                        placeholder="Enter a city.."
                        className="form-control search-input"
                        onChange={updateCity}
                        />
                    </div>
                    <div className="col-3 p-0">
                        <input
                        type="submit"
                        value="Search"
                        className="btn btn-primary w-100"
                        />
                    </div>
                </div>
            </form>
            <WeatherInfo data={weather} />
            <WeatherForecast coordinates={weather.coordinates} city={weather.city}/>
            <footer>
                This project was coded by Mbali Puso and is open-sourced on {" "}
                <a href="https://github.com/MbaliPuso/my-app" target="_blank" rel="noopener noreferrer">GitHub</a>{" "} and hosted on <a href="https://incredible-tartufo-d64346.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a> 
            </footer>
        </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

