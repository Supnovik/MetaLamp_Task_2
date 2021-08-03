import React, { useState } from "react";
import "./CardsPage.scss";
import logo from "../../img/Group.png";
import FindNubers from "../../Cards/FindNumbers/FindNumbers";
import Registration from "../../Cards/Registration/Registration";
import Login from "../../Cards/Login/Login";
import Reserve from "../../Cards/Reserve/Reserve";
import Calendar from "../../Cards/Calendar/Calendar";

function CardsPage() {
  const today = new Date("2019-08-08T03:24:00");
  var [firstday, setFirstday] = useState(new Date("2019-08-19T03:24:00"));
  var [lastday, setLastday] = useState(new Date("2019-08-23T03:24:00"));

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
    </div>
  );
}

export default CardsPage;
