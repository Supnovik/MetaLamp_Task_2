import React, { useState } from "react";
import "./Calendar.scss";

function setMonth(n) {
  switch (n) {
    case 0:
      return "Январь";
    case 1:
      return "Февраль";
    case 2:
      return "Март";
    case 3:
      return "Апрель";
    case 4:
      return "Май";
    case 5:
      return "Июнь";
    case 6:
      return "Июль";
    case 7:
      return "Август";
    case 8:
      return "Сентябрь";
    case 9:
      return "Октябрь";
    case 10:
      return "Ноябрь";
    case 11:
      return "Декабрь";
    default:
      return "";
  }
}

function Calendar({
  today,
  firstday,
  lastday,
  setFirstday,
  setLastday,
  isActivated,
  close,
}) {
  var [current_state, setCurrent_state] = useState(today);
  var month = setMonth(current_state.getMonth());
  var [current_days, setCurrent_days] = useState(initial(current_state));
  var [current_firstday, setCurrent_firstday] = useState(firstday);
  var [current_lastday, setCurrent_lastday] = useState(lastday);

  function initial(Current_state) {
    var array = [];
    var state = new Date(
      Current_state.getFullYear(),
      Current_state.getMonth(),
      1
    );
    var next_state = new Date(state.getFullYear(), state.getMonth() + 1, 0);

    if (next_state.getDay() !== 0)
      next_state = new Date(
        next_state.getFullYear(),
        next_state.getMonth(),
        8 - next_state.getDay() + next_state.getDate()
      );
    else
      next_state = new Date(
        next_state.getFullYear(),
        next_state.getMonth() + 1,
        1
      );

    var last_state = new Date(
      state.getFullYear(),
      state.getMonth(),
      2 - state.getDay()
    );

    if (state.getDay() !== 0) {
      last_state = new Date(
        state.getFullYear(),
        state.getMonth(),
        2 - state.getDay()
      );
    } else last_state = new Date(state.getFullYear(), state.getMonth(), -5);

    while (last_state.toString() !== next_state.toString()) {
      array.push({
        id: last_state,
        active: false,
      });

      last_state = new Date(
        last_state.getFullYear(),
        last_state.getMonth(),
        last_state.getDate() + 1
      );
    }

    return array;
  }

  function setInterval(clicked_day) {
    if (
      current_firstday !== undefined &&
      isActivated === true &&
      getDayfromMs(clicked_day) <= getDayfromMs(current_lastday)
    )
      setCurrent_firstday(clicked_day);
    else if (
      current_lastday !== undefined &&
      isActivated === false &&
      getDayfromMs(clicked_day) >= getDayfromMs(current_firstday)
    )
      setCurrent_lastday(clicked_day);
  }

  function getDayfromMs(ms) {
    return Math.floor(ms.getTime() / 1000 / 60 / 60 / 24);
  }

  function setDataType(number, i) {
    var dataClass = "";
    if (current_firstday !== undefined && current_lastday !== undefined) {
      if (getDayfromMs(current_firstday) === getDayfromMs(number.id))
        dataClass = "edge-left";
      else if (getDayfromMs(current_lastday) === getDayfromMs(number.id))
        dataClass = "edge-right";
      else if (
        getDayfromMs(current_firstday) <= getDayfromMs(number.id) &&
        getDayfromMs(current_lastday) >= getDayfromMs(number.id)
      )
        dataClass = "interval";
      else if (getDayfromMs(number.id) === getDayfromMs(today))
        dataClass = "current_month today";
      else dataClass = "current_month";
    }
    return (
      <li
        className={dataClass}
        key={current_days[i].id.toISOString()}
        onClick={() => setInterval(number.id)}
      >
        <span>{number.id.getDate()}</span>
      </li>
    );
  }

  return (
    <div className="Calendar">
      <div className="container">
        <div className="title">
          <button
            className="rotate"
            onClick={() => {
              setCurrent_state(
                new Date(
                  current_state.getFullYear(),
                  current_state.getMonth() - 1
                )
              );
              setCurrent_days(
                initial(
                  new Date(
                    current_state.getFullYear(),
                    current_state.getMonth() - 1
                  )
                )
              );
            }}
          />
          <h2>
            {month} {current_state.getFullYear()}
          </h2>
          <button
            onClick={() => {
              setCurrent_state(
                new Date(
                  current_state.getFullYear(),
                  current_state.getMonth() + 1
                )
              );
              setCurrent_days(
                initial(
                  new Date(
                    current_state.getFullYear(),
                    current_state.getMonth() + 1
                  )
                )
              );
            }}
          />
        </div>
        <div className="weekdays">
          <li>Пн</li>
          <li>Вт</li>
          <li>Ср</li>
          <li>Чт</li>
          <li>Пт</li>
          <li>Сб</li>
          <li>Вс</li>
        </div>
        <div className="days">
          {current_days.map((number, i) => {
            return setDataType(number, i);
          })}
        </div>
        <div className="buttons">
          <h3
            onClick={() => {
              setCurrent_firstday(firstday);
              setCurrent_lastday(lastday);
              close();
            }}
          >
            очистить
          </h3>
          <h3
            onClick={() => {
              setFirstday(current_firstday);
              setLastday(current_lastday);
              close();
            }}
          >
            применить
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
