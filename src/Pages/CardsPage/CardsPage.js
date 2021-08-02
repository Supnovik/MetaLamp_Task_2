import React from "react";
import "./CardsPage.scss";
import logo from "../../img/Group.png";
import FindNubers from "../../Cards/FindNumbers/FindNumbers";
import Registration from "../../Cards/Registration/Registration";
import Login from "../../Cards/Login/Login";
import Reserve from "../../Cards/Reserve/Reserve";

function CardsPage() {
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
    </div>
  );
}

export default CardsPage;
