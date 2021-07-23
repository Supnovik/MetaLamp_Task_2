import React from "react";
import "./RangeSlider.scss";

function RangeSlider() {
  return (
    <div className="RangeSlider">
      <div>
        <div>Range Slider</div>
      </div>
      <form action="none">
        <input type="range" />
      </form>
    </div>
  );
}

export default RangeSlider;
