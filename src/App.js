import React from "react";

import logo from "./img/Group.png";
import "./App.scss";
import TextField from "./Components/TextField/TextField";
import DropDown from "./Components/DropDown/DropDown";
import Checkbox from "./Components/Checkbox/Checkbox";
import RadioButtons from "./Components/Radio buttons/RadioButtons";
import Subscription from "./Components/Subscription/Subscription";
import Toggle from "./Components/Toggle/Toggle";
import LikeButton from "./Components/LikeButton/LikeButton";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="" className="logo" />
      <div className="Page">
        <LikeButton likeCount={12} />
        <Toggle />
        <Subscription />
        <RadioButtons />
        <Checkbox />
        <DropDown />
        <TextField />
      </div>
    </div>
  );
}

export default App;
