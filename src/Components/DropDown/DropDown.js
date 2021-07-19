import React, { useState } from "react";
import "./DropDown.scss";
import arrow from "../../img/arrow-down.png";
import arrowAct from "../../img/arrow-down-act.png";

function DropDown() {
  var [isActive, setIsActive] = useState(false);
  var [people, setPeople] = useState([
    { name: "Взрослые", count: 0 },
    { name: "Дети", count: 0 },
    { name: "Младенцы", count: 0 },
  ]);

  function add(index) {
    let newArr = people.map((item, i) => {
      if (index === i) {
        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    });
    setPeople(newArr);
  }
  function sub(index) {
    let newArr = people.map((item, i) => {
      if (index === i) {
        return { ...item, count: item.count - 1 };
      } else {
        return item;
      }
    });
    setPeople(newArr);
  }

  return (
    <div className="DropDown">
      <div>
        <div>Dropdown </div>
        <div></div>
      </div>
      <form>
        <div
          className="Visitors"
          onClick={() => setIsActive((isActive = !isActive))}
        >
          Сколько гостей{" "}
          {isActive ? (
            <img src={arrowAct} alt="&#8744;" />
          ) : (
            <img src={arrow} alt="&#8744;" />
          )}
        </div>

        {isActive ? (
          <div className="guest-list">
            {people.map((item, index) => {
              return (
                <div className="guest-list-adults" key={item.name}>
                  {item.name}
                  <div>
                    {item.count === 0 ? (
                      <div className={"minus"}>-</div>
                    ) : (
                      <div
                        className={"minus clicked"}
                        onClick={() => sub(index)}
                      >
                        -
                      </div>
                    )}

                    <div className="count ">{item.count}</div>
                    <div className="plus clicked" onClick={() => add(index)}>
                      +
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </form>
    </div>
  );
}

export default DropDown;
