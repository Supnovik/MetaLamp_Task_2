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
import RateButton from "./Components/RateButton/RateButton";
import Buttons from "./Components/Buttons/Buttons";
import MaskedTextField from "./Components/MaskedTextField/MaskedTextField";
import RangeSlider from "./Components/RangeSlider/RangeSlider";
import Pagination from "./Components/Pagination/Pagination";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="" className="logo" />
      <div className="Page">
        <div>
          <h3>Pagination</h3>
          <Pagination />
        </div>

        <div>
          <h3>Range Slider</h3>
          <RangeSlider />
        </div>

        <div>
          <h3>Masked Text Field</h3>
          <MaskedTextField />
        </div>

        <div>
          <h3>Buttons</h3>
          <Buttons Type="full" />
        </div>

        <div>
          <h3>Rate Button</h3>
          <RateButton />
        </div>

        <div>
          <h3>Like Button</h3>
          <LikeButton likeCount={12} />
        </div>

        <div>
          <h3>Toggle</h3>
          <Toggle />
        </div>

        <div>
          <h3>Subscription Text Field</h3>
          <Subscription />
        </div>

        <div>
          <h3>Radio buttons</h3>
          <RadioButtons />
        </div>

        <div>
          <h3>Checkbox buttons</h3>
          <Checkbox />
        </div>

        <div>
          <h3>Dropdown </h3>
          <DropDown />
        </div>

        <div>
          <div className="text-field">
            <h3>Text Field</h3>
            <p>Default</p>
          </div>
          <TextField />
        </div>
      </div>
    </div>
  );
}

export default App;
