import React from "react";
import "./RoomCard.scss";
import RateButton from "../../Components/RateButton/RateButton";

export default function RoomCard({
  roomNumber,
  lux,
  stars,
  dayPrice,
  reviews,
  img,
}) {
  return (
    <div className="RoomCard">
      <div className="room-img">
        <img src={img} alt="" />
        <div className="circles">
          <div className="active"></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="RoomCard-container">
        <div className="title">
          <div>
            <h2>№</h2>
            <h1> {roomNumber}</h1>
            {lux ? <p>люкс</p> : <></>}
          </div>
          <p>
            <span>{dayPrice}₽</span> в сутки
          </p>
        </div>
        <div className="outline" />
        <div className="reviews">
          <RateButton stars={stars} />
          <p>
            <span>{reviews}</span> отзывов
          </p>
        </div>
      </div>
    </div>
  );
}
