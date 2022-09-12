import React from "react";
import { Link } from "react-router-dom";

import "./css/ContactNow.css";
import "./css/Icons.css";

import { MdOutlineContactSupport } from "react-icons/md";
import { TbFileCertificate } from "react-icons/tb";
import { BiShareAlt } from "react-icons/bi";

function ContactNow() {




  const share = () => {
     if (navigator.share){
      navigator.share({
      text: ' Schau mal hier, das ist sehr hilfreich!',
      title: 'Berufsunfähigkeitsversicherung  ohne Gesundheitsfragen',
      url: '/'
    })} else {
      navigator.clipboard.writeText('www.bevoga.de')
    }
  }



  return (
    <div className="sticky-box">
      <div className="sticky-content" onClick={share}>  <BiShareAlt className="icon"size={70} /> <p className="sticky-info">Link teilen</p></div>
     <Link to="/contact"> <div className="sticky-content">  <MdOutlineContactSupport className="icon"size={70} /><p className="sticky-info">Kontakt</p></div></Link>
     <Link to="/request"><div className="sticky-content"><TbFileCertificate className="icon"size={70} /><p className="sticky-info">Zum Antrag</p></div></Link>
    </div>
  );
}

export default ContactNow;
