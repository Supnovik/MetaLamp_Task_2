import React from "react";
import "./Chart.scss";

export default function Chart({ Great, Good, Satisfactory, Disappointed }) {
  var sum = Great + Good + Satisfactory + Disappointed;
  var great = (Great / sum) * 100;
  var good = (Good / sum) * 100;
  var satisfactory = (Satisfactory / sum) * 100;
  var disappointed = (Disappointed / sum) * 100;

  return (
    <div className="Chart">
      <div className="Chart-circle">
        <svg viewBox="0 0 34 34">
          <circle
            cx="17"
            cy="17"
            r="15.91549430918954"
            fill="transparent"
            stroke="#BC9CFF"
            strokeWidth="1"
            strokeDasharray={satisfactory + " " + (100 - satisfactory)}
            strokeDashoffset="25"
          ></circle>
          <circle
            cx="17"
            cy="17"
            r="15.91549430918954"
            fill="transparent"
            stroke="#6FCF97"
            strokeWidth="1"
            strokeDasharray={good + " " + (100 - good)}
            strokeDashoffset={25 - satisfactory}
          ></circle>
          <circle
            cx="17"
            cy="17"
            r="15.91549430918954"
            fill="transparent"
            stroke="#FFE39C"
            strokeWidth="1"
            strokeDasharray={great + " " + (100 - great)}
            strokeDashoffset={25 - (satisfactory + good)}
          ></circle>
          <circle
            cx="17"
            cy="17"
            r="15.91549430918954"
            fill="transparent"
            stroke="#3D4975"
            strokeWidth="1"
            strokeDasharray={disappointed + " " + (100 - disappointed)}
            strokeDashoffset={25 - (satisfactory + good + great)}
          ></circle>
        </svg>
        <div>
          <h2>{sum}</h2>
          <p>голосов</p>
        </div>
      </div>
      <div className="Chart-description">
        <div>
          <div />
          <p>Великолепно</p>
        </div>
        <div>
          <div />
          <p>Хорошо</p>
        </div>
        <div>
          <div />
          <p>Удовлетворительно</p>
        </div>
        <div>
          <div />
          <p>Разочарован</p>
        </div>
      </div>
    </div>
  );
}
