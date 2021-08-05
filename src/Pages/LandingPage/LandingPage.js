import React from "react";
import "./LandingPage.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import backgroundImg from "../../img/background/landing.jpg";
import FindNumbers from "../../Cards/FindNumbers/FindNumbers";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Navbar />
      <div
        className="LandingPage-info content-container"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div>
          <FindNumbers />
        </div>
        <p>Лучшие номера для вашей работы, отдыха и просто вдохновения</p>
      </div>
      <Footer />
    </div>
  );
}
