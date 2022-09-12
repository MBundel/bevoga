import React from "react";

import * as infoContent from "../../records/InfoCardsContent.js";
import HeroSection from "../HeroSection";
import Infocards from "../Infocards";
import CalcSlider from "../request-components/CalcSlider.js";

import { Button } from "../Button.js";








const infocardOne = infoContent.infoCardOne;


function Home() {

  
  return (
    <>
      <HeroSection />
      {infocardOne.map((infocardOne) => (
      <Infocards
      key={infocardOne.id}
      header= {infocardOne.header}
      infoTextDefault ={infocardOne.infoTextDefault}
      sectionOne= {infocardOne.sectionOne}
      sectionTwo= {infocardOne.sectionTwo}
      sectionThree= {infocardOne.sectionThree}
      linkOne = {infocardOne.linkOne}
      linkTwo = {infocardOne.linkTwo}
      linkThree = {infocardOne.linkThree}
      infoTextOneShort= {infocardOne.infoTextOneShort}
      infoTextTwoShort={infocardOne.infoTextTwoShort}
      infoTextThreeShort={infocardOne.infoTextThreeShort}
      infoTextOneLong={infocardOne.infoTextOneLong}
      infoTextTwoLong={infocardOne.infoTextTwoLong}
      infoTextThreeLong={infocardOne.infoTextThreeLong}   
      />
     ))}
     <CalcSlider/>
     <div className="importantBox">
      <div className="centeredContent">
      <Button
                path="/request"
                class="btn-middle btn-white btn"
                text="zum Antrag"
              />
      </div></div>
    </>
  );
}

export default Home;
