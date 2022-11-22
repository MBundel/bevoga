import React from "react";
import { Button } from "../Button";
import * as buquestions from "../../records/BuQuestions.js";
import Accordionfunction from "../Accordion";
import {Helmet} from 'react-helmet-async'

import "../css/MainPages.css";



const buQuestionsKiss = buquestions.buQuestionsKiss;
const buQuestionsLong = buquestions.buQuestionsLong;

export default function WhatsaBu() {
  return (
    <>
      
     <Helmet>
      <title>Was ist eine Berufsunfähigkeitsversicherung  </title>
      <meta name="description" content="Alle wichtigen Infos im Überblick"/> 
      <link rel="canonical" href="/whatsabu" />
    </Helmet>
      <div className="background">
      <img src="./img/whatsabu.jpg" alt="fragezeichen" className="background-img" />
      <div className="space"></div>
        <div className="contentDiv">
          {/* <Kiss /> */}
          <div className="headline">
            <h1>KEEP IT SHORT AND SIMPLE</h1>
          </div>

          <Accordionfunction data={buQuestionsKiss} />

          <br />
          <img
            src="./img/aNachB.png"
            alt=""
            style={{ width: "40%", marginLeft: "30%" }}
          />
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
          <br />
          <div className="headline">
            <h1>DETAILIERT</h1>
          </div>

          <Accordionfunction data={buQuestionsLong} />
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
          <br />
        </div>
      </div>
    </>
  );
}
