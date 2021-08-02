import React from "react";
import "./Buttons.scss";

function Buttons({ type, text }) {
  function renderSwitch(param) {
    switch (param) {
      case "full":
        return <button className="full">{text}</button>;
      case "border":
        return <button className="border">{text}</button>;
      case "none":
        return <button className="none">{text}</button>;
      case "long":
        return <button className="long">{text}</button>;
      default:
        return <div></div>;
    }
  }
  return <div className="Buttons">{renderSwitch(type)}</div>;
}
export default Buttons;
