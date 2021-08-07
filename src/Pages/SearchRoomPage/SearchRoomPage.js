import React from "react";
import "./SearchRoomPage.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FilterDateDropDown from "../../Components/FilterDateDropDown/FilterDateDropDown";
import DropDown from "../../Components/DropDown/DropDown";
import RangeSlider from "../../Components/RangeSlider/RangeSlider";
import Checkbox from "../../Components/Checkbox/Checkbox";
import RichCheckbox from "../../Components/RichCheckbox/RichCheckbox";
import DropDownSmall from "../../Components/DropDownSmall/DropDownSmall";
import ExpandableCheckbox from "../../Components/ExpandableCheckbox/ExpandableCheckbox";
import RoomCard from "../../Cards/RoomCard/RoomCard";
import Pagination from "../../Components/Pagination/Pagination";
import { Rooms } from "../../Api/Rooms";

export default function SearchRoomPage() {
  return (
    <div className="SearchRoomPage">
      <Navbar />
      <div className="SearchRoomPage-info content-container">
        <div className="sidebar">
          <div>
            <h3>даты пребывания в отеле</h3>
            <FilterDateDropDown />
          </div>
          <div>
            <h3>гости</h3>
            <DropDown />
          </div>
          <div>
            <RangeSlider text={"диапазон цены"} />
            <p
              style={{
                marginTop: "10px",
                color: "rgba(31, 32, 65, 0.5)",
                fontSize: " 12px",
                lineHeight: "14px",
              }}
            >
              Стоимость за сутки пребывания в номере
            </p>
          </div>
          <div>
            <h3 style={{ marginBottom: "10px" }}>правила дома</h3>
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
          <div>
            <h3 style={{ marginBottom: "10px" }}>доступность</h3>
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
            <h3>удобства номера</h3>
            <DropDownSmall />
          </div>
          <div>
            <ExpandableCheckbox text={"дополнительные удобства"} />
          </div>
        </div>
        <div className="SearchRoomPage-info-table">
          <h2>Номера, которые мы для вас подобрали</h2>
          <div className="rooms-table">
            {Rooms.map((room) => {
              return (
                <RoomCard
                  roomNumber={room.roomNumber}
                  lux={room.lux}
                  stars={room.stars}
                  dayPrice={room.dayPrice}
                  reviews={room.reviews}
                  img={room.img}
                  key={room.roomNumber}
                />
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <Pagination />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
