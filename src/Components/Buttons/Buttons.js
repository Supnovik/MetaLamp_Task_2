import React from "react";
import "./Buttons.scss";

function Buttons({ Type }) {
  return (
    <div className="Buttons">
      <div>
        <div>Buttons</div>
      </div>
      <form action="none">
        <button className="full">click me</button>
        <button className="border">click me</button>
        <button className="none">click me</button>
        <button className="go-to-pay">Перейти к оплате</button>
      </form>
    </div>
  );
}

export default Buttons;
