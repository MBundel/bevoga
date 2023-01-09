import React from "react";
import { Button } from "../../components/Button.js";
import { Helmet } from "react-helmet-async";
import "../../css/BlogPage.css";


function ProBevoga() {
  return (
    <>
      <Helmet>
        <title>Wann ist bevoga die bessere Bu für dich ist</title>
        <meta
          name="description"
          content=" bevoga, Gründe für die BU ohne Fragen zur Gesundheit"
        />
        <link rel="canonical" href="/bevoga" />
        <meta
          name="keywords"
          conent="Berufsunfähigkeitsversicherung ohne Gesundheitsfragen, Bu ohne Gesundheitsprüfung, Bu Prüfung, Gesundheitsfragen "
        />
      </Helmet>

      <img
        src="./img/Bu-ohne-Gesundheitsfragen-Hintergrund.jpg"
        alt="Berufsunfähigkeitsversicherung ohne Gesundheitsfragen Hintergrundbild"
        title="Berufsunfähigkeitsversicherung ohne Gesundheitsfragen Hintergrundbild"
        className="background-img"
      />
      <div className="centered  box-transparent blog">
        <h1>Baustelle</h1>
        <p>der Text befindet sich noch in Arbeit</p>

        <img
          src="./img/9-Gruende-fuer-bevoga.png"
          alt="Pro Bevoga"
          className="blogImg"
        />
        <br />
        <Button
          path="/contact"
          class="btn-middle btn-transparent btn"
          text="Kontakt"
        />
        <Button
          path="/request"
          class="btn-middle btn-transparent btn"
          text="zum Antrag"
        />
        <Button
          path="/"
          class="btn-middle btn-transparent btn"
          text="Startseite"
        />
      </div>
    </>
  );
}

export default ProBevoga;
