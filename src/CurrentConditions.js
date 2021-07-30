import React, { useState } from "react";
import axios from "axios";
import "./CurrentConditions.css";

export default function CurrentConditions(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      feelsLike: response.data.main.feels_like,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentConditions">
        <div className="col-12 conditions-text">
          <div className="card">
            <div className="card-body">
              <span className="current-condit">
                Feels like {""}
                <span className="feels-like celsius-farenheit" id="feels-like">
                  {Math.round(weatherData.feelsLike)}°C
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="col-12 conditions-text">
          <div className="card">
            <div className="card-body">
              <i className="fas fa-temperature-high"></i>
              <span className="current-cond">
                {""} High {""}
                <span className="high-temp celsius-farenheit" id="high-temp">
                  {Math.round(weatherData.maxTemp)}°C
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="col-12 conditions-text">
          <div className="card">
            <div className="card-body">
              <i className="fas fa-temperature-low"></i>
              <span className="current-cond">
                {""} Low {""}
                <span className="low-temp celsius-farenheit" id="low-temp">
                  {Math.round(weatherData.minTemp)}°C
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="col-12 conditions-text">
          <div className="card">
            <div className="card-body">
              <i className="fas fa-water"></i>
              <span className="current-cond">
                {""} Humidity {""}
                <span className="humidity" id="humidity">
                  {weatherData.humidity}%
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="col-12 conditions-text">
          <div className="card">
            <div className="card-body">
              <i className="fas fa-wind"></i>
              <span className="current-cond">
                {""} Wind {""}
                <span className="wind-speed metric-imperial" id="wind-speed">
                  {weatherData.wind}km/h
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a4e6c35b5c3b1332cec44f1b012a008c";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
