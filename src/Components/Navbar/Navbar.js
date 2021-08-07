import React from "react";
import "./Navbar.scss";

import Buttons from "../Buttons/Buttons";
import logo from "../../img/logo.png";
import toxin from "../../img/TOXIN.png";
import arrow from "../../img/arrow-down.png";
import arrowAct from "../../img/arrow-down-act.png";

function Navbar({ isLogin, personality }) {
  var isServices = false;
  return (
    <div className="Navbar">
      <div className="Navbar-container content-container">
        <a href="/MetaLamp_Task_2/" className="company-name">
          <img src={logo} alt="" />
          <img src={toxin} alt="" />
        </a>
        <div className="Navbar-buttons">
          <a href="/MetaLamp_Task_2/">
            <p>О нас</p>
          </a>
          <a href="/MetaLamp_Task_2/" className="services">
            <p>Услуги</p>
            {isServices ? (
              <img src={arrowAct} alt="&#8744;" />
            ) : (
              <img src={arrow} alt="&#8744;" />
            )}
          </a>
          <a href="/MetaLamp_Task_2/">
            <p>Вакансии</p>
          </a>
          <a href="/MetaLamp_Task_2/">
            <p>Новости</p>
          </a>
          <a href="/MetaLamp_Task_2/">
            <p>Соглашения</p>
            {isServices ? (
              <img src={arrowAct} alt="&#8744;" />
            ) : (
              <img src={arrow} alt="&#8744;" />
            )}
          </a>

          {isLogin ? (
            <>
              <div className="line" />
              <p>
                {personality.name} {personality.surname}
              </p>
            </>
          ) : (
            <>
              <a href="/MetaLamp_Task_2/LoginPage">
                <Buttons type="border" text="Войти" isActive={true} />
              </a>
              <a href="/MetaLamp_Task_2/RegistrationPage">
                <Buttons
                  type="full"
                  text="Зарегистрироваться"
                  isActive={true}
                />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
