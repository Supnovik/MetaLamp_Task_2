import React from "react";
import "./Buttons.scss";

function Buttons({ type, text }) {
  if (type === "full") return <button className="full">{text}</button>;
  if (type === "border") return <button className="border">{text}</button>;
  if (type === "none") return <button className="none">{text}</button>;
  if (type === "long") return <button className="long">{text}</button>;
}

export default Buttons;
