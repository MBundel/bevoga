import React from "react";
import { Checkbox } from "@mui/material";
import { green } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import { useState, useEffect } from "react";
import pdf1 from "../../documents/erstinformation.pdf";
import pdf2 from "../../documents/beratungsverzicht_bevoga.pdf";

function Permission(props) {

  //checkboxes Values
  const [checkValue1, setCheckValue1] = useState(false);
  const [checkValue2, setCheckValue2] = useState(false);
  const [checkValue3, setCheckValue3] = useState(false);
  const [checkValue4, setCheckValue4] = useState(false);
  const [checkValue5, setCheckValue5] = useState(false);

 
// This  will enable/disable the botton 
  const [buttonState, setButtonState] = useState(true);


 // This  should be the onChange 
  function handleClick1() {
    setCheckValue1(prevValue => !prevValue);
    checkButton();
  }
  function handleClick2() {
    if (checkValue2 == false) {
      setCheckValue2(true);
    } else {
      setCheckValue2(false);
    }
    checkButton();
  }
  function handleClick3() {
    if (checkValue3 == false) {
      setCheckValue3(true);
    } else {
      setCheckValue3(false);
    }
    checkButton();
  }
  function handleClick4() {
    if (checkValue4 == false) {
      setCheckValue4(true);
    } else setCheckValue4(false);
  }
  function handleClick5() {
    if (checkValue5 == false) {
      setCheckValue5(true);
    } else setCheckValue5(false);
  }


  // This validate, if the three checkboxes are clicked to disable/enable the botton
  function checkButton() {
    if (checkValue1 === true && checkValue2 === true && checkValue3 === true) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  }

  // This will double check, if validation is correact and send data to parent component
  function handleSubmit() {
    if (checkValue1 === true && checkValue2 === true && checkValue3 === true) {
      props.sendShowPermission(false);
      props.sendShowFormForRequest(true);
    } else {
      alert("die notwendigen Haken setzen!");
    }
  }
  
// this updates  values immideatly
  useEffect(() => {
    checkButton();
  }, [checkValue1, checkValue2, checkValue3, checkValue4, checkValue5]);

  //HTML Stuff
  return (
    <>
     
        <div>
          Allgemeine Informationen
          <div className="checkbox-div">
            <div>
              <div>
                <Checkbox
                  sx={{
                    color: red[200],
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                  checked={checkValue1}
                  onClick={handleClick1}
                />
              </div>
              <div display="flex">
                <p>
                  Ich bestätige, die&nbsp;
                  <a href={pdf1} target="_blank" rel="noreferrer">
                    <span className="underlineLink">
                      {" "}
                      Erstinformationen für Versicherungsmakler gemäß §15
                      VersVerm
                    </span>
                  </a>
                  die&nbsp; gelesen zu haben.
                </p>
              </div>
            </div>
            <div>
              <div>
                <Checkbox
                  sx={{
                    color: red[200],
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                  checked={checkValue2}
                  onClick={handleClick2}
                />
              </div>
              <div>
                <p>
                  Ich bestätige, den
                  <a href={pdf2} target="_blank" rel="noreferrer">
                    {" "}
                    <span className="underlineLink">
                      Beratungs- und Dokumentationsverzicht
                    </span>
                  </a>{" "}
                  gelesen zu haben und erkläre mich damit einverstanden. Ich bin
                  mir bewusst, dass dieser Verzicht sich negativ auf meine
                  Möglichkeit auswirkt, Schadenersatz gegen den
                  Versicherungsmakler gemäß § 63 VVG geltend zu machen.
                </p>
              </div>
            </div>
            <div>
              <div>
                <Checkbox
                  sx={{
                    color: red[200],
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                  checked={checkValue3}
                  onClick={handleClick3}
                />
              </div>
              <div>
                <p>
                  Ich habe die Hinweise zum
                  <a href="/privacy" target="_blank" rel="noreferrer">
                    <span className="underlineLink">
                      {" "}
                      Datenschutz zur Kenntnis genommen
                    </span>
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="checkbox-div">
            <div> Ich möchte regelmäßige Updates erhalten</div>
            <div>
              {" "}
              <label htmlFor="">
                <Checkbox
                  sx={{
                    color: green[50],
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                  checked={checkValue4}
                  onClick={handleClick4}
                />
                per Mail
              </label>
            </div>
            <div>
              <label htmlFor="">
                {" "}
                <Checkbox
                  sx={{
                    color: green[50],
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                  checked={checkValue5}
                  onClick={handleClick5}
                />
                per WhatsApp
              </label>
            </div>
          </div>
          <div className="request-footer">
            <button
              disabled={buttonState}
              onClick={() => {
                handleSubmit();                
                props.sendPermissionWA(checkValue4)
                props.sendPermissionMail(checkValue5)
              }}
              className="btn btn-transparent"
            >
              Weiter
            </button>
          </div>
        </div>
      
    </>
  );
}

export default Permission;
