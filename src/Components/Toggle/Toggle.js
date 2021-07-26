import React from "react";
import "./Toggle.scss";

function Toggle() {
  return (
    <label className="toggle-checkbox">
      <input type="checkbox"></input>
      <span>
        <div className="toggle-checkbox-circle" />
        Получать спецпредложения
      </span>
    </label>
  );
}

export default Toggle;
