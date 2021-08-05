import React from "react";
import "./LoginPage.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import backgroundImg from "../../img/background/login.jpg";
import Login from "../../Cards/Login/Login";

export default function LoginPage() {
  return (
    <div className="LoginPage">
      <Navbar />
      <div
        className="LoginPage-info"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <Login />
      </div>
      <Footer />
    </div>
  );
}
