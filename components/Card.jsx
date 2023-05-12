import React from "react";
import Star from "../images/star.png";

export default function Card(props) {
  let badgeText;

  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card" id="card">
      {badgeText && <div className="card--status">{badgeText}</div>}
      <img src={"../images/" + props.item.coverImg} className="profile-img" />

      <div className="flex">
        <img src={Star} className="card--star" />
        <span className="card--rating">{props.item.stats.rating}</span>
        <span className="card--location">
          ({props.item.stats.reviewCount}) · {props.item.location}
        </span>
      </div>
      <p>{props.item.title}</p>

      <p>
        <span style={{ fontWeight: "600" }}>From ${props.item.price}</span> /
        person
      </p>
    </div>
  );
}
