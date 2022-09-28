
import { useState, useEffect } from "react";

import Musterpolice from "../../documents/Musterpolice.pdf";
import Schweigepflichtsentbindung from "../../documents/Schweigepflichtsentbindung.pdf";
import Zahlungsverzug from "../../documents/Zahlungsverzug.pdf";



import { Checkbox } from "@mui/material";
import { green } from "@mui/material/colors";
import { red } from "@mui/material/colors";

function NecessaryApproval(props) {
  //----------------------validate Button --------------------------
  const [disabeld, setDisabeld] = useState(true);
  const [values, setValues] = useState({
    check1: false,
    check2: false,
    check3: false,
  });

  // ----- Handle Checkbox-----

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name] : e.target.checked
    })
    console.log(values)
    handleButtonState()
  };

//handle Button
  const handleButtonState = (e) => {
    if (
      values.check1 === true &&
      values.check2 === true &&
      values.check3 === true
    ) {
      setDisabeld(false);
    } else {
      setDisabeld(true);
    }
  };

  // handle refresh
  useEffect(() => {
    handleButtonState();
  }, [values]);

  //--------------------------HTML CODE --------------------------------
  return (
    <>
      Vertragsnotwendige Zustimmungen
      <div className="checkbox-div">
        <div>
          <div>
          
            <Checkbox
              onChange={handleChange}              
              checked={values.check1}
              name="check1"
              sx={{
                color: red[200],
                "&.Mui-checked": {
                  color: green[800],
                },
              }}
            />
          
          
        
       
          </div>
          <div display="flex">
            <p>
              Ich bestätige, die&nbsp;
              <a href={Zahlungsverzug} target="_blank" rel="noreferrer">
                <span className="underlineLink">
                  {" "}
                  Wichtige Mitteilung über die Folgen des Zahlungsverzugs der
                  Erstprämie oder Einmalprämie
                </span>
              </a>
              &nbsp; erhalten zu haben.
            </p>
          </div>
        </div>
        <div>
          <div>
            <Checkbox
              onChange={handleChange}
              checked={values.check2}
              name="check2"
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
              Ich bestätige, dass ich vor Abgabe meiner Vertragserklärung die
              <a href={Musterpolice} target="_blank" rel="noreferrer">
                {" "}
                <span className="underlineLink">
                  Vertragsunterlagen einschließlich der Versicherungsbedingungen
                  zur Berufsunfähigkeitsabsicherung bBU Collect Plus, das
                  Produktinformationsblatt, das Versichererinformationsblatt
                  sowie die Beitragsübersicht
                </span>
              </a>{" "}
              erhalten habe.
            </p>
          </div>
        </div>
        <div>
          <div>
            <Checkbox
              onChange={handleChange}
              checked={values.check3}
              name="check3"
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
              Ich stimme allen vertragsnotwendigen{" "}
              <a
                href={Schweigepflichtsentbindung}
                target="_blank"
                rel="noreferrer"
              >
                <span className="underlineLink">
                  Einwilligung in die Verwendung von der Schweigepflicht
                  geschützter Daten und Schweigepflichtentbindung
                </span>
              </a>{" "}
              zu.
            </p>
          </div>
          
        </div>
      </div>
      
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

export default NecessaryApproval;
