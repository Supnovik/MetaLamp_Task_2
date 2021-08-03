import React from "react";
import "./RadioButtons.scss";

function RadioButtons() {
  return (
    <div className="RadioButtons">
      <input type="radio" name="gender" id="men" />
      <label htmlFor="men">
        <span>Мужчина</span>
      </label>

      <input type="radio" name="gender" id="women" />
      <label htmlFor="women">
        <span>Женщина</span>
      </label>
    </div>
  );
}

export default RadioButtons;
