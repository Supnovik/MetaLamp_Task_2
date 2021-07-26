import React, { useState } from "react";
import "./DropDownSmall.scss";
import arrow from "../../img/arrow-down.png";
import arrowAct from "../../img/arrow-down-act.png";

function DropDownSmall() {
  var [isActive, setIsActive] = useState(false);

  var [inventory, setInventory] = useState([
    { name: "Спальни", count: 2 },
    { name: "Кровати", count: 2 },
    { name: "Ванные комнаты", count: 0 },
  ]);

  function add(index) {
    let newArr = inventory.map((item, i) => {
      if (index === i) {
        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    });

    setInventory(newArr);
  }

  function sub(index) {
    let newArr = inventory.map((item, i) => {
      if (index === i) {
        return { ...item, count: item.count - 1 };
      } else {
        return item;
      }
    });

    setInventory(newArr);
  }

  return (
    <div className="DropDownSmall">
      <div
        className="Inventory"
        onClick={() => setIsActive((isActive = !isActive))}
      >
        <p>
          {inventory[0].count}

          {inventory[0].count % 10 === 1 &&
          Math.floor((inventory[0].count % 100) / 10) !== 1 ? (
            <span> спальня, </span>
          ) : (
            <>
              {(inventory[0].count % 10 === 2 ||
                inventory[0].count % 10 === 3 ||
                inventory[0].count % 10 === 4) &&
              Math.floor((inventory[0].count % 100) / 10) !== 1 ? (
                <span> спальни, </span>
              ) : (
                <span> спален, </span>
              )}
            </>
          )}
          {inventory[1].count}
          {inventory[1].count % 10 === 1 &&
          Math.floor((inventory[1].count % 100) / 10) !== 1 ? (
            <span> кровать... </span>
          ) : (
            <>
              {(inventory[1].count % 10 === 2 ||
                inventory[1].count % 10 === 3 ||
                inventory[1].count % 10 === 4) &&
              Math.floor((inventory[1].count % 100) / 10) !== 1 ? (
                <span> кровати... </span>
              ) : (
                <span> кроватей... </span>
              )}
            </>
          )}
        </p>

        {isActive ? (
          <img src={arrowAct} alt="&#8744;" />
        ) : (
          <img src={arrow} alt="&#8744;" />
        )}
      </div>
      {isActive ? (
        <div className="list">
          {inventory.map((item, index) => {
            return (
              <div className="list-adults" key={item.name}>
                <h3>{item.name}</h3>
                <div>
                  {(item.count <= 1 && item.name !== inventory[2].name) ||
                  item.count === 0 ? (
                    <div className={"minus"}>-</div>
                  ) : (
                    <div className={"minus clicked"} onClick={() => sub(index)}>
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
      ) : (
        <></>
      )}
    </div>
  );
}

export default DropDownSmall;
