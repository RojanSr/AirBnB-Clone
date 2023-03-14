import React from "react";
import AirbnbLogo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="container">
          <a href="../index.html">
            <img src={AirbnbLogo} alt="AirBnB Logo" className="airbnb-logo" />
          </a>
        </nav>
      </header>
    </>
  );
}
