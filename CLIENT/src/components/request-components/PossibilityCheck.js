import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Checkbox } from "@mui/material";
import { green } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import { blue } from "@mui/material/colors";

function PossibilityCheck() {
  const [checked, setChecked] = useState({
    ableStatus: true,
    unableStatus: "",
    gesundheitsfrage1: false,
    gesundheitsfrage2: true,
    gesundheitsfrage3: true,
    gesundheitsfrage4: true,
    gesundheitsfrage5: true,    
    
  });
  const[angabenCheck, setAngabencheck] = useState()
  const [buttonState, setButtonState] = useState("true");


  const handleButtonState = () => {
    
    // if (checked.angabenCheck === true) {
    //   setButtonState(false);
      
    // } else {
    //   setButtonState(true);
    // }
  };

  const handleChange2 = () =>{
    setAngabencheck(prevValue => !prevValue)
    console.log(angabenCheck)
  }

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setChecked((prevState) => {
      return {
        ...prevState,        
        [name]: value
      };
    });    
    console.log(checked.gesundheitsfrage1)
    
    handleButtonState();
    
  };

 

  return (
    <div>
      <div>Können wir dich versichern?</div>
      <div className="checkbox-div">
        <FormControl>
          <FormLabel style={{ color: "white" }}>Wie ist dein Status?</FormLabel>
          <RadioGroup defaultValue="possible">
            <FormControlLabel
              value="possible"
              name="ableStatus"
              control={<Radio style={{ color: "white" }} />}
              label="angetsellt / verbeamtet / selbstständig / auszubildend"
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
          <RadioGroup defaultValue="gesetzlich">
            <FormControlLabel
              value="privat"
              control={<Radio style={{ color: "white" }} />}
              label="Privat"
            />
            <FormControlLabel
              value="gesetzlich"
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
                defaultChecked="checked"
                onChange={(e) => handleChange(e)}
                value={checked.gesundheitsfrage1}
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
                defaultChecked="checked"
                value={checked.gesundheitsfrage2}
                name="gesundheitsfrage2"
                onChange={handleChange}
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
                defaultChecked="checked"
                onChange={handleChange}
                value={checked.gesundheitsfrage3}
                name="gesundheitsfrage3"
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
                defaultChecked="checked"
                onChange={handleChange}
                value={checked.gesundheitsfrage4}
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
                defaultChecked="checked"
                onChange={handleChange}
                value={checked.gesundheitsfrage5}
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
                onChange={handleChange2}
                value={angabenCheck}
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
                Ich habe die oben genannten Fragen wahrheitsgemäß beantwortet.
              </p>
            </div>
          </div>
          {/* ende */}
        </div>
      </div>
      <div className="checkbox-div">
        "Es ist eine indivnameuelle Beratung nötig. Wenn du auf "Bearatung
        anfordern" klickst, werden wir uns bei dir melden. Sonst klicke auf
        Kontakt."
        <div className="request-footer-moreButton">
          <div>
            <button className="btn btn-transparent">Zurück</button>
          </div>
          <button className="btn btn-transparent">Beratung anfordern</button>
          <button className="btn btn-transparent" disabled={buttonState}>
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}

export default PossibilityCheck;
