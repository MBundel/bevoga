import React from "react";
import { Link } from "react-router-dom";

import pdf from '../documents/erstinformation.pdf';

import "./css/Footer.css";


function Footer() {
  return (
    <div className="footer-box visible">
      <div className="footer-links">
        <Link to="/impressum">Impressum</Link>
      </div>
      <div className="footer-links">
        <a href={pdf} target='blank' >Erstinformation</a>
      </div>
      <div className="footer-links">
        <Link to="/privacy">Datenschutz</Link>
      </div>
      <div className="footer-links">
        <Link to="/">Cookies</Link>
      </div>
      <div className="footer-links">
        <Link to="/test">Test</Link>
      </div>
      
    </div>
  );
}

export default Footer;
