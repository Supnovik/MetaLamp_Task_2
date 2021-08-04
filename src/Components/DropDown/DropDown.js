import React, { useState } from "react";
import "./DropDown.scss";
import arrow from "../../img/arrow-down.png";
import arrowAct from "../../img/arrow-down-act.png";

function DropDown() {
  var [isActive, setIsActive] = useState(false);
  var [peopleCount, setPeopleCount] = useState(0);

  var [people, setPeople] = useState([
    { name: "Взрослые", count: 0 },
    { name: "Дети", count: 0 },
    { name: "Младенцы", count: 0 },
  ]);

  function clear() {
    let newArr = people.map((item, i) => {
      return { ...item, count: 0 };
    });
    setPeopleCount(0);

    setPeople(newArr);
  }

  function add(index) {
    let newArr = people.map((item, i) => {
      if (index === i) {
        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    });
    setPeopleCount(peopleCount + 1);
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
    setPeopleCount(peopleCount - 1);

    setPeople(newArr);
  }

  return (
    <div className="DropDown">
      <div
        className="Visitors input-box"
        onClick={() => setIsActive((isActive = !isActive))}
      >
        {peopleCount === 0 ? (
          <p>Сколько гостей</p>
        ) : (
          <>
            {peopleCount % 10 === 1 &&
            Math.floor((peopleCount % 100) / 10) !== 1 ? (
              <p>{peopleCount} гость</p>
            ) : (
              <>
                {(peopleCount % 10 === 2 ||
                  peopleCount % 10 === 3 ||
                  peopleCount % 10 === 4) &&
                Math.floor((peopleCount % 100) / 10) !== 1 ? (
                  <p> {peopleCount} гостя</p>
                ) : (
                  <p> {peopleCount} гостей</p>
                )}
              </>
            )}
          </>
        )}
        {isActive ? (
          <img src={arrowAct} alt="&#8744;" />
        ) : (
          <img src={arrow} alt="&#8744;" />
        )}
      </div>
      {isActive ? (
        <div className="input-box guest-list">
          <div className="guest-list-container">
            {people.map((item, index) => {
              return (
                <div className="guest-list-adults" key={item.name}>
                  <h3>{item.name}</h3>
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

                    <div className="count ">
                      <h3>{item.count}</h3>
                    </div>
                    <div className="plus clicked" onClick={() => add(index)}>
                      +
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="list-buttons">
            <h3 onClick={() => clear()}>очистить</h3>
            <h3 onClick={() => setIsActive((isActive = !isActive))}>
              применить
            </h3>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default DropDown;
