import React from "react";
import "./HeadersFooters.scss";
import logo from "../../img/Group.png";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FooterMobile from "../../Components/FooterMobile/FooterMobile";

function HeadersFooters() {
  return (
    <div className="HeadersFooters">
      <img src={logo} alt="" className="logo" />
      <div style={{ position: "absolute", top: "140px" }}>
        <Navbar isLogin={false} />
      </div>
      <div style={{ position: "absolute", top: "250px" }}>
        <Navbar
          isLogin={true}
          personality={{ name: "Юлий", surname: "Цезарь" }}
        />
      </div>
      <div style={{ position: "absolute", top: "360px" }}>
        <Footer />
      </div>
      <div style={{ position: "absolute", top: "843px", left: "336px" }}>
        <FooterMobile />
      </div>
    </div>
  );
}

export default HeadersFooters;
