import React from "react";

import { useState, useEffect } from "react";



function Options(props) {
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
    setCheckValue1((prevValue) => !prevValue);
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
      props.sendShowOwn(false);
      props.sendShowNext(true);
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
        Antrag
        <div className="checkbox-div">
          <button className="btn btn-white"  
          onClick={() => {
                props.sendShowModal(true);
                props.sendShowOwn(false);
              }}
            >
            Angebot anfordern
          </button>
          <button className="btn btn-white"
           onClick={() => {
            props.sendShowNext(true);
            props.sendShowOwn(false);
          }}>
            Antrag vollständig ausfüllen
          </button>
        </div>
        {/* -------------------------Footer--------------------- */}
      </div>
    </>
  );
}

export default Options;
