import React from "react";
import { Link } from "react-router-dom";

import Erstinformation from "../documents/erstinformation.pdf";
// CSS
import "../css/Footer.css";

//ICONS
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-container visible">
      
      <div className="footer-box">
        <div className="footer-links">
          <Link target="_blank" rel="noreferrer" to="/impressum">
            Impressum
          </Link>
        </div>
        <div className="footer-links">
          <a target="_blank" rel="noreferrer" href={Erstinformation}>
            Erstinformation
          </a>
        </div>
        <div className="footer-links">
          <Link target="_blank" rel="noreferrer" to="/privacy">
            Datenschutz
          </Link>
        </div>
        <div className="footer-links">
          <Link target="_blank" rel="noreferrer" to="privacy">
            Cookies
          </Link>
        </div>
      </div>
     
      <div className="footer-sm">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/bevoga.de/"
        >
          {" "}
          <AiOutlineInstagram size={40} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/BevogaDE"
        >
          {" "}
          <AiOutlineFacebook size={40} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/bevoga_fimdeu"
        >
          {" "}
          <AiOutlineTwitter size={40} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/company/bevoga/about/"
        >
          {" "}
          <AiOutlineLinkedin size={40} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
