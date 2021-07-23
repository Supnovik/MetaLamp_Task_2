import React from "react";
import "./MaskedTextField.scss";

function MaskedTextField() {
  return (
    <div className="MaskedTextField">
      <div>
        <div>Masked Text Field</div>
        <div></div>
      </div>
      <form action="none">
        <input type="date"></input>
      </form>
    </div>
  );
}

export default MaskedTextField;
