import React from "react";
import "./Buttons.scss";

function Buttons({ Type }) {
  return (
    <div>
      <button className="full">click me</button>
      <button className="border">click me</button>
      <button className="none">click me</button>
      <button className="go-to-pay">Перейти к оплате</button>
    </div>
  );
}

export default Buttons;
