import React from "react";
import "./Registration.scss";
import RadioButtons from "../../Components/RadioButtons/RadioButtons";
import Buttons from "../../Components/Buttons/Buttons";
import TextField from "../../Components/TextField/TextField";
import MaskedTextField from "../../Components/MaskedTextField/MaskedTextField";
import Toggle from "../../Components/Toggle/Toggle";

function Registration() {
  return (
    <form className="Registration">
      <div className="cards-container">
        <h1>Регистрация аккаунта</h1>

        <TextField type={"text"} text="Имя" />
        <TextField type={"text"} text="Фамилия" />
        <RadioButtons />

        <div style={{ marginTop: "20px" }}>
          <h3>дата рождения</h3>
          <MaskedTextField />
        </div>
        <div style={{ marginTop: "20px" }}>
          <h3>данные для входа в сервис</h3>
          <TextField type={"email"} text="Email" />
          <TextField type={"password"} text="Пароль" />
        </div>
        <Toggle />
        <Buttons type="long" text="перейти к оплате" />
        <div className="Registration-footer">
          <p>Уже есть аккаунт на Toxin</p>
          <Buttons type="border" text="войти" />
        </div>
      </div>
    </form>
  );
}

export default Registration;
