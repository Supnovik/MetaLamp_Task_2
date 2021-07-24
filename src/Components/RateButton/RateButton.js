import React, { useRef, useState } from "react";
import "./RateButton.scss";

function RateButton() {
  var [activated, setActivated] = useState(["", "", "", "", ""]);
  var lastclicked = useRef(-1);
  function activate(n) {
    var newArr = ["", "", "", "", ""];
    var s = 0;
    if (lastclicked.current !== n) {
      newArr = activated.map((item, i) => {
        if (i + 1 <= n) {
          s++;
          return "active";
        } else {
          return "";
        }
      });
      lastclicked.current = n;
    } else {
      if (s === 0) {
        lastclicked.current = -1;
      }
    }

    setActivated(newArr);
  }

  return (
    <div className="RateButton">
      <div className={"star-5 " + activated[4]} onClick={() => activate(5)} />
      <div className={"star-4 " + activated[3]} onClick={() => activate(4)} />
      <div className={"star-3 " + activated[2]} onClick={() => activate(3)} />
      <div className={"star-2 " + activated[1]} onClick={() => activate(2)} />
      <div className={"star-1 " + activated[0]} onClick={() => activate(1)} />
    </div>
  );
}

export default RateButton;
