import React, { useState } from "react";
import axios from "axios";
import "./SearchedCity.css";

export default function SearchedCity(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    let weatherIcon = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;
    return (
      <div className="SearchedCity">
        <div className="col-12 city">
          <h1 id="searched-city">{weatherData.city}</h1>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="currentDayAndTime" id="current-day-and-time">
              Thursday 17:05
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 main-temperature">
            <img
              src={weatherIcon}
              className="weather-icon"
              alt={weatherData.description}
              id="current-weather-icon"
            />
            <span className="main-temperature">
              <span className="main-temp celsius-farenheit" id="main-temp">
                {Math.round(weatherData.temperature)} {""}
              </span>
              <span className="celsiusFarenheit">
                <a href="/" className="celsius inactive" id="celsius">
                  {" "}
                  ºC{" "}
                </a>
                {""} | {""}
                <a href="/" className="farenheit" id="farenheit">
                  ºF
                </a>
              </span>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 weather-description">
            <span
              className="weather-description text-capitalize"
              id="weather-description"
            >
              {weatherData.description}
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a4e6c35b5c3b1332cec44f1b012a008c";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
