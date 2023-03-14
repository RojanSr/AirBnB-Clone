import React from "react";

export default function Card() {
  return (
    <div className="card-container container">
      <div className="card">
        <img src="../images/katie-zaferes.png" className="profile-img" />

        <div className="flex">
          <img src="../images/star.png" className="card--star" />
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
