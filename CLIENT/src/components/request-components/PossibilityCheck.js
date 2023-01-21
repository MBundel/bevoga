import React, { useEffect, useState, useCallback  } from "react";
import { Link } from "react-router-dom";
import Anzeigepflichtverletzung from '../../documents/Anzeigepflichtverletzung.pdf';

//import Mui

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Checkbox } from "@mui/material";
import { green } from "@mui/material/colors";
import { red } from "@mui/material/colors";

function PossibilityCheck(props) {
  //init checkboxes +  radios

  //radios
  const [status, setStatus] = useState("true");
  const [insurance, setInsurance] = useState("true");

  //checkboxes
  const [gesundheitsfrage1, setGesundheitsfrage1] = useState(true);
  const [gesundheitsfrage2, setGesundheitsfrage2] = useState(true);
  const [gesundheitsfrage3, setGesundheitsfrage3] = useState(true);
  const [gesundheitsfrage4, setGesundheitsfrage4] = useState(true);
  const [gesundheitsfrage5, setGesundheitsfrage5] = useState(true);

  const [angabenCheck, setAngabencheck] = useState(false);
  const [disabeldButton, setButtonState] = useState(true);

  //validate infotext

  const [infoText, setInfotext] = useState(false);
  const showInfoText = () => {
    if (
      status !== "true" ||
      insurance !== "true" ||
      gesundheitsfrage1 === false ||
      gesundheitsfrage2 === false ||
      gesundheitsfrage3 === false ||
      gesundheitsfrage4 === false ||
      gesundheitsfrage5 === false
    ) {
      setInfotext(true);
    } else {
      setInfotext(false);
    }
    
  };

// --------------- Enable/Disable Button NEXT -----------------------
  const handleButtonState = useCallback(() => {

    
    if (
      status === "true" &&
      insurance === "true" &&
      angabenCheck === true &&
      gesundheitsfrage1 === true &&
      gesundheitsfrage2 === true &&
      gesundheitsfrage3 === true &&
      gesundheitsfrage4 === true &&
      gesundheitsfrage5 === true
    ) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
    showInfoText();
  }, [
    status,
    insurance,
    angabenCheck,
    gesundheitsfrage1,
    gesundheitsfrage2,
    gesundheitsfrage3,
    gesundheitsfrage4,
    gesundheitsfrage5,
    showInfoText
  ]);

  useEffect(() => {
    handleButtonState();
  }, [handleButtonState]);



  // long way handleChange of checkboxes
  const handleChange1 = () => {
    setGesundheitsfrage1((prevValue) => !prevValue);
    handleButtonState();
    
  };
  const handleChange2 = () => {
    setGesundheitsfrage2((prevValue) => !prevValue);
    handleButtonState();
    
  };
  const handleChange3 = () => {
    setGesundheitsfrage3((prevValue) => !prevValue);
    handleButtonState();
    
  };
  const handleChange4 = () => {
    setGesundheitsfrage4((prevValue) => !prevValue);
    handleButtonState();
    
  };
  const handleChange5 = () => {
    setGesundheitsfrage5((prevValue) => !prevValue);
    handleButtonState();
    
  };
  const handleChange6 = () => {
    setAngabencheck((prevValue) => !prevValue);
    handleButtonState();
    
  };


  // handle change of radio status and insurancy
  // status radio
  const handleRadio1 = (e) => {
    setStatus(e.target.value);
    handleButtonState();
    
  };
  // insurance radio
  const handleRadio2 = (e) => {
    setInsurance(e.target.value);
    handleButtonState();
    
  };



  return (
    <div>
      <div>Können wir dich versichern?</div>
      <div className="checkbox-div">
        <FormControl>
          <FormLabel style={{ color: "white" }}>Wie ist dein Status?</FormLabel>
          <RadioGroup
            defaultValue="true"
            value={status}
            onChange={handleRadio1}
          >
            <FormControlLabel
              value="true"
              name="ableStatus"
              control={<Radio style={{ color: "white" }} />}
              label="angetsellt / verbeamtet / auszubildend"
            />
            <FormControlLabel
              value="false"
              control={<Radio style={{ color: "white" }} />}
              label="studierend / arbeitslos / sonstiges "
              name="unableStatus"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="checkbox-div">
        <FormControl>
          <FormLabel style={{ color: "white" }}>
            Wie bist du krankenversichert?
          </FormLabel>
          <RadioGroup
            defaultValue="true"
            value={insurance}
            onChange={handleRadio2}
          >
            <FormControlLabel
              value="false"
              control={<Radio style={{ color: "white" }} />}
              label="Privat"
            />
            <FormControlLabel
              value="true"
              control={<Radio style={{ color: "white" }} />}
              label="Gesetzlich"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <div className="checkbox-div" display="flex">
          Fragen und Angaben zu gefahrerheblichen Umständen
          <br />
          Nur zutreffendes ankreuzen:
          <div>
            <div>
              <Checkbox
                onChange={(e) => handleChange1(e)}
                value={gesundheitsfrage1}
                defaultChecked={true}
                name="gesundheitsfrage1"
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: red[200],
                  "&.Mui-checked": {
                    color: green[800],
                  },
                }}
              />
            </div>
            <div>
              Ich bin in der Lage, meiner vertragsmäßigen Tagesarbeit sowohl
              mental als auch körperlich nachzugehen
            </div>
          </div>
          {/* start */}
          <div>
            <div>
              <Checkbox
                value={gesundheitsfrage2}
                defaultChecked={true}
                name="gesundheitsfrage2"
                onChange={handleChange2}
                sx={{
                  color: red[200],
                  "&.Mui-checked": { color: green[800] },
                }}
              />
            </div>
            <div display="flex">
              <p>
                Ich war während der letzten 12 Monate aufgrund von Unfall oder
                Krankheit oder eines mehr als altersentsprechenden
                Kräfteverfalls nicht länger als 20 aufeinanderfolgende
                Arbeitstage arbeitsunfähig
              </p>
            </div>
          </div>
          {/* ende */}
          {/* start */}
          <div>
            <div>
              <Checkbox
                onChange={handleChange3}
                value={gesundheitsfrage3}
                defaultChecked={true}
                name="gesundheitsfrage3"
                sx={{
                  color: red[200],
                  "&.Mui-checked": { color: green[800] },
                }}
              />
            </div>
            <div display="flex">
              <p>
                Ich habe in den letzten 12 Monaten nicht aufgrund von Unfall
                oder Krankheit oder eines mehr als altersentsprechenden
                Kräfteverfalls meine Arbeitszeit reduziert, meine normale
                Arbeitstätigkeit oder meinen Arbeitsplatz geändert; dies gilt
                auch für Heimarbeitsplätze, ohne darauf begrenzt zu sein
              </p>
            </div>
          </div>
          {/* ende */}
          {/* start */}
          <div>
            <div>
              <Checkbox
                onChange={handleChange4}
                value={gesundheitsfrage4}
                defaultChecked={true}
                name="gesundheitsfrage4"
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
                Ich habe in den letzten 12 Monaten nicht unter einer anderen
                Berufsunfähigkeitspolice, deren Versicherungsnehmer oder
                versicherte Person ich bin, eine Prämienerhöhung von mehr als
                50% oder eine reduzierte oder abgelehnte Leistungszusage
                erhalten
              </p>
            </div>
          </div>
          {/* ende */}
          {/* start */}
          <div>
            <div>
              <Checkbox
                onChange={handleChange5}
                value={gesundheitsfrage5}
                defaultChecked={true}
                name="gesundheitsfrage5"
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
                Ich habe nicht innerhalb der letzten 60 Tage den ärztlichen Rat
                erhalten, der Arbeit fern zu bleiben und ich habe nicht in den
                letzten drei Monaten medizinische Behandlung oder Versorgung
                einschließlich Diagnosen erhalten
              </p>
            </div>
          </div>
          {/* ende */}
        </div>
        <div className="checkbox-div">
          {/* start */}
          <div>
            <div>
              <Checkbox
                onChange={handleChange6}
                value={angabenCheck}
                defaultChecked={false}
                name="angabenCheck"
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
                Ich habe die oben genannten Fragen wahrheitsgemäß beantwortet
                und bestätige, dass ich vor der Antragstellung die{" "}
                <a href={Anzeigepflichtverletzung}  target="_blank" rel="noreferrer" >
                  {" "}
                  <span className="underlineLink">
                    {" "}
                    „Wichtige Mitteilung über die Folgen einer
                    Anzeigepflichtverletzung nach § 19 Abs. 5
                    Versicherungsvertragsgesetz“
                  </span>
                </a>{" "}
                gelesen habe.
              </p>
            </div>
          </div>
          {/* ende */}
        </div>
      </div>
      <div className="checkbox-div">
        {infoText ? (
          <p style={{ color: "#A4303F" }}>
            {" "}
            <b> Es ist eine individuelle Beratung nötig!</b>
          </p>
        ) : (
          <>
            <b>
              {" "}
              <br />
            </b>
          </>
        )}
        <div className="request-footer-moreButton">
          <div>
            <button
              className="btn btn-transparent"
              onClick={(event) => {
                event.preventDefault();
                props.sendShowLast(true);
                props.sendShowOwn(false);
              }}
            >
              Zurück
            </button>
          </div>
          <Link to="/contact" target="_blank">
            {" "}
            <button
              className="btn btn-transparent"
              onClick={() => {
                props.sendPossibility({
                  "gesundheitsfragen:": {
                    gesundheitsfrage1,
                    gesundheitsfrage2,
                    gesundheitsfrage3,
                    gesundheitsfrage4,
                    gesundheitsfrage5,
                  },
                  "angabencheck:": angabenCheck,
                  status: status,
                  "Krankenversichert:": insurance,
                });
              }}
            >
              Beratung anfordern
            </button>
          </Link>
          <button
            className="btn btn-transparent"
            disabled={disabeldButton}
            onClick={() => {
              props.sendPossibility({
                "gesundheitsfragen:": {
                  gesundheitsfrage1,
                  gesundheitsfrage2,
                  gesundheitsfrage3,
                  gesundheitsfrage4,
                  gesundheitsfrage5,
                },
                "angabencheck:": angabenCheck,
                status: status,
                "Krankenversichert:": insurance,
              });
              props.sendShowNext(true);
              props.sendShowOwn(false);
            }}
          >
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}

export default PossibilityCheck;
