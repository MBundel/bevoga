import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import * as partnerChar from "../../records/PartnerChar.js";

function GkvOptions(props) {
  // Modal
  const GKV = partnerChar.PartnerChar;
  const [showModal, setShowModal] = useState(false);

 
// radio1, membership
const[membership, setMembership] = useState("")

const handleRadio1 = (e) =>{
  setMembership(e.target.value)
  handleButtonState()  
  
}


// radio2, Insureance Company
const[company, setCompany] = useState("")

const handleRadio2 = (e) =>{
  setCompany(e.target.value)
  handleButtonState()  
  
}

// disabeld button

const [disabledButton, setButtonState] = useState(true);


// handle buttonState

const handleButtonState = () => {    
  if (membership  && company) {
    setButtonState(false);
  }
  
};
// immediately update

useEffect(() => {
  handleButtonState();
}, [company, membership]);

//-------------------HTML CODE ----------------------
  return (
    <div>
      <div>Vorbereitung zum Antrag</div>
      <div className="checkbox-div">
        <FormControl>
          {" "}
          Für den Antrag musst du Mitgleid einer der unten genannten
          Krankenkassen sein.
          <FormLabel  style={{ color: "white" }}>Dein Status</FormLabel>
          <RadioGroup value={membership} onChange={handleRadio1}>
            <FormControlLabel
              value="exchange"
              control={<Radio style={{ color: "white" }} />}
              label="Wechsel gewünscht"
            />
            <FormControlLabel
              value="member"
              control={<Radio style={{ color: "white" }} />}
              label="bereits Mitglied"
            />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel style={{ color: "white" }} >
            Wo bist du krankenversichert?
          </FormLabel>
          <RadioGroup value={company} onChange={handleRadio2}>
            <FormControlLabel
              value="IKK"
              control={<Radio style={{ color: "white" }} />}
              label="IKK Innovationskasse"
            />
            <FormControlLabel
              value="viaktiv"
              control={<Radio style={{ color: "white" }} />}
              label="VIAKTIV "
            />
            <FormControlLabel
              value="knappschaft"
              control={<Radio style={{ color: "white" }} />}
              label="KNAPPSCHAFT "
            />
          </RadioGroup>
        </FormControl>

        <div
          className="modal-box"
          onClick={() => setShowModal((prevValue) => !prevValue)}
        >
          Bonusprogramme{" "}
        </div>


         {/*  Modal Bonusprogramme */}
        {showModal ? (
          <>
            <div
              className="modal"
              onMouseLeave={() => setShowModal((prevValue) => !prevValue)}
            >
              {GKV
                .filter((GKV) => GKV.companyType === "GKV")
                .map((GKV) => (
                  <div className="modal-list">
                    <div>
                    <div className="char-containter-top-content">
                      <a href={GKV.website} target="_blank" rel="noreferrer">
                        <img
                          className="char-img"
                          src={GKV.img}
                          alt={GKV.srcAlt}
                        />
                      </a>
                    </div>
                    <div>
                      <div className="char-info-keyword">
                        <div className="infobox">
                          {/* Start  */}
                          <div className="infobox-row infobox-row-link">
                            <div className="infobox-row-content">
                              <a href={GKV.website}>Website:</a>
                            </div>
                            <div className="infobox-row-content">
                              <a
                                href={GKV.website}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {GKV.name}
                              </a>
                            </div>
                          </div>
                          {/* Ende  */}
                          {/* Start  */}
                          <div className="infobox-row">
                            <div className="infobox-row-content">
                              <p>Zusatzbeitrag:</p>
                            </div>
                            <div className="infobox-row-content">
                              {GKV.keywords.additionalContribution}
                            </div>
                          </div>
                          {/* Ende  */}
                          {/* Start  */}
                          <div className="infobox-row">
                            <div className="infobox-row-content">
                              <p>Benefits:</p>
                            </div>
                            <div className="infobox-row-content">
                              <li>{GKV.keywords.benefits[0]}</li>
                              <li>{GKV.keywords.benefits[1]}</li>
                              <li>{GKV.keywords.benefits[2]}</li>
                            </div>
                          </div>
                          {/* Ende  */}
                          {/* Start  */}
                          <div className="infobox-row infobox-row-link">
                            <div className="infobox-row-content">
                              <p>Mehr Infos:</p>
                            </div>
                            <div className="infobox-row-content">
                              <a
                                href={GKV.keywords.pdf}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Highlightblatt
                              </a>
                            </div>
                          </div>
                          {/* Ende  */}
                          <div className="infobox-row">
                            <div className="infobox-row-content">
                              <p>Cashback:</p>
                            </div>
                            <div className="infobox-row-content">
                              {GKV.keywords.chashback}
                            </div>
                          </div>
                          {/* Ende  */}
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                ))}
            </div>
          </>
        ) : null}
 {/* end of Modal Bonusprogramme  */}
 
      </div>
      <div className="checkbox-div ">
        <div className="request-footer-moreButton">
          <div className="request-footer-moreButton">
            <button className="btn btn-transparent"
            onClick={()=>{
              props.sendShowOwn(false)
              props.sendShowLast(true)
            }}
            >Zurück</button>
          </div>

          <button className="btn btn-transparent" disabled={disabledButton}
          onClick={()=>{
            props.sendCompany(company)
            props.sendMembership(membership)
            props.sendShowOwn(false)
            props.sendShowNext(true)
            }}>
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}

export default GkvOptions;
