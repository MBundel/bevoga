import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

import {GiHamburgerMenu} from "react-icons/gi"



function Navbar() {
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
  
  

 

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="../../img/bevoga_weiss.png" width="110px" height="auto" alt="bevoga-logo" title="bevoga-logo" loading="eager" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
          <GiHamburgerMenu className="icon"/>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/request" className="nav-links" onClick={closeMobileMenu}>
                Zum Antrag
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/infos" className="nav-links" onClick={closeMobileMenu}>
                Alle Infos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                Kontakt
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutUs" className="nav-links" onClick={closeMobileMenu}>
                Über uns
              </Link>
            </li>
            
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
