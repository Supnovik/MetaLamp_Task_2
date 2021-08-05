import React from "react";
import "./Footer.scss";

import logo from "../../img/logo.png";
import toxin from "../../img/TOXIN.png";
import Subscription from "../Subscription/Subscription";
import twitter from "../../img/twitter.svg";
import fb from "../../img/fb.svg";
import insta from "../../img/insta.svg";

function Footer() {
  return (
    <div className="Footer">
      <div className="description content-container">
        <div>
          <a href="/MetaLamp_Task_2/" className="company-name">
            <img src={logo} alt="" />
            <img src={toxin} alt="" />
          </a>
          <p>
            Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
            «Отельные взгляды»
          </p>
        </div>
        <div>
          <h3>Навигация</h3>
          <p>О нас</p>
          <p>Новости</p>
          <p>Служба поддержки</p>
          <p>Услуги</p>
        </div>
        <div>
          <h3>О нас</h3>
          <p>О сервисе</p>
          <p>Наша команда</p>
          <p>Вакансии</p>
          <p>Инвесторы</p>
        </div>
        <div>
          <h3>Служба поддержки</h3>
          <p>Соглашение</p>
          <p>Сообщества</p>
          <p>Связь с нами</p>
        </div>
        <div>
          <h3>Подписка</h3>
          <p>Получайте специальные предложения и новости сервиса</p>
          <Subscription />
        </div>
      </div>
      <div className="Footer-outline" />
      <div className="policy content-container">
        <p>Copyright © 2018 Toxin отель. Все права защищены.</p>
        <div>
          <a href="/MetaLamp_Task_2/">
            <img src={twitter} alt="" />
          </a>
          <a href="/MetaLamp_Task_2/">
            <img src={fb} alt="" />
          </a>
          <a href="/MetaLamp_Task_2/">
            <img src={insta} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
