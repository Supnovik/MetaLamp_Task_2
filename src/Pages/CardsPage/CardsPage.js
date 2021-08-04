import React, { useState } from "react";
import "./CardsPage.scss";
import logo from "../../img/Group.png";
import FindNubers from "../../Cards/FindNumbers/FindNumbers";
import Registration from "../../Cards/Registration/Registration";
import Login from "../../Cards/Login/Login";
import Reserve from "../../Cards/Reserve/Reserve";
import Calendar from "../../Cards/Calendar/Calendar";
import RoomCard from "../../Cards/RoomCard/RoomCard";
import room888 from "../../img/rooms/room_888.jpg";
import room840 from "../../img/rooms/room_840.jpg";

function CardsPage() {
  const today = new Date("2019-08-08");
  var [firstday, setFirstday] = useState(new Date("2019-08-19"));
  var [lastday, setLastday] = useState(new Date("2019-08-23"));

  return (
    <div className="CardsPage">
      <img src={logo} alt="" className="logo" />
      <div
        style={{
          position: "absolute",
          left: "140px",
          top: "150px",
        }}
      >
        <FindNubers />
      </div>
      <div
        style={{
          position: "absolute",
          left: "140px",
          top: "564px",
        }}
      >
        <Registration />
      </div>
      <div
        style={{
          position: "absolute",
          left: "560px",
          top: "152px",
        }}
      >
        <Reserve />
      </div>
      <div
        style={{
          position: "absolute",
          left: "560px",
          top: "704px",
        }}
      >
        <Login />
      </div>
      <div
        style={{
          position: "absolute",
          left: "980px",
          top: "150px",
        }}
      >
        <Calendar
          today={today}
          firstday={firstday}
          lastday={lastday}
          setFirstday={setFirstday}
          setLastday={setLastday}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: "980px",
          top: "559px",
        }}
      >
        <RoomCard
          roomNumber={888}
          lux={true}
          stars={5}
          dayPrice={9990}
          reviews={145}
          img={room888}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: "980px",
          top: "856px",
        }}
      >
        <RoomCard
          roomNumber={840}
          lux={false}
          stars={4}
          dayPrice={9990}
          reviews={65}
          img={room840}
        />
      </div>
    </div>
  );
}

export default CardsPage;
