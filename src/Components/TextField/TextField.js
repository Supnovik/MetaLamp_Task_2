import React from "react";
import "./TextField.scss";

function TextField({ type, text }) {
  return (
    <div className="TextField">
      <input type={type} placeholder={text} className="input-box"></input>
    </div>
  );
}

export default TextField;
