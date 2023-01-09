import React from "react";

import * as infoContent from "../../records/InfoCardsContent.js";
import HeroSection from "../../components/HeroSection";
import Infocards from "../../components/Infocards";
import CalcSlider from "../../components/request-components/CalcSlider.js";

import { Button } from "../../components/Button.js";
import { Helmet } from "react-helmet-async";

const infocardOne = infoContent.infoCardOne;

function Home() {
  return (
    <>
      <Helmet>
        <title>bevoga - die BU für jeden</title>
        <meta
          name="description"
          content="Berufsunfähigkeitsversicherung ohne Gesundheitsfragen"
        />
        <link rel="canonical" href="/home" />
        <meta
          name="keywords"
          conent="Berufsunfähigkeitsversicherung ohne Gesundheitsfragen, Bu ohne Gesundheitsprüfung, Bu günstig"
        />
      </Helmet>
      <HeroSection />
      {infocardOne.map((infocardOne) => (
        <Infocards
          key={infocardOne.id}
          header={infocardOne.header}
          infoTextDefault={infocardOne.infoTextDefault}
          sectionOne={infocardOne.sectionOne}
          sectionTwo={infocardOne.sectionTwo}
          sectionThree={infocardOne.sectionThree}
          linkOne={infocardOne.linkOne}
          linkTwo={infocardOne.linkTwo}
          linkThree={infocardOne.linkThree}
          infoTextOneShort={infocardOne.infoTextOneShort}
          infoTextTwoShort={infocardOne.infoTextTwoShort}
          infoTextThreeShort={infocardOne.infoTextThreeShort}
          h2one={infocardOne.h2one}
          h2two={infocardOne.h2two}
          h2three={infocardOne.h2three}
        />
      ))}
      <CalcSlider />
      <div className="importantBox">
        <h2>SICHERE DICH JETZT AB!</h2>
        <br />
        <div className="centeredContent">
          <Button
            path="/request"
            class="btn-middle btn-transparent btn"
            text="zum Antrag"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
