import React from "react";
import "./SearchedCity.css";

export default function SearchedCity() {
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
              20 {""}
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
  );
}
