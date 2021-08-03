import React from "react";
import "./FindNumbers.scss";
import DropDown from "../../Components/DropDown/DropDown";
import Buttons from "../../Components/Buttons/Buttons";
import DateChoosing from "../../Components/DateChoosing/DateChoosing";

function FindNumbers() {
  return (
    <form className="FindNumbers">
      <div className="container">
        <h1>Найдём номера под ваши пожелания</h1>
        <DateChoosing />

        <div style={{ marginBottom: "26px", marginTop: "15px" }}>
          <h3>гости</h3>
          <DropDown />
        </div>
        <Buttons type="long" text="подобрать номер" />
      </div>
    </form>
  );
}

export default FindNumbers;
