import React, { useState } from "react";
import "./DropDown.scss";
import arrow from "../../img/arrow-down.png";
import arrowAct from "../../img/arrow-down-act.png";

function DropDown() {
  var [isActive, setIsActive] = useState(false);
  var [clicked, setClicked] = useState("");

  function Activate() {
    setIsActive((isActive = !isActive));
  }

  function Click() {
    if (clicked === "") {
      setClicked("clicked");
    }
  }

  return (
    <div className="DropDown">
      <div>
        <div>Dropdown </div>
        <div></div>
      </div>
      <form>
        <div className="Visitors" onClick={() => Activate()}>
          Сколько гостей{" "}
          {isActive ? (
            <img src={arrowAct} alt="&#8744;" />
          ) : (
            <img src={arrow} alt="&#8744;" />
          )}
        </div>
        {isActive ? (
          <div className="guest-list">
            <div className="guest-list-adults">
              Взрослые{" "}
              <div>
                <div className={"minus " + clicked} onClick={() => Click()}>
                  -
                </div>
                <div className="count ">чис</div>
                <div className="plus clicked" onClick={() => Click()}>
                  +
                </div>
              </div>
            </div>
            <div className="guest-list-adults">
              Дети
              <div>
                <div className={"minus " + clicked} onClick={() => Click()}>
                  -
                </div>
                <div className="count ">чис</div>
                <div className="plus clicked" onClick={() => Click()}>
                  +
                </div>
              </div>
            </div>
            <div className="guest-list-adults">
              Младенцы
              <div>
                <div className={"minus " + clicked} onClick={() => Click()}>
                  -
                </div>
                <div className="count ">чис</div>
                <div className="plus clicked" onClick={() => Click()}>
                  +
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </form>
    </div>
  );
}

export default DropDown;
