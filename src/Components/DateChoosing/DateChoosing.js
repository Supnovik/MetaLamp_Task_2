import React, { useState } from "react";
import "./DateChoosing.scss";
import DateDropDown from "../../Components/DateDropDown/DateDropDown";
import Calendar from "../../Cards/Calendar/Calendar";

function DateChoosing() {
  const today = new Date("2019-08-08");
  var [firstday, setFirstday] = useState(new Date("2019-08-19"));
  var [lastday, setLastday] = useState(new Date("2019-08-23"));
  var [isActive_1, setIsActive_1] = useState(false);
  var [isActive_2, setIsActive_2] = useState(false);

  function activate(n) {
    if (n === undefined) {
      setIsActive_1((isActive_1 = false));
      setIsActive_2((isActive_2 = false));
    } else if (n === 1) {
      setIsActive_1((isActive_1 = !isActive_1));
      setIsActive_2((isActive_2 = false));
    } else {
      setIsActive_1((isActive_1 = false));
      setIsActive_2((isActive_2 = !isActive_2));
    }
  }

  return (
    <div className="date">
      <div className="date-dropdown">
        <div>
          <h3>прибытие</h3>
          <div onClick={() => activate(1)}>
            <DateDropDown date={firstday} isActive={isActive_1} />
          </div>
        </div>
        <div>
          <h3>выезд</h3>
          <div onClick={() => activate(2)}>
            <DateDropDown
              date={lastday}
              isActive={isActive_2}
              setIsActive={setIsActive_2}
            />
          </div>
        </div>
      </div>
      {isActive_1 || isActive_2 ? (
        <Calendar
          isActivated={isActive_1}
          today={today}
          firstday={firstday}
          lastday={lastday}
          setFirstday={setFirstday}
          setLastday={setLastday}
          close={activate}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default DateChoosing;
