import React, { useState } from "react";
import {Helmet} from 'react-helmet-async'

import "../../css/MainPages.css";
import "../../css/Icons.css";

import { SiWhatsapp } from "react-icons/si";
import { ImLocation2 } from "react-icons/im";
import { HiMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { MdCameraFront } from "react-icons/md";

const googleMapLink =
  "https://www.google.de/maps/place/fimdeu/@53.1426618,8.2137313,17z/data=!3m1!5s0x47b6df068a3339cd:0xcbbe73723abb59b5!4m12!1m6!3m5!1s0x47b6df2ab7140bbf:0x21f521fca6ebae37!2sfimdeu!8m2!3d53.1426586!4d8.21592!3m4!1s0x47b6df2ab7140bbf:0x21f521fca6ebae37!8m2!3d53.1426586!4d8.21592";
const whatsAppLink =
  "https://api.whatsapp.com/send?phone=4944130916171&text=WhatsApp%20fimdeu";

export default function Contact() {
  const [text, setText] = useState("moin");

  function email() {
    setText(
      <>
        <a className="contactLink" href="mailto:info@bevoga.de">
          info@bevoga.de
        </a>
      </>
    );
  }
  function phone() {
    setText(
      <>
        <a className="contactLink" href="tel:+4944121213023">
          0441- 21 21 30 23
        </a>
      </>
    );
  }
  function location() {
    setText(
      <>
        <a
          className="contactLink"
          target="_blank"
          rel="noreferrer"
          href={googleMapLink}
        >
          Osterstraße 2, 26122 Oldenburg
        </a>
      </>
    );
  }
  function whatsapp() {
    setText(
      <>
        <a
          className="contactLink"
          target="_blank"
          rel="noreferrer"
          href={whatsAppLink}
        >
          Starte Chat
        </a>
      </>
    );
  }
  function online() {
    setText(
      <>
        <a
          className="contactLink"
          target="_blank"
          rel="noreferrer"
          href=" https://www.termininfo.net/fimdeu/bevoga"
        >
          Online-Termin
        </a>
      </>
    );
  }

  return (
    <div>
        
     <Helmet>
      <title>Kontakt </title>
      <meta name="description" content="Melde dich bei uns, wenn du Fragen hast!"/> 
      <link rel="canonical" href="/contact" />
      <meta name="keywords" conent="Berufsunfähigkeitsversicherung ohne Gesundheitsfragen, Kontakt, Mail, Whatsapp, Hotline, Termin " />
    </Helmet>
      <img
        className="background-img"
        src="./img/kontakt.jpg"
        alt="smartphone"
      />
      <div className="space"></div>
      <div className="centered">
        <div> 
          <div className="space_around box-transparent">
            <a href={whatsAppLink} target="_blank" rel="noreferrer" >
              <div onMouseEnter={whatsapp}>
                <SiWhatsapp className="icon" size={70} />
              </div>
            </a>
            <div onClick={location} onMouseEnter={location}>
              <ImLocation2 className="icon" size={70} />
            </div>
            <a href="mailto:info@bevoga.de">
              <div onClick={email} onMouseEnter={email}>
                <HiMail className="icon" size={70} />
              </div>
            </a>
            <a href="tel:+4944121213023">
              <div onClick={phone} onMouseEnter={phone}>
                <FaPhone className="icon" size={70} />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.termininfo.net/fimdeu/berufsunfaehigkeitsversicherung"
            >
              <div onClick={online} onMouseEnter={online}>
                <MdCameraFront className="icon" size={70} />
              </div>
            </a>
          </div>
          <div
            className=" centered box-transparent"
            style={{ width: "100%", paddingTop: "5%", marginTop: "10px" }}
          >
            <div className="centered">
              <h3>{text}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
