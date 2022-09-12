import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import * as partnerChar from "../../records/PartnerChar.js";

function GkvOptions() {
  // Modal
  const props = partnerChar.PartnerChar;
  const [showModal, setShowModal] = useState(true);

  const [checked, setChecked] = useState(true);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div>
      <div>Vorbereitung zum Antrag</div>
      <div className="checkbox-div">
        <FormControl>
          {" "}
          Für den Antrag musst du Mitgleid einer der unten genannten
          Krankenkassen sein.
          <FormLabel style={{ color: "white" }}>Dein Status</FormLabel>
          <RadioGroup>
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
          <FormLabel style={{ color: "white" }}>
            Wo bist du krankenversichert?
          </FormLabel>
          <RadioGroup>
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
        {showModal ? (
          <>
            <div
              className="modal"
              onMouseLeave={() => setShowModal((prevValue) => !prevValue)}
            >
              {props
                .filter((props) => props.companyType === "GKV")
                .map((props) => (
                  <div className="modal-list">
                    <div>
                    <div className="char-containter-top-content">
                      <a href={props.website} target="_blank" rel="noreferrer">
                        <img
                          className="char-img"
                          src={props.img}
                          alt={props.srcAlt}
                        />
                      </a>
                    </div>
                    <div>
                      <div className="char-info-keyword">
                        <div className="infobox">
                          {/* Start  */}
                          <div className="infobox-row infobox-row-link">
                            <div className="infobox-row-content">
                              <a href={props.website}>Website:</a>
                            </div>
                            <div className="infobox-row-content">
                              <a
                                href={props.website}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {props.name}
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
                              {props.keywords.additionalContribution}
                            </div>
                          </div>
                          {/* Ende  */}
                          {/* Start  */}
                          <div className="infobox-row">
                            <div className="infobox-row-content">
                              <p>Benefits:</p>
                            </div>
                            <div className="infobox-row-content">
                              <li>{props.keywords.benefits[0]}</li>
                              <li>{props.keywords.benefits[1]}</li>
                              <li>{props.keywords.benefits[2]}</li>
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
                                href={props.pdfFile}
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
                              {props.chashback}
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
      </div>
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
    </div>
  );
}

export default GkvOptions;
