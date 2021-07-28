import React from "react";

export default function CurrentConditions() {
  return (
    <div className="CurrentConditions">
      <div className="col-12 conditions-text">
        <div className="card">
          <div className="card-body">
            <span className="current-condit">
              Feels like {""}
              <span className="feels-like celsius-farenheit" id="feels-like">
                16
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
              High {""}
              <span className="high-temp celsius-farenheit" id="high-temp">
                21
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
              Low {""}
              <span className="low-temp celsius-farenheit" id="low-temp">
                14
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
              Humidity {""}
              <span className="humidity" id="humidity">
                75%
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
              Wind {""}
              <span className="wind-speed metric-imperial" id="wind-speed">
                15
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
