import React from "react";
import "./FooterMobile.scss";

import logo from "../../img/logo.png";
import toxin from "../../img/TOXIN.png";
import twitter from "../../img/twitter.svg";
import fb from "../../img/fb.svg";
import insta from "../../img/insta.svg";

function FooterMobile() {
  return (
    <div className="FooterMobile">
      <a href="/MetaLamp_Task_2/" className="company-name">
        <img src={logo} alt="" />
        <img src={toxin} alt="" />
      </a>

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
  );
}

export default FooterMobile;
