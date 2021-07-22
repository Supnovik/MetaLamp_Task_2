import React, { useState } from "react";
import "./LikeButton.scss";

function LikeButton({ likeCount }) {
  var [number, setNumber] = useState(likeCount);
  var [clicked, setClicked] = useState(false);
  function click() {
    setClicked((clicked = !clicked));
    if (clicked === true) setNumber(likeCount + 1);
    else setNumber(likeCount);
  }

  return (
    <div className="LikeButton">
      <div>
        <div>Like Button</div>
      </div>
      <form action="none">
        <label>
          <input type="checkbox"></input>
          <div className="container" onClick={() => click()}>
            <span>{number}</span>
          </div>
        </label>
      </form>
    </div>
  );
}

export default LikeButton;
