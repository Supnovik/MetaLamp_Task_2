import React from "react";
import logo from "./img/Group.png";
import "./App.scss";
import TextField from "./Components/TextField/TextField";
import DropDown from "./Components/DropDown/DropDown";
import Checkbox from "./Components/Checkbox/Checkbox";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="" className="logo" />
      <div className="Page">
        <Checkbox />
        <DropDown />
        <TextField />
      </div>
    </div>
  );
}

export default App;
