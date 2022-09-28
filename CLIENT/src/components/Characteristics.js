import React from "react";

import "./css/Characteristic.css";

const Characteristics = (props) => {
  return (
    <div className="char-container">
      <div className="char-containter-top">
        <div className="char-containter-top-content">
          <a href={props.website} target="_blank" rel="noreferrer">
          <img className="char-img" src={props.image} alt={props.srcAlt} /></a>
        </div>
        <div className="char-header char-containter-top-content">
          <div className="char-name">{props.name}</div>
          <div className="char-title">{props.title}</div>
        </div>
      </div>
      <div className="char-container-bottom">
        <div className="char-info-text">{props.infoText}</div>
        <div className="char-info-keyword">
          <div className="infobox">
            {/* Start  */}
            <div className="infobox-row infobox-row-link">
              <div className="infobox-row-content">
                <a href={props.website} target="_blank" rel="noreferrer">Website:</a>
              </div>
              <div className="infobox-row-content">
                <a href={props.website} target="_blank" rel="noreferrer">{props.name}</a>
              </div>
            </div>
            {/* Ende  */}
            {/* Start  */}
            <div className="infobox-row">
              <div className="infobox-row-content">
                <p>Zusatzbeitrag:</p>
              </div>
              <div className="infobox-row-content">
                {props.additionalContribution}
              </div>
            </div>
            {/* Ende  */}
            {/* Start  */}
            <div className="infobox-row">
              <div className="infobox-row-content">
                <p>Benefits:</p>
              </div>
              <div className="infobox-row-content">
                <li>{props.benefits1}</li>
                <li>{props.benefits2}</li>
                <li>{props.benefits3}</li>
              </div>
            </div>
            {/* Ende  */}
            {/* Start  */}
            <div className="infobox-row infobox-row-link">
              <div className="infobox-row-content">
                <p>Mehr Infos:</p>
              </div>
              <div className="infobox-row-content">
                <a href={props.pdfFile} target="_blank" rel="noreferrer">Highlightblatt</a>
              </div>
            </div>
            {/* Ende  */}
            <div className="infobox-row">
              <div className="infobox-row-content">
                <p>Cashback:</p>
              </div>
              <div className="infobox-row-content">{props.chashback}</div>
            </div>
            {/* Ende  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
