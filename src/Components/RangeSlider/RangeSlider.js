import React from "react";
import "./RangeSlider.scss";

function RangeSlider() {
  return (
    <div className="RangeSlider">
      <input min="500" max="50000" step="500" type="range" />
      <input min="500" max="50000" step="500" type="range" />
    </div>
  );
}

export default RangeSlider;
