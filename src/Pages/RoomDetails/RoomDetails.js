import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Specifications from "../../Components/Specifications/Specifications";

import "./RoomDetails.scss";

import smile from "../../img/insert_emoticon.png";
import city from "../../img/location_city.png";
import fire from "../../img/whatshot.png";
import img1 from "../../img/rooms/room_888.jpg";
import img2 from "../../img/rooms/room_888_1.jpg";
import img3 from "../../img/rooms/room_888_2.jpg";
import men from "../../img/men.png";
import girl from "../../img/girl.png";
import Reserve from "../../Cards/Reserve/Reserve";
import Reviews from "../../Components/Reviews/Reviews";
import BulletList from "../../Components/BulletList/BulletList";
import Chart from "../../Components/Chart/Chart";

export default function RoomDetails() {
  return (
    <div className="RoomDetails">
      <Navbar />
      <div className="RoomDetails-img">
        <img className="img1" src={img1} alt="" />
        <img className="img2" src={img2} alt="" />
        <img className="img3" src={img3} alt="" />
      </div>
      <div className="RoomDetails-info content-container">
        <div className="RoomDetails-box2">
          <div>
            <h2>Сведения о номере</h2>
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
                {
                  title: "Уют",
                  description: "Номер оснащен камином",
                  img: fire,
                },
              ]}
            />
          </div>
          <div>
            <h2>Впечатления о номере</h2>
            <Chart />
          </div>
          <div className="reviews-block">
            <div className="reviews-title">
              <h2>Отзывы посетителей номера</h2>
              <p>2 отзыва</p>
            </div>
            <Reviews
              review={{
                name: "Мурад Сарафанов",
                description:
                  "Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.",
                lastseen: "5 дней назад",
                img: men,
                likeCount: 12,
              }}
            />
            <Reviews
              review={{
                name: "Патрисия Стёклышкова",
                description:
                  "Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент",
                lastseen: "Неделю назад",
                img: girl,
                likeCount: 2,
              }}
            />
          </div>
          <div className="rules">
            <h2>Правила</h2>
            <BulletList
              list={[
                "Нельзя с питомцами",
                "Без вечеринок и мероприятий",
                "Время прибытия - после 13:00, а выезд до 12:00",
              ]}
            />
          </div>
          <div className="cancel">
            <h2>Отмена</h2>
            <p>
              Бесплатная отмена в течение 48 ч. После этого при отмене не
              позднее чем за 5 дн. до прибытия вы получите полный возврат за
              вычетом сбора за услуги.
            </p>
          </div>
        </div>
        <Reserve />
      </div>
      <Footer />
    </div>
  );
}
