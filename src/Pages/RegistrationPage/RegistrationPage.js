import React from "react";
import "./RegistrationPage.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import backgroundImg from "../../img/background/login.jpg";
import Registration from "../../Cards/Registration/Registration";

export default function RegistrationPage() {
  return (
    <div className="RegistrationPage">
      <Navbar />
      <div
        className="RegistrationPage-info"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <Registration />
      </div>
      <Footer />
    </div>
  );
}
