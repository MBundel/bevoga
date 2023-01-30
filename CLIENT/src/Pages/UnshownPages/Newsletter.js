import React from "react";

import "../../css/MainPages.css";
import "../../css/Icons.css";
import "../../css/Infos.css";
import { Link } from "react-router-dom";

function Newsletter() {
  return (
    <div>
      <img
        src="./img/unterschrift.jpg"
        alt="fragezeichen"
        className="background-img"
      />
      <div className="space"></div>
      <div className="request-container">
        {" "}
        <h4> Du hast dich erfolgreich zum Newsletter angemeldet!</h4>
        <br />
       <p> Schau hier dich weiter bei uns um!</p><br />
        <Link to="/blog"><button className="btn btn-transparent">Blog</button></Link>
        <Link to="/infos"><button className="btn btn-transparent">Alle Infos</button></Link>
        <Link to="/blog"><button className="btn btn-white">Angebot</button></Link>
        <Link to="/"><button className="btn btn-transparent">Startseite</button></Link>
      </div>
    </div>
  );
}

export default Newsletter;
