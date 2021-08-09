import React from "react";
import "./Chart.scss";

export default function Chart() {
  return (
    <div className="Chart">
      <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
        <circle
          class="donut-hole"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="#fff"
        ></circle>

        <circle
          class="donut-segment"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#BC9CFF"
          stroke-width="2"
          stroke-dasharray="25 75"
          stroke-dashoffset="25"
        ></circle>
        <circle
          class="donut-segment"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#6FCF97"
          stroke-width="2"
          stroke-dasharray="25 75"
          stroke-dashoffset="0"
        ></circle>
        <circle
          class="donut-segment"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke="#FFE39C"
          stroke-width="2"
          stroke-dasharray="50 50"
          stroke-dashoffset="75"
        ></circle>
      </svg>
    </div>
  );
}
