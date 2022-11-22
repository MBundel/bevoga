import React from "react";
import { Link } from "react-router-dom";

import pdf from "../documents/erstinformation.pdf";

import "./css/Footer.css";

function Footer() {
  return (
    <div className="footer-box visible">
      <div className="footer-links">
        <Link target="_blank" rel="noopener noreferrer" to="/impressum">
          Impressum
        </Link>
      </div>
      <div className="footer-links">
        <a target="_blank" rel="noopener noreferrer" href={pdf}>
          Erstinformation
        </a>
      </div>
      <div className="footer-links">
        <Link target="_blank" rel="noopener noreferrer" to="/privacy">
          Datenschutz
        </Link>
      </div>
      <div className="footer-links">
        <Link target="_blank" rel="noopener noreferrer" to="/">
          Cookies
        </Link>
      </div>
      {/* <div className="footer-links">
        <Link to="/test">Test</Link>
      </div> */}
    </div>
  );
}

export default Footer;
