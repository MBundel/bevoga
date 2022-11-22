import React from "react";
import { Link } from "react-router-dom";
import Form from "./request-components/Form";


import "./css/HeroSection.css";
import "./css/Icons.css";

function Herosection() {
  return (
    <div className="hero-container">
      <video src="./videos/handDach_SD.mov" type="video" autoPlay  muted></video>
      <div className="space"></div>
      
        <div className="hero-info-box">
          <h2>BERUFSUNFÄHIGKEITSVERSICHERUNG <br />
          OHNE GESUNDHEITSFRAGEN</h2>
          {/* Container Start */}
          <div className="icon-container">
            <div className="icon-box">
              <i className="gg-check-o"></i>
            </div>
            <div className="icon-text"> Sicher</div>
            <div className="icon-info">
             <a href="/partner"> starke Partner - mit über 200 Jahren Erfahrung und exzellenten
              Auszeichnungen</a>
            </div>
          </div>
          {/* Container Ende */}
          {/* Container Start */}
          <div className="icon-container">
            <div className="icon-box">
              <i className="gg-check-o"></i>
            </div>
            <div className="icon-text"> Einfach</div>
            <div className="icon-info">
              <Link className="icon-flex-content" to="/request" target="_blank">
                <div>Antrag online ausfüllen</div>
                <div className="icon-box">
                  <i className="gg-internal"></i>
                </div>
              </Link>
              <p>oder&nbsp;</p>
              <Link className="icon-flex-content" to="/contact" target="_blank">
                <div>persönlichen Ansprechparnter kontaktieren</div>
                <div className="icon-box">
                  <i className="gg-internal"></i>
                </div>
              </Link>
            </div>
          </div>
          {/* Container Ende */}
          {/* Container Start */}
          <div className="icon-container">
            <div className="icon-box">
              <i className="gg-check-o"></i>
            </div>
            <div className="icon-text"> Schnell</div>
            <div className="icon-info icon-flex-content">
              <div className="icon-flex-content">
                <div>Alle Infos in 5 Minuten </div>
                <div className="icon-box">
                  <i className="gg-arrow-down"></i>
                </div>
              </div>
              <div className="icon-flex-content">
                <div> <a href="/request">Antrag in 10 Minuten</a>  </div>
                <div className="icon-box">
                  <i className="gg-arrow-up"></i>
                </div>
              </div>
              <div className="icon-flex-content">
                <div> Minimaler Aufwand&nbsp;&nbsp;&nbsp;</div>
                <div className="icon-box">
                  <i className="gg-merge-vertical"></i>
                </div>
              </div>
            </div>
          </div>
          {/* Container Ende */}
        </div>
        <div className="space"></div>
        <div className="hero-sub">
          <Form 
          group="subscriber"
          header1="Nichts mehr verpassen"
          header2="Wir befinden uns noch im Aufbau"
          button="Abschicken"
          />
        </div>
        <div className="space"></div>
      
    </div>
  );
}

export default Herosection;


