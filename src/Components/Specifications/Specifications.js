import React from "react";
import "./Specifications.scss";

function Specifications({ list }) {
  return (
    <div className="Specifications">
      {list.map((item) => {
        return (
          <div key={item.title} className="Specifications-list-item">
            <div>
              <img alt="" src={item.img}></img>
              <div className="text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
            <div className="underline"></div>
          </div>
        );
      })}
    </div>
  );
}
export default Specifications;
