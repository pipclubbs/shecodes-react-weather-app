import React from "react";

export default function FiveDay() {
    return (
    <div className="FiveDay">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <span className="five-day" id="dayOneDay">
                Friday
              </span>
              <img
                src="images/sunny.png"
                className="weather-icon"
                id="dayOneIcon"
                alt="weather icon"
              />
              <span className="five-day celsius-farenheit" id="dayOneTemp">
                19
              </span>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <span className="five-day" id="dayTwoDay">
                Saturday
              </span>
              <img
                src="images/sunny.png"
                className="weather-icon"
                id="dayTwoIcon"
                alt="weather icon"
              />
              <span className="five-day celsius-farenheit" id="dayTwoTemp">
                18
              </span>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <span className="five-day" id="dayThreeDay">
                Sunday
              </span>
              <img
                src="images/sunny.png"
                className="weather-icon"
                id="dayThreeIcon"
                alt="weather icon"
              />
              <span className="five-day celsius-farenheit" id="dayThreeTemp">
                20
              </span>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <span className="five-day" id="dayFourDay">
                Monday
              </span>
              <img
                src="images/sunny.png"
                className="weather-icon"
                id="dayFourIcon"
                alt="weather icon"
              />
              <span className="five-day celsius-farenheit" id="dayFourTemp">
                19
              </span>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <span className="five-day" id="dayFiveDay">
                Tuesday
              </span>
              <img
                src="images/sunny.png"
                className="weather-icon"
                id="dayFiveIcon"
                alt="weather icon"
              />
              <span className="five-day celsius-farenheit" id="dayFiveTemp">
                19
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
