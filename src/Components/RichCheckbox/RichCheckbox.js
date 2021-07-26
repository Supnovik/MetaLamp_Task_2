import React, { useState } from "react";
import "./RichCheckbox.scss";

function RichCheckbox({ list }) {
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
    <div className="rich-check-list">
      {checkList.map((item, index) => {
        return (
          <label key={item.title}>
            <input type="checkbox" className="checkbox" />
            {item.checked ? (
              <div
                className="checked"
                onClick={() => {
                  Change(index);
                }}
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ) : (
              <div
                onClick={() => {
                  Change(index);
                }}
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            )}
          </label>
        );
      })}
    </div>
  );
}

export default RichCheckbox;
