import React from "react";
import WeatherLogo from '../assets/cloudy.png';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid p-2 ms-5">
        <a className="navbar-brand text-light" href="#">
          <span>
            <img src={WeatherLogo} alt="Weather Logo" style={{ height: "40px", width: "40px"}} />
          </span>
          Weather App
        </a>
      </div>
    </nav>
  );
};


export default Header;