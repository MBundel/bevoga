import React, { useState } from "react";

import { Checkbox } from "@mui/material";
import { green } from "@mui/material/colors";
import { red } from "@mui/material/colors";

function PersonalData2(props) {
  const [disabeld, setDisabeld] = useState();
  const [type, setType] = useState("text")
  const [values, setValues] = useState({
    jobTitle: "",
    jobBegin: "",
    IBAN: "",
    BIC: "",
    bank: "",
    contactKK: false,
    perusal: false,
  });
//--------------------handle Change ----------------------
//handleChange Input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
// handle Type Change
const handleType = () => {
  setType("date")
}


// ------------------------- HTML CODE -----------------------
  return (
    <>
      <form action="">
        <div className="checkbox-div">
          <input
            onChange={handleChange}
            name="jobTitle"
            value={values.jobTitle}
            type="text"
            placeholder=" Name der beruflichen Tätigkeit"
          />
          <input
          onClick={handleType}
            onChange={handleChange}
            name="jobBegin"
            value={values.jobBegin}
            type={type}
            placeholder="Seit wann tätig"
          />
        </div>
        <div className="checkbox-div">
          <input
            onChange={handleChange}
            name="IBAN"
            value={values.IBAN}
            type="text"
            placeholder="IBAN"
          />
          <input
            onChange={handleChange}
            name="BIC"
            value={values.BIC}
            type="text"
            placeholder=" BIC"
          />
          <input
            onChange={handleChange}
            name="Bank"
            value={values.bank}
            type="text"
            placeholder=" Bankname "
          />
        </div>
 {/* ------------------- CheckBox DIV -----------------------------   */}
        {/* <div className="checkbox-div"> */}
          {/* ----------- CheckBox -----------------   */}
        {/* <div>
            <div>
                <Checkbox
                  sx={{
                    color: red[200],
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                  
                />
              </div>
              <div>
                <p>
                  Ich willige ein, dass die Krankenkasse mich kontaktieren darf.
                </p>
              </div>
            </div> */}
          {/* ----------- CheckBox -----------------   */}
        {/* <div>
            <div>
                <Checkbox
                  sx={{
                    color: red[200],
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                  
                />
              </div>
              <div>
                <p>
                Kenntnisnahme: Die Erhebung der persönlichen Daten ist aufgrund der §§ 206 und 284 Sozialgesetzbuch Fünftes Buch (SGB V) in Verbindung mit § 21 SGB Zehntes Buch (SGB X) zur rechtmäßigen Erfüllung unserer Aufgaben erforderlich. Der Schutz der Sozialdaten nach den Vorschriften des SGB X sowie der DS-GVO (Datenschutzgrundverordnung) ist gewährleistet.
                </p>
              </div>
            </div> */}
          {/* ----------- CheckBox -----------------   */}
        {/* <div>
            <div>
                <Checkbox
                  sx={{
                    color: red[200],
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                  
                />
              </div>
              <div>
                <p>
                    Ich erteile ein SEPA-Mandat zur Abbuchung des Mitgliedschaftsbeitrages 
                </p>
              </div>
            </div>
        </div> */}
      </form>
      {/* -------------------- Footer -------------------- */}
      <div className="checkbox-div ">
        <div className="request-footer-moreButton">
          <div className="request-footer-moreButton">
            {/* -------------------- Button Back -------------------- */}
            <button
              className="btn btn-transparent"
              onClick={() => {
                props.sendShowLast(true);
                props.sendShowOwn(false);
              }}
            >
              Zurück
            </button>
          </div>
          {/* -------------------- Button Next -------------------- */}
          <button
            className="btn btn-transparent"
            disabled={disabeld}
            onClick={() => {
              props.sendShowNext(true);
              props.sendShowOwn(false);
              props.sendData(values);
            }}
          >
            Weiter
          </button>
        </div>
      </div>
    </>
  );
}

export default PersonalData2;
