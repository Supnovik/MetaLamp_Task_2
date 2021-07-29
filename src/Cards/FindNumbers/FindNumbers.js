import React from "react";
import "./FindNumbers.scss";
import DateDropDown from "../../Components/DateDropDown/DateDropDown";
import DropDown from "../../Components/DropDown/DropDown";
import Buttons from "../../Components/Buttons/Buttons";

function FindNumbers() {
  return (
    <form className="FindNumbers">
      <div className="container">
        <h1>Найдём номера под ваши пожелания</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <div>
            <h3>прибытие</h3>
            <DateDropDown />
          </div>
          <div>
            <h3>выезд</h3>
            <DateDropDown />
          </div>
        </div>
        <div style={{ marginBottom: "26px" }}>
          <h3>гости</h3>
          <DropDown />
        </div>
        <Buttons type="long" text="подобрать номер" />
      </div>
    </form>
  );
}

export default FindNumbers;
