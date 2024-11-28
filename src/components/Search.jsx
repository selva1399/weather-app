import axios from "axios";
import React, { useEffect, useState } from "react";
import Current from "./Current";

const Search = () => {
  const [city, setCity] = useState();
  const [clickedCity, setClickedCity] = useState();
  const [citySuggestion, setCitySuggestion] = useState([]);

  const [current, setCurrent] = useState();
  const [forecast, setForecast] = useState();
  const [location, setLocation] = useState();

  const autoCompURL =
    "https://api.weatherapi.com/v1/search.json?key=f4c37a4baa034a8299b45754241510&q=";

  const WeatherURL = (city) =>
    `https://api.weatherapi.com/v1/forecast.json?key=f4c37a4baa034a8299b45754241510&q=${city}&days=7&api=no&alerts=no`;

  useEffect(() => {
    if (city && city.length > 3) {
      fetchAutoCompAPI();
    }
  }, [city]);

  const fetchAutoCompAPI = async () => {
    try {
      const response = await axios.get(autoCompURL + city);
      const resp = await response.data;
      console.log("Api call: ", resp);
      const cityData = resp.map((data) => {
        return `${data.name}, ${data.region}, ${data.country}`;
      });
      setCitySuggestion(cityData);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleSelectedCity = (city) => {
    console.log("Selected city: ", city);
    setClickedCity(city);
    setCitySuggestion([]);
  };

  const fetchWeatherAPI = async () => {
    try {
      const response = await axios.get(WeatherURL(clickedCity));
      const resp = await response.data;
      console.log(resp);

      setCurrent(resp.current);
      setForecast(resp.forecast);
      setLocation(resp.location);
      console.log("Current : ", resp.current);
      console.log("Forecast : ", resp.forecast);
      console.log("Location : ", resp.location);
    } catch (error) {
      console.log("WeatherAPI Error : ", error);
    }
  };

  return (
    <div>
      <div className="container-fluid mt-5 w-50 search">
        <div className="d-flex justify-content-center" role="search">
          <input
            className="form-control me-2 rounded-5"
            type="search"
            value={clickedCity}
            placeholder="Search city"
            aria-label="Search"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
          <button
            className="btn btn-search"
            type="submit"
            onClick={fetchWeatherAPI}
          >
            Search
          </button>
        </div>

        {citySuggestion &&
          citySuggestion.map((data, index) => {
            return (
              <div className="container w-50" key={index}>
                <div
                  // key={index}
                  className="suggestion-bar"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleSelectedCity(data)}
                >
                  {data}
                </div>
              </div>
            );
          })}
      </div>
      <div>
        {current && forecast && location && (
          <Current current={current} forecast={forecast} location={location} />
        )}
      </div>
    </div>
  );
};

export default Search;
