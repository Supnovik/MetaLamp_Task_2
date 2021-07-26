import React, { useState } from "react";
import "./Checkbox.scss";

function Checkbox({ list }) {
  let [checkList, setCheckList] = useState(list);
  function Change(index) {
    let newArr = checkList.map((item, i) => {
      if (index === i) {
        return { ...item, checked: !checkList[i].checked };
      } else {
        return item;
      }
    });
    setCheckList(newArr);
  }

  return (
    <div action="none" className="check-list">
      {checkList.map((item, index) => {
        return (
          <label key={item.name}>
            <input type="checkbox" className="checkbox" />
            {item.checked ? (
              <span
                className="checked"
                onClick={() => {
                  Change(index);
                }}
              >
                {item.name}
              </span>
            ) : (
              <span
                onClick={() => {
                  Change(index);
                }}
              >
                {item.name}
              </span>
            )}
          </label>
        );
      })}
    </div>
  );
}

export default Checkbox;
