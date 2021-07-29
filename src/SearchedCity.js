import React, { useState } from "react";
import axios from "axios";
import "./SearchedCity.css";

export default function SearchedCity() {
const [ready, setReady] = useState(false);
const [temperature, setTemperature] = useState(null);

function handleResponse(response) {
  console.log(response.data.main);
    setTemperature(Math.round(response.data.main.temp));
    setReady(true);
}

if (ready) {
  return (
    <div className="SearchedCity">
      <div className="col-12 city">
        <h1 id="searched-city">London</h1>
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
            src="images/sunny.png"
            className="weather-icon"
            alt=""
            id="current-weather-icon"
          />
          <span className="main-temperature">
            <span className="main-temp celsius-farenheit" id="main-temp">
              {temperature} {""}
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
          <span className="weather-description" id="weather-description">
            Sunny
          </span>
        </div>
      </div>
    </div>
  );} else {
    const apiKey = "a4e6c35b5c3b1332cec44f1b012a008c";
    let city = "new york";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
    axios.get(apiUrl).then(handleResponse);

return "Loading...";
  }
}
