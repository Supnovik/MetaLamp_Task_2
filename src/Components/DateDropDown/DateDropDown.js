import React, { useState } from "react";
import "./DateDropDown.scss";
import arrow from "../../img/arrow-down.png";
import arrowAct from "../../img/arrow-down-act.png";

function DateDropDown() {
  var [isActive, setIsActive] = useState(false);

  return (
    <div className="DateDropDown">
      <div
        className="DateDropDown-text input-box"
        onClick={() => setIsActive((isActive = !isActive))}
      >
        ДД.ММ.ГГГГ
        {isActive ? (
          <img src={arrowAct} alt="&#8744;" />
        ) : (
          <img src={arrow} alt="&#8744;" />
        )}
      </div>

      {isActive ? <div></div> : <div></div>}
    </div>
  );
}

export default DateDropDown;
