import React from "react";
import "./DateDropDown.scss";
import arrow from "../../img/arrow-down.png";
import arrowAct from "../../img/arrow-down-act.png";

function DateDropDown({ date, isActive }) {
  return (
    <div className="DateDropDown">
      <div className="DateDropDown-text input-box">
        <>{date.getDate() < 10 ? <>0</> : <></>}</>
        {date.getDate()}.<>{date.getMonth() < 10 ? <>0</> : <></>}</>
        {date.getMonth()}.{date.getFullYear()}
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
