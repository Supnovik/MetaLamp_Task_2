import React from "react";

import smile from "./img/insert_emoticon.png";
import city from "./img/location_city.png";
import logo from "./img/Group.png";
import men from "./img/men.png";
import "./App.scss";
import TextField from "./Components/TextField/TextField";
import DropDown from "./Components/DropDown/DropDown";
import Checkbox from "./Components/Checkbox/Checkbox";
import RichCheckbox from "./Components/RichCheckbox/RichCheckbox";
import RadioButtons from "./Components/Radio buttons/RadioButtons";
import Subscription from "./Components/Subscription/Subscription";
import Toggle from "./Components/Toggle/Toggle";
import LikeButton from "./Components/LikeButton/LikeButton";
import RateButton from "./Components/RateButton/RateButton";
import Buttons from "./Components/Buttons/Buttons";
import MaskedTextField from "./Components/MaskedTextField/MaskedTextField";
import RangeSlider from "./Components/RangeSlider/RangeSlider";
import Pagination from "./Components/Pagination/Pagination";
import ExpandableCheckbox from "./Components/ExpandableCheckbox/ExpandableCheckbox";
import BulletList from "./Components/BulletList/BulletList";
import Specifications from "./Components/Specifications/Specifications";
import Reviews from "./Components/Reviews/Reviews";
import DropDownSmall from "./Components/DropDownSmall/DropDownSmall";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="" className="logo" />
      <div className="Page">
        <div>
          <RangeSlider />
        </div>

        <div>
          <div className="text-dropdown">
            <h3>Dropdown</h3>
            <p>Default</p>
          </div>
          <DropDownSmall />
        </div>
        <div>
          <Reviews
            review={{
              name: "Мурад Сарафанов",
              description:
                "Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.",
              lastseen: "5 дней назад",
              img: men,
            }}
          />
        </div>
        <div>
          <Specifications
            list={[
              {
                title: "Комфорт",
                description: "Шумопоглощающие стены",
                img: smile,
              },
              {
                title: "Удобство",
                description: "Окно в каждой и спален",
                img: city,
              },
            ]}
          />
        </div>
        <div>
          <h3>Rich Checkbox buttons</h3>
          <RichCheckbox
            list={[
              {
                title: "Широкий коридор",
                description: "Ширина коридоров в номере не менее 91 см.",
                checked: false,
              },
              {
                title: "Помощник для инвалидов",
                description:
                  "На 1 этаже вас встретит специалист и проводит до номера",
                checked: false,
              },
            ]}
          />
        </div>
        <div>
          <h3>BulletList</h3>
          <BulletList
            list={[
              "Нельзя с питомцами",
              "Без вечеринок и мероприятий",
              "Время прибытия - после 13:00, а выезд до 12:00",
            ]}
          />
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
        <div>
          <h3>Pagination</h3>
          <Pagination />
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
          <h3>Rate Button </h3>
          <RateButton stars={4} />
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
          <Checkbox
            list={[
              { name: "Можно курить", checked: false },
              { name: "Можно с питомцами", checked: false },
              {
                name: "Можно пригласить гостей (до 10 человек)",
                checked: false,
              },
            ]}
          />
        </div>
        <div>
          <ExpandableCheckbox />
        </div>
      </div>
    </div>
  );
}

export default App;
