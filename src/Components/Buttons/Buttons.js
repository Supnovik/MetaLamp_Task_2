import React from "react";
import "./Buttons.scss";

function Buttons({ type, text, isActive }) {
  var active = "";
  if (isActive) active = "active";
  function renderSwitch(param) {
    switch (param) {
      case "full":
        return <button className={"full " + active}>{text}</button>;
      case "border":
        return <button className={"border " + active}>{text}</button>;
      case "none":
        return <button className={"none " + active}>{text}</button>;
      case "long":
        return <button className={"long " + active}>{text}</button>;
      default:
        return <div></div>;
    }
  }
  return <div className="Buttons">{renderSwitch(type)}</div>;
}
export default Buttons;
