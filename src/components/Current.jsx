import React from "react";
import Forecast from "./Forecast";

const Current = ({ current, forecast, location }) => {
  return (
    <div className="container-fluid ">
      <div className="container mt-5 d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <div className="card card-container-title">
              <div className="card-body">
                <h4 className="card-title">
                  Current weather of {location.name}, {location.region}, {location.country}.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container card-top mt-3">
        <div className="row g-2">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-body">
                <img className="card-img-top me-3" src={current.condition.icon} alt="Current Weather Icon" />
                <h5 className="card-title">{current.condition.text}</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Temp(in c): {current.temp_c}°C</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Temp(in f): {current.temp_f}°F</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Humidity: {current.humidity}</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Wind Degree: {current.wind_degree}</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Wind Dir: {current.wind_dir}</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Wind Speed(kph): {current.wind_kph}</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Wind Speed(mph): {current.wind_mph}</h5>
              </div>
            </div>
          </div>

        </div>
      </div>


      <Forecast forecast={forecast} location={location} />
    </div>
  );
};

export default Current;
