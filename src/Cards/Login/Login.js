import React from "react";
import "./Login.scss";
import Buttons from "../../Components/Buttons/Buttons";
import TextField from "../../Components/TextField/TextField";
function Login() {
  return (
    <form className="Login">
      <div className="container">
        <h1>Войти</h1>

        <TextField type={"email"} text="Email" />
        <TextField type={"password"} text="Пароль" />
        <Buttons type="long" text="войти" />
        <div className="footer">
          <p>Нет аккаунта на Toxin?</p>
          <Buttons type="border" text="создать" />
        </div>
      </div>
    </form>
  );
}

export default Login;
