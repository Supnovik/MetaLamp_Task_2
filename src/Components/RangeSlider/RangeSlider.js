import React, { useEffect, useState } from "react";
import "./RangeSlider.scss";
function RangeSlider() {
  const initial = {
    min: 0,
    max: 15000,
    step: 500,
  };
  var [value, setValue] = useState({
    min: 5000,
    max: 10000,
  });
  var [style, setStyle] = useState({
    width: ((value.max - value.min) * 100) / (initial.max - initial.min) + "%",
    left: (value.min * 100) / (initial.max - initial.min) + "%",
  });

  useEffect(() => {
    setStyle({
      width:
        ((value.max - value.min) * 100) / (initial.max - initial.min) + "%",
      left: (value.min * 100) / (initial.max - initial.min) + "%",
    });
    console.log(value);
  }, [value, initial.max, initial.min]);

  function setMax(e) {
    if (
      Math.abs(e.target.value - value.max) >= initial.step &&
      e.target.value >= value.min &&
      e.target.value > initial.min + initial.step
    )
      setValue({
        ...value,
        max: Number(Math.floor(e.target.value / 500) * 500),
      });
  }

  function setMin(e) {
    if (
      Math.abs(value.min - e.target.value) >= initial.step &&
      e.target.value <= value.max
    )
      setValue({
        ...value,
        min: Number(Math.floor(e.target.value / 500) * 500),
      });
  }

  return (
    <>
      <div className="RangeSlider-title">
        <h3>Range Slider</h3>
        <p>
          {value.min}₽ - {value.max}₽
        </p>
      </div>
      <div className="RangeSlider">
        <input
          type="range"
          min={initial.min}
          max={initial.max}
          value={value.min}
          step={initial.step / 1000}
          onChange={(e) => setMin(e)}
        />

        <input
          type="range"
          min={initial.min}
          max={initial.max}
          value={value.max}
          step={initial.step / 1000}
          onChange={(e) => setMax(e)}
        />
        <span style={style}></span>
      </div>
    </>
  );
}

export default RangeSlider;

/*
var [state, setState] = useState({
    value5: {
      min: 3,
      max: 7,
    },
  });

<InputRange
        draggableTrack
        maxValue={20}
        minValue={0}
        onChange={(value) => setState({ value5: value })}
        onChangeComplete={(value) => console.log(value)}
        value={state.value5}
      />*/
