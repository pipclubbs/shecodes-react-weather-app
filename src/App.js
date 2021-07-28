import "./App.css";
import SearchedCity from "./SearchedCity";
import CurrentConditions from "./CurrentConditions";
import SearchForm from "./SearchForm";
import FiveDay from "./FiveDay";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container shadow p-3 mb-5 bg-white">
        <div className="row">
          <div className="col-6">
            <SearchedCity />
            <div className="row shadow p-3 mb-5 rounded current-conditions">
              <CurrentConditions />
            </div>
          </div>

          <div className="col-6">
            <SearchForm />
            <div className="col-12 shadow p-3 mb-5 rounded five-day-forecast">
              <div className="row">
                <div className="col-12">
                  <h2>Five-day forecast</h2>
                </div>
              </div>
              <FiveDay />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
