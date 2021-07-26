import React, { useRef, useState } from "react";
import "./Pagination.scss";
import arrow from "../../img/arrow_forward_white.svg";

function Pagination() {
  var [activePage, setActivePage] = useState(1);
  var lastPage = useRef(15);

  return (
    <div className="Pagination">
      <div className="Pagination-buttons">
        {activePage > 1 ? (
          <>
            <button
              onClick={() => setActivePage(activePage - 1)}
              className="arrow arrow-rotate"
            >
              <img src={arrow} alt="" />
            </button>
          </>
        ) : (
          <p></p>
        )}
        {activePage >= 3 ? (
          <>
            <button onClick={() => setActivePage(1)}>1</button>
          </>
        ) : (
          <p></p>
        )}
        {activePage > 3 ? (
          <>
            <div>...</div>
          </>
        ) : (
          <p></p>
        )}
        {activePage !== 1 ? (
          <button onClick={() => setActivePage(activePage - 1)}>
            {activePage - 1}
          </button>
        ) : (
          <p></p>
        )}

        <button className="active">{activePage}</button>

        {activePage < lastPage.current ? (
          <button onClick={() => setActivePage(activePage + 1)}>
            {activePage + 1}
          </button>
        ) : (
          <p></p>
        )}

        {activePage === 1 ? (
          <button onClick={() => setActivePage(activePage + 2)}>
            {activePage + 2}
          </button>
        ) : (
          <p></p>
        )}
        {activePage < lastPage.current - 2 ? (
          <>
            <div>...</div>
          </>
        ) : (
          <p></p>
        )}
        {activePage < lastPage.current - 1 ? (
          <>
            <button onClick={() => setActivePage(lastPage.current)}>
              {lastPage.current}
            </button>
          </>
        ) : (
          <p></p>
        )}
        {activePage < lastPage.current ? (
          <>
            <button
              onClick={() => setActivePage(activePage + 1)}
              className="arrow"
            >
              <img src={arrow} alt="" />
            </button>
          </>
        ) : (
          <p></p>
        )}
      </div>
      <p>
        {(activePage - 1) * 12 + 1} - {activePage * 12} из 100+ вариантов аренды
      </p>
    </div>
  );
}

export default Pagination;
