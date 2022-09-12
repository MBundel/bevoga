import React from "react";
import Characteristics from "../Characteristics";
import * as partnerChar from "../../records/PartnerChar.js";
import { Button } from "../Button";

import "../css/MainPages.css";

const characteristics = partnerChar.PartnerChar;

export default function Partner() {
  return (
    <div>
      <img
        src="./img/Partner.jpg"
        alt="fragezeichen"
        className="background-img"
      />
      <div className="space"></div>
      {characteristics.map((characteristics) => (
        <Characteristics
          image={characteristics.img}
          imageAlt={characteristics.imgAlt}
          name={characteristics.name}
          title={characteristics.title}
          infoText={characteristics.infoText}
          website={characteristics.keywords.website}
          additionalContribution={
            characteristics.keywords.additionalContribution
          }
          benefits1={characteristics.keywords.benefits[0]}
          benefits2={characteristics.keywords.benefits[1]}
          chashback={characteristics.keywords.chashback}
          pdfFile={characteristics.keywords.pdf}
        />
      ))}
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
    </div>
  );
}
