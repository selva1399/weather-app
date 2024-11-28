import React from "react";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const Forecast = ({ forecast, location }) => {
  return (
    <div className="container mb-5">
      <div className="container mt-5 mb-4 d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <div className="card card-container-title">
              <div className="card-body">
                <h4 className="card-title">
                  Forecast weather of {location.name}, {location.region},{" "}
                  {location.country}.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {forecast.forecastday.map((data, index) => {
        return ( */}
{/* Accordion */}
<div className="accordion accordion-flush" id="accordionFlushExample">
{forecast.forecastday.map((data, index) => {
  return (
    <div className="accordion-item mb-2 " key={index}>
      {/* Accordion Header */}
      <h2 className="accordion-header" id={`heading-${index}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${index}`}
          aria-expanded="true"
          aria-controls={`collapse-${index}`}
        >
          <div className="d-flex flex-wrap flex-row align-items-center justify-content-between">
            <div className="ps-5 ms-3">
              <h6>Date: {data.date}</h6>
            </div>
            <div className="ps-5 ms-3 d-flex align-items-center">
              <img
                src={data.day.condition.icon}
                style={{ width: "20px", height: "20px" }}
                alt="Forecast"
              />
              <h6 className="ms-2">{data.day.condition.text}</h6>
            </div>
            <div className="ps-5 ms-3">
              <h6>Min Temp: {data.day.mintemp_c}°C</h6>
            </div>
            <div className="ps-5 ms-3">
              <h6>Max Temp: {data.day.maxtemp_c}°C</h6>
            </div>
          </div>
        </button>
      </h2>

      {/* Accordion Body */}
      <div
        id={`collapse-${index}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading-${index}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          {data.hour.map((hourData, hourIndex) => (
            <div className="mb-3" key={hourIndex}>
              <h6 className="m-3">
                Time: {hourData.time} / Temp: {hourData.temp_c}°C /
                <img
                  src={hourData.condition.icon}
                  className="ms-2"
                  alt="Weather"
                  style={{ width: "20px", height: "20px" }}
                />
              </h6>
              <div
                className="progress"
                role="progressbar"
                aria-label="Animated striped example"
                aria-valuenow={hourData.temp_c}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  style={{ width: `${hourData.temp_c}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        );
      })}
    </div>

    </div>
  );
};

export default Forecast;
