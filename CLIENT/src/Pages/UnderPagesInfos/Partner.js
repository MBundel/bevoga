import React from "react";
import Characteristics from "../../components/Characteristics";
import * as partnerChar from "../../records/PartnerChar.js";
import { Button } from "../../components/Button";
import {Helmet} from 'react-helmet-async'

import "../../css/MainPages.css";

const characteristics = partnerChar.PartnerChar;

export default function Partner() {
  return (
    <div>
        
     <Helmet>
      <title>Alles über unsere  Bu-Partner </title>
      <meta name="description" content="Bibliothek unserer bevoga-Absicherung"/> 
      <link rel="canonical" href="/partner" />
    </Helmet>
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