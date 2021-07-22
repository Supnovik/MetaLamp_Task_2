import React from "react";
import "./LikeButton.scss";

function LikeButton() {
  return (
    <div className="LikeButton">
      <div>
        <div>Like Button</div>
        <div></div>
      </div>
      <form action="none">
        <label className="checkbox">
          <input type="checkbox"></input>
          <span>
            <div className="checkbox-circle" />
            Получать спецпредложения
          </span>
        </label>
      </form>
    </div>
  );
}

export default LikeButton;
