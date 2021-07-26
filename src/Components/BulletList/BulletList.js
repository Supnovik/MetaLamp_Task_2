import React, { useRef } from "react";
import "./BulletList.scss";

function BulletList({ list }) {
  let checkList = useRef(list);

  return (
    <div className="bullet-list">
      {checkList.current.map((item) => {
        return (
          <div>
            <div />
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BulletList;
