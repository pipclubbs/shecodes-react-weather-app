import React, { useState } from "react";
import "./App.css";
import SearchedCity from "./SearchedCity";
import CurrentConditions from "./CurrentConditions";

import FiveDay from "./FiveDay";
import Footer from "./Footer";

export default function App() {
  const [city, setCity] = useState("London");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <div className="container shadow p-3 mb-5 bg-white">
        <div className="row">
          <div className="col-6">
            <SearchedCity city={city} />
            <div className="row shadow p-3 mb-5 rounded current-conditions">
              <CurrentConditions city={city} />
            </div>
          </div>

          <div className="col-6">
            <div className="SearchForm">
              <div className="col-12">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="city-search"
                      placeholder="Enter a city..."
                      autoFocus="on"
                      onChange={handleCityChange}
                    />
                    <ul className="reset-current">
                      <li>
                        <a href="/">
                          <small id="reset" className="text-muted">
                            RESET
                          </small>
                        </a>
                      </li>
                      <li>
                        <small id="carat" className="text-muted">
                          {""} | {""}
                        </small>
                      </li>
                      <li>
                        <a href="/">
                          <small id="current-loc" className="text-muted">
                            CURRENT
                          </small>
                        </a>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 shadow p-3 mb-5 rounded five-day-forecast">
              <div className="row">
                <div className="col-12">
                  <h2>Five-day forecast</h2>
                </div>
              </div>
              <FiveDay city={city} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
