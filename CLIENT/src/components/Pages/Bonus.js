import React from "react";
import {Helmet} from 'react-helmet-async'
import { Button } from "../Button";

import "../css/MainPages.css";
import "../css/Cards.css";

function Bonus() {
  return (
    <div>
        
     <Helmet>
      <title>Konzept</title>
      <meta name="description" content="Wie eine Bu ohne Gesundheitsfragen auskommt"/> 
      <link rel="canonical " href="/Bonus" />
    </Helmet>
      <img
        src="./img/conzept.jpg"
        alt="fragezeichen"
        className="background-img"
      />
      <div className="space"></div>
      <div className="contentDiv">
        <div className="textBackground">
          <h1>Wie bekomme ich eine Berufsunfähigkeitsversicherung für 0 € ?</h1>
          <p>
            Wieso sollte eine Berufsunfähigkeitsversicherung kostenlos sein,
            bzw. welcher Absicht verbirgt sich dahinter, dass die
            IKK-Innovationskasse die Berufsunfähigkeitsversicherung bezahlen
            möchte? Krankenkassen haben strenge gesetzliche Vorgaben und haben
            damit zwei Herausforderungen: Wie heben sie sich von anderen
            Krankenkassen ab und wie können sie wirtschaftlich sein? Das
            typische Aushängeschild einer Krankenkasse ist die professionelle
            Zahnreinigung im Bonusprogramm. Viele Personen entscheiden sich
            oftmals ausschließlich wegen des Bonusprogrammes, zumeist gerade
            wegen der Zahnreinigung, für eine Krankenkasse.
            <br />
            Damit ist der erste Grund, warum die IKK-Innovationskasse die
            Berufsunfähigkeitsversicherung bezahlen möchte: um attraktiv zu
            sein.
            <br />
            Der andere Nutzen ist die Wirtschaftlichkeit. Die regelmäßigen
            Kosten einer professionellen Zahnreinigung sind durchaus günstiger
            als unregelmäßige Kosten von Zahnfüllungen und Operationskosten.
            Krankenkassen möchten Anreize schaffen, dass der Patient/Kunde
            präventiv um seine Gesundheit kümmert, damit er kostengünstig
            bleibt.
            <br />
            Die Krankenkassen haben selbst einen Nutzen, wenn sie Bonusprogramme
            anbieten. Die IKK Innovationskasse hat mit ihrem Bonusprogramm
            aktuell ein Alleinstellungsmerkmal. Wenn ein Mitglied die bis zu
            500€ Zuschuss pro Jahr für eine Berufsunfähigkeitsversicherung
            erhalten möchte, muss es die Vorsorgeuntersuchungen absolvieren. Das
            führt zu weniger Leistungsfällen. Mitglieder der
            IKK-Innovationskassen sind dadurch einfach „gesünder“.
          </p>{" "}
          <br />
        </div>
      </div>
      <br />
      <br />
      <div className="importantBox">
        <div className="centeredContent">
          <Button
            path="/infos"
            class="btn-middle btn-transparent btn"
            text="Mehr infos?"
          />
          <Button
            path="/request"
            class="btn-middle btn-white btn"
            text="zum Antrag"
          />
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Bonus;
