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

function Calendar({ today, firstday, lastday, setFirstday, setLastday }) {
  var [current_state, setCurrent_state] = useState(
    new Date("2019-08-08T03:24:00")
  );
  var month = setMonth(current_state.getMonth());
  var [current_days, setCurrent_days] = useState(initial(current_state));
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
      firstday !== undefined &&
      Math.abs(clicked_day.getDate() - firstday.getDate()) <
        Math.abs(lastday.getDate() - clicked_day.getDate())
    )
      setFirstday(clicked_day);
    else setLastday(clicked_day);

    console.log(firstday.getDate(), lastday.getDate());
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
            if (
              firstday !== undefined &&
              firstday.getFullYear() === number.id.getFullYear() &&
              firstday.getMonth() === number.id.getMonth() &&
              firstday.getDate() === number.id.getDate()
            )
              return (
                <li
                  className="edge-left"
                  key={current_days[i].id.toISOString()}
                  onClick={() => setInterval(number.id)}
                >
                  <span>{number.id.getDate()}</span>
                </li>
              );
            if (
              lastday !== undefined &&
              lastday.getFullYear() === number.id.getFullYear() &&
              lastday.getMonth() === number.id.getMonth() &&
              lastday.getDate() === number.id.getDate()
            )
              return (
                <li
                  className="edge-right"
                  key={current_days[i].id.toISOString()}
                  onClick={() => setInterval(number.id)}
                >
                  <span>{number.id.getDate()}</span>
                </li>
              );
            if (
              firstday !== undefined &&
              firstday.getFullYear() <= number.id.getFullYear() &&
              firstday.getMonth() <= number.id.getMonth() &&
              firstday.getDate() <= number.id.getDate() &&
              lastday !== undefined &&
              lastday.getFullYear() >= number.id.getFullYear() &&
              lastday.getMonth() >= number.id.getMonth() &&
              lastday.getDate() >= number.id.getDate()
            )
              return (
                <li
                  className="interval"
                  key={current_days[i].id.toISOString()}
                  onClick={() => setInterval(number.id)}
                >
                  <span>{number.id.getDate()}</span>
                </li>
              );

            if (number.id.getMonth() === current_state.getMonth()) {
              if (
                number.id.getDate() === today.getDate() &&
                number.id.getMonth() === today.getMonth() &&
                number.id.getFullYear() === today.getFullYear()
              )
                return (
                  <li
                    className="current_month today"
                    key={current_days[i].id.toISOString()}
                    onClick={() => setInterval(number.id)}
                  >
                    <span>{number.id.getDate()}</span>
                  </li>
                );
              else
                return (
                  <li
                    className="current_month"
                    key={current_days[i].id.toISOString()}
                    onClick={() => setInterval(number.id)}
                  >
                    <span>{number.id.getDate()}</span>
                  </li>
                );
            } else
              return (
                <li
                  key={current_days[i].id.toISOString()}
                  onClick={() => setInterval(number.id)}
                >
                  <span>{number.id.getDate()}</span>
                </li>
              );
          })}
        </div>
        <div className="buttons">
          <h3>очистить</h3>
          <h3>применить</h3>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
