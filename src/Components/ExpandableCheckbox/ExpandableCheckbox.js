import React, { useState } from "react";
import "./ExpandableCheckbox.scss";
import Checkbox from "../Checkbox/Checkbox";
import arrow from "../../img/arrow-down.png";

function ExpandableCheckbox({ text }) {
  var [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div
        className={"ExpandableCheckbox"}
        onClick={() => setIsActive((isActive = !isActive))}
      >
        <h3>{text}</h3>
        {isActive ? (
          <img src={arrow} alt="&#8744;" className="arrow" />
        ) : (
          <img src={arrow} alt="&#8744;" />
        )}
      </div>
      {isActive ? (
        <Checkbox
          list={[
            { name: "Завтрак", checked: false },
            { name: "Письменный стол", checked: true },
            { name: "Стул для кормеления", checked: true },
            { name: "Кроватка", checked: true },
            { name: "Телевизор", checked: false },
            { name: "Шампунь", checked: false },
          ]}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default ExpandableCheckbox;
