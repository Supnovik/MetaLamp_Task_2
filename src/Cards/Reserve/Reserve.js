import React from "react";
import "./Reserve.scss";
import Buttons from "../../Components/Buttons/Buttons";
import DropDown from "../../Components/DropDown/DropDown";
import DateChoosing from "../../Components/DateChoosing/DateChoosing";
function Reserve() {
  return (
    <form className="Reserve">
      <div className="container">
        <div className="title">
          <div>
            <h1>№ 888</h1>
            <p>люкс</p>
          </div>
          <p>
            <span>9 990₽</span> в сутки
          </p>
        </div>
        <DateChoosing />
        <div className="guest">
          <h3>гости</h3>
          <DropDown />
        </div>
        <div className="prices">
          <p>
            <span>9 990₽ х 4 суток</span>
            <span>39 960₽</span>
          </p>
          <p>
            <span>Сбор за услуги: скидка 2 179₽</span>
            <span>0₽</span>
          </p>
          <p>
            <span>Сбор за дополнительные услуги</span>
            <span>300₽</span>
          </p>
        </div>
        <h2 className="total">
          Итого <span>...............................</span>
          <span>38 081₽</span>
        </h2>
        <Buttons type="long" text="забронировать" />
      </div>
    </form>
  );
}

export default Reserve;
