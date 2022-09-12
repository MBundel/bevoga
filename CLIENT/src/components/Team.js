import React from "react";

import "./css/Team.css";

const Team = (props) => {
  return (
    <div className="team-container">
      <div className="team-containter-top-content">
        <img className="team-img" src={props.image} alt={props.srcAlt} />
      </div>
      <div className="team-header team-containter-top-content">
        <div className="team-name">{props.name}</div>
        <div className="team-title">{props.title}</div>
      </div>
      <div className="team-info-keyword">
        <div className="infobox">
          <div className="infobox-row">
            <div className="infobox-row-head">Kernkompetenz:</div>
            <div className="infobox-row-content">{props.tasks}</div>
          </div>

          <div className="infobox-row">
            <div className="infobox-row-head">
              <p>Telefon:</p>
            </div>
            <div className="infobox-row-content">
              <a className="contactLink" href={"tel:" + props.phone}>
                {props.phone}{" "}
              </a>
            </div>
          </div>

          <div className="infobox-row">
            <div className="infobox-row-head">
              <p>Mail:</p>
            </div>
            <div className="infobox-row-content">
              <a className="contactLink" href={"mailto:" + props.mail}>
                {props.mail}{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="team-info-text">{props.infoText}</div>
    </div>
  );
};

export default Team;
