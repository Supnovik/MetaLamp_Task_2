import React from "react";
import "./RadioButtons.scss";

function RadioButtons() {
  return (
    <div className="RadioButtons">
      <div>
        <div>Radio buttons</div>
        <div></div>
      </div>
      <form action="none" className="radio-buttons">
        <input type="radio" name="gender" id="men" />
        <label for="men">
          <span>Мужчина</span>
        </label>

        <input type="radio" name="gender" id="women" />
        <label for="women">
          <span>Женщина</span>
        </label>
      </form>
    </div>
  );
}

export default RadioButtons;
