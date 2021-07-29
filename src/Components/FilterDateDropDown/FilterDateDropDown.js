import React, { useState } from "react";
import "./FilterDateDropDown.scss";
import arrow from "../../img/arrow-down.png";
import arrowAct from "../../img/arrow-down-act.png";

function FilterDateDropDown() {
  var [isActive, setIsActive] = useState(false);

  return (
    <div className="FilterDateDropDown">
      <div
        className="FilterDateDropDown-text input-box"
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

export default FilterDateDropDown;
