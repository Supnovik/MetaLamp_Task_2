import React, { useState } from "react";
import "./Checkbox.scss";

function Checkbox() {
  let [checkList, setCheckList] = useState([
    { name: "Happy", checked: false },
    { name: "NotHappy", checked: false },
  ]);
  function Change(index) {
    let newArr = checkList.map((item, i) => {
      if (index === i) {
        return { ...item, checked: !item.checked };
      } else {
        return item;
      }
    });
    setCheckList(newArr);
  }
  return (
    <div className="Checkbox">
      <div>
        <div>Checkbox buttons</div>
        <div></div>
      </div>
      <button onClick={() => console.log(checkList)}></button>
      <form action="none" className="check-list">
        {checkList.map((item, index) => {
          return (
            <label onClick={() => Change(index)} key={item.name}>
              <input type="checkbox" className="custom-checkbox" />
              <span>{item.name}</span>
              <div>{console.log(item.checked)}</div>
            </label>
          );
        })}
      </form>
    </div>
  );
}

export default Checkbox;
