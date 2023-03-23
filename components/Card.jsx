import React from "react";
import CardProfile from "../images/katie-zaferes.png";
import Star from "../images/star.png";

export default function Card() {
  return (
    <div className="card-container container">
      <div className="card">
        <img src={CardProfile} className="profile-img" />

        <div className="flex">
          <img src={Star} className="card--star" />
          <span className="card--rating">5.0</span>
          <span className="card--location">(6) · USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>

        <p>
          <span style={{ fontWeight: "600" }}>From $136</span> / person
        </p>
      </div>
    </div>
  );
}
