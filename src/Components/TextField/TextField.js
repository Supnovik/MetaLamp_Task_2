import React from "react";
import "./TextField.scss";

function TextField() {
  return (
    <div className="TextField">
      <div>
        <div>Text Field</div>
        <div>Default</div>
      </div>
      <form action="none">
        <input type="text" placeholder="Email"></input>
      </form>
    </div>
  );
}

export default TextField;
