import React from "react";
import "./Subscription.scss";

function Subscription() {
  return (
    <div className="Subscription">
      <div>
        <div>Subscription Text Field</div>
        <div></div>
      </div>
      <form action="none">
        <input type="text" placeholder="Email"></input>
        <button className="arrow-button" />
      </form>
    </div>
  );
}

export default Subscription;
