import React from "react";
import "./Toggle.scss";

function Toggle() {
  return (
    <label className="checkbox">
      <input type="checkbox"></input>
      <span>
        <div className="checkbox-circle" />
        Получать спецпредложения
      </span>
    </label>
  );
}

export default Toggle;
