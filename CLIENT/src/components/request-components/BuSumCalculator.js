// TASKS:
// maxIncome in function use State als Obj und reduzieren der codes
// bug: IKK und 90% whitecollar  1.82€ -> -MinusZahl -> Null

// import

import * as priceCalculationWhiteCollar from "../../records/PriceCalculation.js";
import React, { useState, useEffect } from "react";

// css import
import "../css/MainPages.css";
import "../css/CalcSlider.css";

// MUI import

import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

function BuSumCalculator(props) {
  //-------------------------- useEffect -------------------------------
  const [showCalc, setShowCalc] = useState(true);
  const [errorText1, setErrorText1] = useState();
  const [ikkBonus, setIkkBonus] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(6000);
  const [sumInsured, setSumInsured] = useState(4000);
  const [ageInsured, setAgeInsured] = useState(40);
  const [whiteCollar, setCollar] = useState(false);
  const [prevBu, setPrevBu] = useState(true);
  const [exBu, setExBu] = useState(0);
  const [maxIncome, setMaxIncome] = useState(10000);
  const [collarFactor, setCollarFactor] = useState(1.75);
  const [ikkCheckbox, setIkkCheckbox] = useState(false);

  //-------------------------- Calc Data Source---------------------------
  const priceList = priceCalculationWhiteCollar.priceCalculationWhiteCollar;

  // --------------------- handle validation of input ----------------------
  //validation of sum and age
  const validateInput = (e) => {
    if (sumInsured > (monthlyIncome - exBu) * 0.75) {
      setSumInsured((monthlyIncome - exBu) * 0.75);
    }
    if (ageInsured > 67) {
      setAgeInsured(67);
    }
    if (
      exBu <= monthlyIncome * 0.75 &&
      sumInsured <= (monthlyIncome - exBu) * 0.75 &&
      sumInsured <= 250000 &&
      sumInsured >= 0 &&
      ageInsured >= 18 &&
      ageInsured <= 67
    ) {
      setShowCalc(true);
      setErrorText1();
    } else {
      setShowCalc(false);
      if (ageInsured < 17) {
        setErrorText1("ungültiges Alter");
      } else if (ageInsured < 18) {
        setErrorText1("20€ für Azubis");
      } else if (ageInsured > 67) {
        setErrorText1(" bis max 67. Jahre");
      } else if (sumInsured > 250000) {
        setErrorText1("max 250.000€ p.M.");
      } else if (sumInsured > maxIncome * 0.75) {
        setErrorText1("max. 75% vom Brutto");
      } else {
        setErrorText1("ungültige Eingaben");
      }
    }
    if (ikkCheckbox === true) {
      getIkkPrice();
    }
  };

  //-------------------------- handle Changes -------------------------------
  //------ handle Checkboxes--------
  // handle existings BU
  const handleChangeExistingBu = (e) => {
    if (prevBu === false) {
      setExBu(0);
    } else {
      setExBu(exBu);
    }
    setPrevBu((prevValue) => !prevValue);
  };
  //inputfield
  const handleExistingBu = (e) => {
    setExBu(e.target.value);
    validateInput();
  };

  // handle white and blue whiteCollar 90%
  const handleChangeCollar = () => {
    setCollar((prevValue) => !prevValue);
    getCollarFactor();
  };

  // hanlde IKK Bonusprogramm
  const handleChangeIkkBonus = () => {
    setIkkCheckbox((prevValue) => !prevValue);
    getIkkPrice();
  };

  //------ handle  input fields--------
  // handle Sum variables
  const handleSumChange = (e) => {
    setSumInsured(e.target.value);
    validateInput(e);
  };
  // handle Age variables
  const handleAgeChange = (e) => {
    setAgeInsured(e.target.value);
    validateInput(e);
  };
  // handle Income variables
  const handleIncomeChange = (e) => {
    setMonthlyIncome(e.target.value);
    validateInput();
  };
  // handle maxOnClick
  const getMaxInsuredSum = () => {
    setSumInsured(monthlyIncome* 0.75 - exBu );
  };

  //-------------------------- calculation formulars -------------------------------
  // get listPrice figure from price list
  const listPrice =
    priceList
      .filter((priceList) => priceList.age == Math.round(ageInsured)) // to do:  == to ===, but how?
      .map((priceList) => priceList.price) / 1000;

  // get sumInsured figure -> by input

  // get Collarfactor figure from blue or white Collar
  const getCollarFactor = () => {
    if (whiteCollar === true) {
      setCollarFactor(1);
    } else {
      setCollarFactor(1.75);
    }
    console.log(finalPrice);
  };
  //

  // calculation of ikk Bonus
  const getIkkPrice = () => {
    if (ikkCheckbox === true) {
      if (listPrice * sumInsured * collarFactor - 500 / 12 < 0) {
      } else {
        setIkkBonus(41.66);
      }
    } else {
      setIkkBonus(0);
    }
  };

  //---- end result / final price ----
  const finalPrice = Math.max(
    listPrice * sumInsured * collarFactor - ikkBonus,
    0
  );

  //-------------------------- useEffects for immediate rerender  -------------------------------
  //console.log for checking

  // console.log("ikk bonus checked: " + ikkCheckbox);
  // console.log("ikk bonus figure: " + ikkBonus);
  // console.log("whitecollar. " + whiteCollar);
  // console.log("end: " + (listPrice * sumInsured * collarFactor - ikkBonus));

  //----- useEffect -----
  //input age and insured sum
  useEffect(() => {
    validateInput();
  }, [sumInsured, ageInsured, exBu, monthlyIncome]);
  //input of already existing Bu

  //input of Collar
  useEffect(() => {
    getCollarFactor();
  }, [whiteCollar]);

  //input of IKK Bonusprogramm
  useEffect(() => {
    getIkkPrice();
  }, [ikkCheckbox]);

  //-------------HTML CODE -------------------------------------------------------------------------------
  return (
    <>
      Beitragsgestaltung
      <br />
      {/* --------- Box one  "" Es besteht eine BU--------- */}
      <div className="slider-category">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: "white" }}
                onClick={handleChangeExistingBu}
              />
            }
            label="Es besteht bereits eine Berufsunfähigkeitsversicherung "
          />
        </FormGroup>

        <input
          onChange={handleExistingBu}
          type="number"
          placeholder="monatliche Absicherungshöhe in € :"
          step={100}
          maxLength="6"
          pattern="[0-9]*"
          disabled={prevBu}
          value={exBu}
        />
      </div>
      {/* --------- Box two Bruttoeinkommen --------- */}
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
      {/* --------- Box three Alter --------- */}
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
      {/* --------- Box four mtl Absicherungsssumme --------- */}
      <div className="slider-category">
        <p>
          MTL. ABSICHERUNGSSUMME{" "}
          <span className="clickable" onClick={getMaxInsuredSum}>
            {" "}
            (max: {(monthlyIncome* 0.75 - exBu ).toFixed(0)} )
          </span>
        </p>
        <input
          type="number"
          min="100"
          max={(monthlyIncome - exBu) * 0.75}
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
          max={monthlyIncome* 0.75 - exBu }
          step={100}
          value={sumInsured}
          onChange={(e) => {
            handleSumChange(e);
          }}
        />
      </div>
      {/* -------------------------- Checkboxes  ü90% + IKK Bonusprogramm------------------------ */}
      <div className="slider-category">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: "white" }}
                onChange={handleChangeCollar}
              />
            }
            label="Ich arbeite über 90% am Schreibtisch "
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: "white" }}
                onChange={handleChangeIkkBonus}
              />
            }
            label="IKK Bonusprogramm einberechnen"
          />
        </FormGroup>
      </div>
      {/* -------------------------- Output Variables ------------------------ */}
      <div className="slider-category">
        <div className="priceTagHeader">Dein Monatlicher Beitrag</div>
        <div className="priceTag">
          <div className="priceSeperation">
            <div className="depends90">
              {showCalc ? (
                <>
                  {finalPrice.toFixed(2)}
                  <div>€/mtl.</div>
                </>
              ) : (
                errorText1
              )}
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------- Button Footer ------------------------ */}
      <div className="checkbox-div ">
        <div className="request-footer-moreButton">
          <div className="request-footer-moreButton">
            <button
              className="btn btn-transparent"
              onClick={() => {
                props.sendShowLast(true);
                props.sendShowown(false);
              }}
            >
              Zurück
            </button>
          </div>

          <button
            className="btn btn-transparent"
            disabled={false}
            onClick={() => {
              props.sendShowNext(true);
              props.sendShowOwn(false);
              props.sendPrice(finalPrice);
              props.sendCollar(whiteCollar);
              props.sendInsuredSum(sumInsured);
              props.sendBrutto(monthlyIncome);
            }}
          >
            Weiter
          </button>
        </div>
      </div>
    </>
  );
}

export default BuSumCalculator;
