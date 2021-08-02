import React from "react";
import smile from "../../img/insert_emoticon.png";
import city from "../../img/location_city.png";
import logo from "../../img/Group.png";
import men from "../../img/men.png";
import "./UI.scss";
import TextField from "../../Components/TextField/TextField";
import DropDown from "../../Components/DropDown/DropDown";
import Checkbox from "../../Components/Checkbox/Checkbox";
import RichCheckbox from "../../Components/RichCheckbox/RichCheckbox";
import RadioButtons from "../../Components/RadioButtons/RadioButtons";
import Subscription from "../../Components/Subscription/Subscription";
import Toggle from "../../Components/Toggle/Toggle";
import LikeButton from "../../Components/LikeButton/LikeButton";
import RateButton from "../../Components/RateButton/RateButton";
import Buttons from "../../Components/Buttons/Buttons";
import MaskedTextField from "../../Components/MaskedTextField/MaskedTextField";
import RangeSlider from "../../Components/RangeSlider/RangeSlider";
import Pagination from "../../Components/Pagination/Pagination";
import ExpandableCheckbox from "../../Components/ExpandableCheckbox/ExpandableCheckbox";
import BulletList from "../../Components/BulletList/BulletList";
import Specifications from "../../Components/Specifications/Specifications";
import Reviews from "../../Components/Reviews/Reviews";
import DropDownSmall from "../../Components/DropDownSmall/DropDownSmall";
import DateDropDown from "../../Components/DateDropDown/DateDropDown";
import FilterDateDropDown from "../../Components/FilterDateDropDown/FilterDateDropDown";

export default function UI() {
  return (
    <div className="UI">
      <img src={logo} alt="" className="logo" />
      <div className="Page">
        <div style={{ position: "absolute", left: "141px", top: "140px" }}>
          <div className="text-field">
            <h3>Text Field</h3>
            <p>Default</p>
          </div>
          <TextField type={"text"} text="Email" />
        </div>

        <div style={{ position: "absolute", left: "141px", top: "227px" }}>
          <div className="text-field">
            <h3>Text Field</h3>
            <p>Default</p>
          </div>
          <TextField type={"text"} text="Email" />
        </div>

        <div style={{ position: "absolute", left: "141px", top: "311px" }}>
          <h3>Dropdown </h3>
          <DropDown />
        </div>

        <div style={{ position: "absolute", left: "141px", top: "395px" }}>
          <h3>Masked Text Field</h3>
          <MaskedTextField />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            left: "141px",
            top: "502px",
            width: "320px",
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

        <div style={{ position: "absolute", left: "141px", top: "607px" }}>
          <h3>Filter Date Dropdown</h3>
          <FilterDateDropDown />
        </div>

        <div style={{ position: "absolute", left: "141px", top: "712px" }}>
          <h3>Subscription Text Field</h3>
          <Subscription />
        </div>

        <div style={{ position: "absolute", left: "141px", top: "876px" }}>
          <div className="text-dropdown">
            <h3>Dropdown</h3>
            <p>Default</p>
          </div>
          <DropDownSmall />
        </div>

        <div style={{ position: "absolute", left: "141px", top: "960px" }}>
          <div className="text-dropdown">
            <h3>Dropdown</h3>
            <p>Default</p>
          </div>
          <DropDownSmall />
        </div>

        <div style={{ position: "absolute", left: "141px", top: "1182px" }}>
          <ExpandableCheckbox />
        </div>

        <div style={{ position: "absolute", left: "141px", top: "1246px" }}>
          <ExpandableCheckbox />
        </div>

        <div style={{ position: "absolute", left: "141px", top: "1564px" }}>
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

        <div style={{ position: "absolute", left: "587px", top: "143px" }}>
          <h3>Checkbox buttons</h3>
          <Checkbox
            list={[
              { name: "Можно курить", checked: false },
              { name: "Можно с питомцами", checked: true },
              {
                name: "Можно пригласить гостей (до 10 человек)",
                checked: true,
              },
            ]}
          />
        </div>

        <div style={{ position: "absolute", left: "587px", top: "313px" }}>
          <h3>Radio buttons</h3>
          <RadioButtons />
        </div>

        <div style={{ position: "absolute", left: "587px", top: "405px" }}>
          <h3>Toggle</h3>
          <Toggle />
          <Toggle />
        </div>

        <div style={{ position: "absolute", left: "587px", top: "534px" }}>
          <h3>Like Button</h3>
          <LikeButton likeCount={12} />
          <LikeButton likeCount={12} />
        </div>

        <div style={{ position: "absolute", left: "587px", top: "625px" }}>
          <h3>Rate Button </h3>
          <RateButton stars={4} />
          <RateButton stars={5} />
        </div>

        <div style={{ position: "absolute", left: "587px", top: "876px" }}>
          <h3>Dropdown </h3>
          <DropDown />
        </div>

        <div style={{ position: "absolute", left: "587px", top: "1196px" }}>
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

        <div style={{ position: "absolute", left: "587px", top: "1574px" }}>
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

        <div style={{ position: "absolute", left: "979px", top: "143px" }}>
          <RangeSlider />
        </div>

        <div style={{ position: "absolute", left: "979px", top: "231px" }}>
          <h3>Buttons</h3>
          <Buttons type="full" text="click me" />
        </div>

        <div style={{ position: "absolute", left: "979px", top: "540px" }}>
          <h3>Pagination</h3>
          <Pagination />
        </div>

        <div style={{ position: "absolute", left: "979px", top: "876px" }}>
          <h3>Dropdown </h3>
          <DropDown />
        </div>

        <div style={{ position: "absolute", left: "979px", top: "1196px" }}>
          <h3>BulletList</h3>
          <BulletList
            list={[
              "Нельзя с питомцами",
              "Без вечеринок и мероприятий",
              "Время прибытия - после 13:00, а выезд до 12:00",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
