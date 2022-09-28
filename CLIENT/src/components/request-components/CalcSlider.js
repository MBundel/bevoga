import * as priceCalculationWhiteCollar from "../../records/PriceCalculation.js";
import React, { useState, useEffect } from "react";

import { RiQuestionnaireLine } from "react-icons/ri";

import "../css/MainPages.css";
import "../css/CalcSlider.css";

  //-------------------------- useEffect -------------------------------

function CalcSlider() {
  const [sumInsured, setSumInsured] = useState(1000);
  const [ageInsured, setAgeInsured] = useState(40);
  const [showCalc, setShowCalc] = useState(true);
  const [errorText1, setErrorText1] = useState();
  const [errorText2, setErrorText2] = useState();
  const [priceIkkWhite, setPriceIkkWhite] = useState();
  const [priceIkkBlue, setPriceIkkBlue] = useState();
  const [values, setValues] = useState({
    infoBonusProgram: false,
  });

  // -----------------Calc Data Source ------------------------------
  const priceList = priceCalculationWhiteCollar.priceCalculationWhiteCollar;

  //--------------------validation of input -------------------------
  const validateInput = (e) => {
    if (
      sumInsured < 250001 &&
      sumInsured > 99 &&
      ageInsured > 17 &&
      ageInsured < 68
    ) {
      setShowCalc(true);
      setErrorText1();
      setErrorText2();
    } else {
      setShowCalc(false);
      if (ageInsured < 18) {
        setErrorText1("nur Azubis u18 möglich");
        setErrorText2("max 1000€ Abs./20€p/M ");
      }
      if (ageInsured > 67) {
        setErrorText1(" bis max 67. Jahre");
        setErrorText2("");
      }
      if (ageInsured > 300000) {
        setErrorText2("älter als die Menschheit");
      }
      if (sumInsured > 250000) {
        setErrorText1("max 250.000€");
        setErrorText2("pro Monat");
      }
      if (sumInsured < 100 || ageInsured < 1) {
        setErrorText1("bitte gültige");
        setErrorText2(" Zahlen eingeben");
      }
    }
  };

  // -----------handle Change ageInsured and sumInsured---------

  // handle Sum
  const handleSumChange = (e) => {
    setSumInsured(e.target.value);
    validateInput(e);
    calcIkkPrice(e);
  };
  // handle Age
  const handleAgeChange = (e) => {
    setAgeInsured(e.target.value);
    validateInput(e);
    calcIkkPrice(e);
  };
// calc Price figure
  const yourPrice =
    (priceList
      .filter((priceList) => priceList.age == ageInsured) // === parseInt()
      .map((priceList) => priceList.price) /
      1000) *
    sumInsured;

  // handle IKK Bonusprogramm Kalulation

  const calcIkkPrice = () => {
    if (yourPrice - 500 / 12 < 0) {
      setPriceIkkWhite(0);
    } else {
      setPriceIkkWhite(yourPrice - 500 / 12);
    }
    if (yourPrice * 1.75 - 500 / 12 < 0) {
      setPriceIkkBlue(0);
    } else {
      setPriceIkkBlue(yourPrice * 1.75 - 500 / 12);
    }
  };

  // show/hide Infobox for BonusProgram

  const showInfoBoxBonusProgram = () => {
    setValues({ infoBonusProgram: true });
  };
  const hideInfoBoxBonusProgram = () => {
    setValues({ infoBonusProgram: false });
  };

  // ------------------ useEffect ----------------------

  useEffect(() => {
    validateInput();
  }, [sumInsured, ageInsured]);
  useEffect(() => {
    calcIkkPrice();
  }, [yourPrice]);
//--------------------------- HTML Code ----------------------------------
  return (
    <>
      <div className="calcSliderBox">
        Beitragsgestaltung
        <br />
        <div className="slider-category">
          <p>MTL. ABSICHERUNGSSUMME</p>
          <input
            type="number"
            min="1000"
            max="250000"
            maxLength="6"
            step={100}
            value={sumInsured}
            onChange={(e) => {
              handleSumChange(e);
            }}
          />
          <input
            type="range"
            min="1000"
            max="10000"
            step={100}
            value={sumInsured}
            onChange={handleSumChange}
          />
        </div>
        <div className="slider-category">
          <p>ALTER</p>
          <input
            type="number"
            min="18"
            max="67"
            maxLength="2"
            pattern="[0-9]*"
            value={ageInsured}
            onChange={handleAgeChange}
          />
          <input
            type="range"
            min="18"
            max={67}
            value={ageInsured}
            onChange={handleAgeChange}
          />
        </div>
        <div className="slider-category">
          {" "}
          {values.infoBonusProgram ? (
            <>
              <div
                className="infoBoxBonusprogramm"
                onMouseEnter={showInfoBoxBonusProgram}
                onMouseLeave={hideInfoBoxBonusProgram}
              >
                {" "}
                <p>
                  mit dem Bonusprogramm der IKK Innovationskasse werden bis zu
                  500 €/Jahr für eine Berufsunfähigkeitsversicherung gefördert. Warum
                  sie das tun, kannst du <a href="/bonus" target="_blank" rel="noreferrer"> <span className="underlineLink">hier lesen</span> </a>
                </p>
              </div>
            </>
          ) : null}
          <div className="priceTagHeader">
            <div>
              <p>BÜROJOBS</p>
            </div>
          </div>
          <div className="priceTagHeader">
            <div>
              <p>normaler Tarif</p>
            </div>
            <div>
              <p></p>
            </div>

            <div>
              <p>
                mit Bonusprogramm{" "}
                <RiQuestionnaireLine
                  size={25}
                  onMouseEnter={showInfoBoxBonusProgram}
                  onMouseLeave={hideInfoBoxBonusProgram}
                />
              </p>
            </div>
          </div>
          <div className="priceTag">
            <div className="priceSeperation">
              <div className="under90">
                {showCalc ? (
                  <>
                    {Math.round(yourPrice)}
                    <div>€/mtl.</div>
                  </>
                ) : (
                  errorText1
                )}
              </div>
              <div className="middle90"></div>
              <div className="over90">
                {showCalc ? (
                  <>
                    {Math.round(priceIkkWhite)} <div>€/mtl.</div>
                  </>
                ) : (
                  errorText2
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="slider-category">
          <div className="priceTagHeader">
            <div>
              <p> SONSTIGE JOBS</p>
            </div>
          </div>
          <div className="priceTagHeader">
            <div>
              <p>normaler Tarif</p>
            </div>
            <div>
              <p></p>
            </div>

            <div>
              <p>
                mit Bonusprogramm{" "}
                <RiQuestionnaireLine
                  size={25}
                  onMouseEnter={showInfoBoxBonusProgram}
                  onMouseLeave={hideInfoBoxBonusProgram}
                />
              </p>
            </div>
          </div>
          <div className="priceTag">
            <div className="priceSeperation">
              <div className="under90">
                {showCalc ? (
                  <>
                    {Math.round(yourPrice * 1.75)} <div>€/mtl.</div>
                  </>
                ) : (
                  errorText1
                )}
              </div>
              <div className="middle90"></div>
              <div className="over90">
                {showCalc ? (
                  <>
                    {Math.round(priceIkkBlue)}
                    <div>€/mtl.</div>
                  </>
                ) : (
                  errorText2
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalcSlider;
