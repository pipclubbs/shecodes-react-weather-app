import React, { useState } from "react";
import axios from "axios";
import "./FiveDay.css";

export default function FiveDay() {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      dayOneIcon: response.data.list[1].weather[0].icon,
      dayOneTemp: response.data.list[1].main.temp,
      dayOneDescription: response.data.list[1].weather[0].description,

      dayTwoIcon: response.data.list[2].weather[0].icon,
      dayTwoTemp: response.data.list[2].main.temp,
      dayTwoDescription: response.data.list[2].weather[0].description,

      dayThreeIcon: response.data.list[3].weather[0].icon,
      dayThreeTemp: response.data.list[3].main.temp,
      dayThreeDescription: response.data.list[3].weather[0].description,

      dayFourIcon: response.data.list[4].weather[0].icon,
      dayFourTemp: response.data.list[4].main.temp,
      dayFourDescription: response.data.list[4].weather[0].description,

      dayFiveIcon: response.data.list[5].weather[0].icon,
      dayFiveTemp: response.data.list[5].main.temp,
      dayFiveDescription: response.data.list[5].weather[0].description,
    });
    setReady(true);
  }

  if (ready) {
    let iconOne = `http://openweathermap.org/img/wn/${weatherData.dayOneIcon}@2x.png`;
    let iconTwo = `http://openweathermap.org/img/wn/${weatherData.dayTwoIcon}@2x.png`;
    let iconThree = `http://openweathermap.org/img/wn/${weatherData.dayThreeIcon}@2x.png`;
    let iconFour = `http://openweathermap.org/img/wn/${weatherData.dayFourIcon}@2x.png`;
    let iconFive = `http://openweathermap.org/img/wn/${weatherData.dayFiveIcon}@2x.png`;

    return (
      <div className="FiveDay">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <span className="five-day" id="dayOneDay">
                  {weatherData.dayOne}
                </span>
                <img
                  src={iconOne}
                  className="weather-icon"
                  id="dayOneIcon"
                  alt={weatherData.dayOneDescription}
                />
                <span className="five-day celsius-farenheit" id="dayOneTemp">
                  {Math.round(weatherData.dayOneTemp)}°C
                </span>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <span className="five-day" id="dayTwoDay">
                  {weatherData.dayTwo}
                </span>
                <img
                  src={iconTwo}
                  className="weather-icon"
                  id="dayTwoIcon"
                  alt={weatherData.dayTwoDescription}
                />
                <span className="five-day celsius-farenheit" id="dayTwoTemp">
                  {Math.round(weatherData.dayTwoTemp)}°C
                </span>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <span className="five-day" id="dayThreeDay">
                  {weatherData.dayThree}
                </span>
                <img
                  src={iconThree}
                  className="weather-icon"
                  id="dayThreeIcon"
                  alt={weatherData.dayThreeDescription}
                />
                <span className="five-day celsius-farenheit" id="dayThreeTemp">
                  {Math.round(weatherData.dayThreeTemp)}°C
                </span>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <span className="five-day" id="dayFourDay">
                  {weatherData.dayFour}
                </span>
                <img
                  src={iconFour}
                  className="weather-icon"
                  id="dayFourIcon"
                  alt={weatherData.dayFourDescription}
                />
                <span className="five-day celsius-farenheit" id="dayFourTemp">
                  {Math.round(weatherData.dayFourTemp)}°C
                </span>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <span className="five-day" id="dayFiveDay">
                  {weatherData.dayFive}
                </span>
                <img
                  src={iconFive}
                  className="weather-icon"
                  id="dayFiveIcon"
                  alt={weatherData.dayFiveDescription}
                />
                <span className="five-day celsius-farenheit" id="dayFiveTemp">
                  {Math.round(weatherData.dayFiveTemp)}°C
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "a4e6c35b5c3b1332cec44f1b012a008c";
    let city = "london";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
