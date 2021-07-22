import React from "react";
import "./Toggle.scss";

function Toggle() {
  return (
    <div className="Toggle">
      <div>
        <div>Toggle</div>
      </div>
      <form action="none">
        <label className="checkbox">
          <input type="checkbox"></input>
          <span>
            <div className="checkbox-circle" />
            Получать спецпредложения
          </span>
        </label>
      </form>
    </div>
  );
}

export default Toggle;
