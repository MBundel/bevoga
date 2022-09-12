import React from "react";
import { useState } from "react";

import "./css/Infocards.css";

import { GoInfo } from "react-icons/go";
import { MdUnfoldMore } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { TbFileCertificate } from "react-icons/tb";
import { SiWhatsapp } from "react-icons/si";
import { MdCameraFront } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { IoMdPhonePortrait } from "react-icons/io";

function CustomInfocards(props) {
  const [text, setText] = useState("Damit du weßt, was dich gleich erwartet");
  const [textLong, settextLong] = useState("Damit du weßt, was dich gleich erwartet");
  const [show, setShow] = useState(false);

  

  function textOne() {
    setText(props.infoTextOneShort);
    settextLong(props.infoTextOneLong);
    
  }
  function textTwo() {
    setText(props.infoTextTwoShort);
    settextLong(props.infoTextTwoLong);
    
  }
  function textThree() {
    setText(props.infoTextThreeShort);
    settextLong(props.infoTextThreeLong);
    
  }
  function textToContact() {
    setText(
      <>
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
            <a href="mailto:info@bevoga.de">
              <HiMail className="icon" size={20} />
            </a>
          </td>
          <td>
            <a href="mailto:info@bevoga.de">info@bevoga.de</a>
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <a href="tel:+4944121213023">
              <IoMdPhonePortrait className="icon" size={20} />
            </a>
          </td>
          <td>
            <a href="tel:+4944121213023">0441- 21 21 30 23</a>
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <a href="https://www.termininfo.net/fimdeu/berufsunfaehigkeitsversicherung">
              <MdCameraFront className="icon" size={20} />
            </a>
          </td>
          <td>
            <a href="https://www.termininfo.net/fimdeu/berufsunfaehigkeitsversicherung">
              Online-Termin
            </a>
          </td>
        </tr>
        <br />
      </>
    );
    settextLong("");
    
  }

  return (
    <div className="infocard-backround">
      <div className="infocard">
        <div className="infocard-header">
          <h1>Wie sieht ein Antrag aus?</h1>
        </div>
        <div className="infocard-section">
          <div
            className="infocard-icon-card"
            onClick={() => {
              setShow(false);
              textOne();
            }}
          >
            <div className="infocard-icon-card-icon">
              <GoInfo size={50} />
            </div>
            <div className="infocard-icon-card-text">BEITRAG</div>
          </div>
          <div
            className="infocard-icon-card"
            onClick={() => {
              setShow(false);
              textTwo();
            }}
          >
            <div className="infocard-icon-card-icon">
              <GoInfo size={50} />
            </div>
            <div className="infocard-icon-card-text">VORRAUSSETZUNGEN</div>
          </div>
          <div
            className="infocard-icon-card"
            onClick={() => {
              setShow(false);
              textThree();
            }}
          >
            <div className="infocard-icon-card-icon">
              <GoInfo size={50} />
            </div>
            <div className="infocard-icon-card-text">STEP BY STEP</div>
          </div>
        </div>
        <div className="infocard-body">
          <div>
            <p>
              {!show ? text : null} {show ? textLong : null}
            </p>
          </div>
          <div className="infocard-body-link">
            <table>
              {/* <tr>
                <td className="infocard-table">
                  <a href={link}>
                    <CgInternal size={20} />
                  </a>
                </td>
                <td className="infocard-table">
                  <a href={link} target={"_blank"} rel="noreferrer">
                   <p> ZUM ARTIKEL</p>
                  </a>
                </td>
              </tr> */}

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
                  <p>BEITRAG</p>
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
                  <p>VORRAUSSETZUNGEN</p>
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
                  <p>STEP BY STEP</p>
                </td>
              </tr>
              <tr
                onClick={() => {
                  setShow(true);
                }}
              >
                <td className="infocard-table">
                  <MdUnfoldMore size={20} />
                </td>
                <td className="infocard-table">
                  <p>MEHR INFOS</p>
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
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomInfocards;


