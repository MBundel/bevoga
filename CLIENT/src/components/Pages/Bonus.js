import React from "react";

import { Button } from "../Button";

import "../css/MainPages.css";
import "../css/Cards.css";

function Bonus() {
  return (
    <div>
      <img
        src="./img/conzept.jpg"
        alt="fragezeichen"
        className="background-img"
      />
      <div className="space"></div>
      <div className="contentDiv">
        <div className="textBackground">
          <h1>Wieso kostenlos?</h1>
          <p>Ipusm Lorem und so</p> <br />
          <div className="cards__container">
            <div className="cards__wraper">
              <div className="cards__items"></div>
            </div>
          </div>
          <p>lorem ipsum und so</p>
          <br />
        </div>
      </div>
      <br />
      <br />
      <div className="importantBox">
        <div className="centeredContent">
          <Button
            path="/infos"
            class="btn-middle btn-transparent btn"
            text="Mehr infos?"
          />
          <Button
            path="/request"
            class="btn-middle btn-white btn"
            text="zum Antrag"
          />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Bonus;
