import React from "react";
import { useState } from "react";

import "../css/Infocards.css";

import { GoInfo } from "react-icons/go";
// import { MdUnfoldMore } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { TbFileCertificate } from "react-icons/tb";
import { SiWhatsapp } from "react-icons/si";
import { MdCameraFront } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { IoMdPhonePortrait } from "react-icons/io";

function Infocards(props) {
  const [text, setText] = useState(props.infoTextOneShort);
  const [header, setHeader] = useState(props.h2one);

  const [show, setShow] = useState(false);

  function textOne() {
    setText(props.infoTextOneShort);
    setHeader(props.h2one);
  }
  function textTwo() {
    setText(props.infoTextTwoShort);
    setHeader(props.h2two);
  }
  function textThree() {
    setText(props.infoTextThreeShort);
    setHeader(props.h2three);
  }
  function textToContact() {
    setText(
      <>
        <tbody>
          <tr>
            <td>
              {" "}
              <a
                href="https://api.whatsapp.com/send?phone=4944130916171&text=WhatsApp%20fimdeu"
                target={"_blank"}
                rel="noreferrer"
              >
                <SiWhatsapp className="icon" size={20} />
              </a>
            </td>
            <td>
              {" "}
              <a
                href="https://api.whatsapp.com/send?phone=4944130916171&text=WhatsApp%20fimdeu"
                target={"_blank"}
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <a target="_blank" rel="noreferrer" href="mailto:info@bevoga.de">
                <HiMail className="icon" size={20} />
              </a>
            </td>
            <td>
              <a target="_blank" rel="noreferrer" href="mailto:info@bevoga.de">
                info@bevoga.de
              </a>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <a target="_blank" rel="noreferrer" href="tel:+4944121213023">
                <IoMdPhonePortrait className="icon" size={20} />
              </a>
            </td>
            <td>
              <a target="_blank" rel="noreferrer" href="tel:+4944121213023">
                0441- 21 21 30 23
              </a>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.termininfo.net/fimdeu/bevoga"
              >
                <MdCameraFront className="icon" size={20} />
              </a>
            </td>
            <td>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.termininfo.net/fimdeu/bevoga"
              >
                Online-Termin
              </a>
            </td>
          </tr>
          <br />
        </tbody>
      </>
    );
  }
  // -------------- HTML CODE --------------------
  return (
    <div className="infocard-backround">
      <div className="infocard">
        <div className="infocard-header">
          <h2>{props.header}</h2>
        </div>
        <div className="infocard-section">
          <div
            className="infocard-icon-card"
            onMouseEnter={() => {
              setShow(false);
              textOne();
            }}
          >
            <div className="infocard-icon-card-icon">
              <GoInfo size={50} />
            </div>
            <div className="infocard-icon-card-text">{props.sectionOne}</div>
          </div>
          <div
            className="infocard-icon-card"
            onMouseEnter={() => {
              setShow(false);
              textTwo();
            }}
          >
            <div className="infocard-icon-card-icon">
              <GoInfo size={50} />
            </div>
            <div className="infocard-icon-card-text">{props.sectionTwo}</div>
          </div>
          <div
            className="infocard-icon-card"
            onMouseEnter={() => {
              setShow(false);
              textThree();
            }}
          >
            <div className="infocard-icon-card-icon">
              <GoInfo size={50} />
            </div>
            <div className="infocard-icon-card-text">{props.sectionThree}</div>
          </div>
        </div>
        <div className="infocard-body">
          <div>
            <h2> {!show ? header : null} </h2> <br />
            <p>{!show ? text : null}</p>
          </div>
          <div className="infocard-body-link">
            <table>
              <tbody>
                <tr
                  onClick={() => {
                    setShow(false);
                    textOne();
                  }}
                >
                  <td className="infocard-table">
                    <GoInfo size={20} />
                  </td>
                  <td className="infocard-table">
                    <p>{props.sectionOne}</p>
                  </td>
                </tr>
                <tr
                  onClick={() => {
                    setShow(false);
                    textTwo();
                  }}
                >
                  <td className="infocard-table">
                    <GoInfo size={20} />
                  </td>
                  <td className="infocard-table">
                    <p>{props.sectionTwo}</p>
                  </td>
                </tr>
                <tr
                  onClick={() => {
                    setShow(false);
                    textThree();
                  }}
                >
                  <td className="infocard-table">
                    <GoInfo size={20} />
                  </td>
                  <td className="infocard-table">
                    <p> {props.sectionThree}</p>
                  </td>
                </tr>
                <tr
                  onClick={() => {
                    setShow(false);
                    textToContact();
                  }}
                >
                  <td className="infocard-table">
                    <MdConnectWithoutContact size={20} />
                  </td>
                  <td className="infocard-table">
                    <p> FRAGEN KLÄREN</p>
                  </td>
                </tr>
                <tr>
                  <td className="infocard-table">
                    <a href="/request" target={"_blank"}>
                      <TbFileCertificate size={20} />
                    </a>
                  </td>
                  <td className="infocard-table">
                    <a href="/request" target={"_blank"}>
                      <p>ZUM ANTRAG</p>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infocards;
