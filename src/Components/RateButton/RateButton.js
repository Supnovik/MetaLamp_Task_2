import React, { useRef, useState } from "react";
import "./RateButton.scss";

function RateButton() {
  var [activated, setActivated] = useState(["", "", "", "", ""]);
  var lastclicked = useRef(-1);
  function activate(n) {
    let newArr = ["", "", "", "", ""];
    if (lastclicked.current !== n) {
      newArr = activated.map((item, i) => {
        if (i + 1 <= n) {
          return "active";
        } else {
          return "";
        }
      });
      lastclicked.current = n;
    }

    setActivated(newArr);
  }

  return (
    <div className="RateButton">
      <div>
        <div>Rate Button</div>
      </div>
      <div className="stars">
        <div className={"star-5 " + activated[4]} onClick={() => activate(5)} />
        <div className={"star-4 " + activated[3]} onClick={() => activate(4)} />
        <div className={"star-3 " + activated[2]} onClick={() => activate(3)} />
        <div className={"star-2 " + activated[1]} onClick={() => activate(2)} />
        <div className={"star-1 " + activated[0]} onClick={() => activate(1)} />
      </div>
    </div>
  );
}

export default RateButton;
