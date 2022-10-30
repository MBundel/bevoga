import React from "react";

import { Button } from "../Button";

import "../css/MainPages.css";
import "../css/Cards.css";

function concept() {
  return (
    <div>
      <img
        src="./img/conzept.jpg"
        alt="fragezeichen"
        className="background-img"
      />
      <div className="space"></div>
      <div className="contentDiv">
        <div className="textBackground">
          <h1>Wie funktioniert das Konzept?</h1>
          <p>
            Eine Berufsunfähigkeitsversicherung ohne Gesundheitsfragen – das
            kann doch nicht gehen? Na klar geht das! Das Rad wurde nicht neu
            erfunden, sondern nur modifiziert. Hast du etwa schonmal darüber
            nachgedacht, dass jede Person in eine gesetzliche
            Krankenversicherung ohne Gesundheitsprüfung aufgenommen werden kann,
            aber eine private Krankenkasse die Beantwortung von
            Gesundheitsfragen von dir verlangt – auch Zusatzversicherungen, wie
            Zahn etc.? Das liegt daran, dass es sich um zwei verschiedene
            Systeme handelt. Die Private sichert die Einzelperson und die
            Gesetzliche ein Kollektiv ab - und das gleiche passiert nun hier:
            die typische Berufsunfähigkeitsversicherung versichert eine
            Einzelperson und unsere bevoga sichert ein Kollektiv ab. Um dich bei
            uns gegen Berufsunfähigkeit versichern zu können, musst du einem
            Kollektiv angehören – diese Kollektive bilden sich über die
            Krankenkassen, die mit uns zusammenarbeiten. Falls du bereits
            Mitglied einer dieser Krankenkasse bist, dann wunderbar! Du kannst
            einfach die Berufsunfähigkeitsversicherung beantragen! Falls du
            derzeit kein Mitglied bist, kann dies bei Antragsstellung
            gleichzeitig erfolgen. Wir übernehmen für dich die gesamte
            Bürokratie und sorgen dafür, dass dein Aufwand nur minimal ist. Der
            eine oder andere möchte gerne seiner Krankenkasse loyal bleiben.
            Hier besteht aktuell nur die Möglichkeit, die Krankenkasse bei
            Antrag zur Berufsunfähigkeitsversicherung zu wechseln und nach
            Policierung der Versicherung wieder in die alte GKV einzutreten.
            Auch hier kannst du uns den Aufwand überlassen. Wir arbeiten daran,
            mehr Krankenversicherungen für uns zu gewinnen, damit es noch
            einfacher wird, sich gegen Berufsunfähigkeit bei uns zu versichern.
          </p>
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

export default concept;
