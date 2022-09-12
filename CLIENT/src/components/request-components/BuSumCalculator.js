// import

import * as priceCalculationWhiteCollar from "../../records/PriceCalculation.js";
import React, { useState, useEffect } from "react";

// css import
import "../css/MainPages.css";
import "../css/CalcSlider.css";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

//  prepare for handleChange

function BuSumCalculator() {
  const [sumInsured, setSumInsured] = useState(1000);
  const [ageInsured, setAgeInsured] = useState(40);
  const [showCalc, setShowCalc] = useState(true);
  const [errorText1, setErrorText1] = useState();
  const [errorText2, setErrorText2] = useState();
  const [priceIkkWhite, setPriceIkkWhite] = useState();
  const [priceIkkBlue, setPriceIkkBlue] = useState();
  const [monthlyIncome, setMonthlyIncome] = useState(2000);

  const [checked, setChecked] = useState({
    officeWork: false,
    ikkBonus: false,
    alreadyInsured: false,
  });

  // Calc Data
  const priceList = priceCalculationWhiteCollar.priceCalculationWhiteCollar;

  // ---------- handle validation of input -------------
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

  // handle IKK Bonusprogramm calulation

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
  //------------------ handle Changes ----------------
  // handle Checkboxes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setChecked((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  // handle Sum variables
  const handleSumChange = (e) => {
    setSumInsured(e.target.value);
    validateInput(e);
    calcIkkPrice(e);
  };

  // handle Age variables
  const handleAgeChange = (e) => {
    setAgeInsured(e.target.value);
    validateInput(e);
    calcIkkPrice(e);
  };

  // handle Income variables
  const handleIncomeChange = (e) => {
    setMonthlyIncome(e.target.value);
  };



   //----------------- rerender/ update -------------------
   // get Age/Price-Order
  const yourPrice =
    (priceList
      .filter((priceList) => priceList.age == ageInsured)
      .map((priceList) => priceList.price) /
      1000) *
    sumInsured;


  // update Immeditly

  useEffect(() => {
    validateInput();
  }, [sumInsured, ageInsured]);
  useEffect(() => {
    calcIkkPrice();
  }, [yourPrice]);



  //-------------HTML CODE --------------------------
  return (
    <>

    
      {/* -------------------------- Input Variables ------------------------ */}
      Beitragsgestaltung
      <br />
      <div className="slider-category">
        <p>DEIN MTL. BRUTTOEINKOMMEN</p>
        <input
          type="number"
          min="100"
          max="333333"
          step={100}
          value={monthlyIncome}
          onChange={(e) => {
            handleIncomeChange(e);
          }}
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
      </div>
      <div className="slider-category">
        <p>MTL. ABSICHERUNGSSUMME</p>
        <input
          type="number"
          min="100"
          max={monthlyIncome * 0.75}
          maxLength="6"
          step={100}
          value={sumInsured}
          onChange={(e) => {
            handleSumChange(e);
          }}
        />
        <input
          type="range"
          min={monthlyIncome * 0.075}
          max={monthlyIncome * 0.75}
          step={100}
          value={sumInsured}
          onChange={(e) => {
            handleSumChange(e);
          }}
        />
      </div>

      {/* -------------------------- Output Variables ------------------------ */}
      <div className="slider-category">
        <div className="priceTagHeader">Dein Monatlicher Beitrag</div>
        <div className="priceTag">
          <div className="priceSeperation">
            <div className="depends90">
              {showCalc ? (
                <>
                  {yourPrice.toFixed(2)}
                  <div>€/mtl.</div>
                </>
              ) : (
                errorText1
              )}
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------- Checkboxes ------------------------ */}
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox style={{ color: "white" }} onChange={handleChange} />
          }
          label="Ich arbeite über 90% am Schreibtisch "
        />
        <FormControlLabel
          control={
            <Checkbox style={{ color: "white" }} onChange={handleChange} />
          }
          label="IKK Bonusprogramm einberechnen"
        />
        <FormControlLabel
          control={
            <Checkbox style={{ color: "white" }} onChange={handleChange} />
          }
          label="Es besteht bereits eine Berufsunfähigkeitsversicherung "
        />
      </FormGroup>
      {/* -------------------------- Button Footer ------------------------ */}
      <div className="checkbox-div ">
        <div className="request-footer-moreButton">
          <div className="request-footer-moreButton">
            <button className="btn btn-transparent">Zurück</button>
          </div>

          <button className="btn btn-transparent" disabled={true}>
            Weiter
          </button>
        </div>
      </div>
    </>
  );
}

export default BuSumCalculator;
