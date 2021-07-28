import React from "react";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <div className="col-12">
        <form id="search-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="city-search"
              placeholder="Search..."
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
  );
}
