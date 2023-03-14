import React from "react";
import PhotoGrid from "../images/photo-grid.png";

export default function Hero() {
  return (
    <div className="hero container">
      <img src={PhotoGrid} alt="Photo Grid" className="photo-grid" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </div>
  );
}
