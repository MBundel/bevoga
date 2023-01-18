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
          conent="Berufsunfähigkeitsversicherung ohne Gesundheitsfragen, Bu ohne Gesundheitsprüfung, Bu Prüfung, Gesundheitsfragen, Grundfähigkeit, Grundfähigkejtusversicherung "
        />
      </Helmet>

      <img
        src="./img/Bu-ohne-Gesundheitsfragen-Hintergrund.jpg"
        alt="Berufsunfähigkeitsversicherung ohne Gesundheitsfragen Hintergrundbild"
        title="Berufsunfähigkeitsversicherung ohne Gesundheitsfragen Hintergrundbild"
        className="background-img"
      />
      <div className="centered  box-transparent blog">
        <h1>Ist eine Grundfähigkeitsversicherung sinnvoll?</h1>
        <h2>
          Was eine Grundfähigkeitsversicherung und was der Unterschied zur
          bevoga ist.{" "}
        </h2>
        <h3>Was sichert eine Grundfähigkeitsversicherung ab?</h3>
        <p>
          Wie der Name es sagt, sichert diese Versicherung deine
          Grundfähigkeiten ab. Was sind diese? Alles, was der Körper
          üblicherweise kann: Sehen, Sprechen, Hören, Heben, Tragen, Sitzen,
          Greifen, psychische Gesundheit, etc. Wann zahlt sie? Wenn du einer
          deiner Fähigkeiten <b>vollständig</b> verloren hast, zahlt sie dir
          eine monatliche Rente – bei vielen Versicherern dann, wenn du als
          pflegebedürftig eingestuft wirst.
        </p>
        <br />
        <p>
          Wer die Fähigkeit des Gehens verliert, muss nicht obligatorisch seine
          Beine nicht mehr bewegen können und im Rollstuhl sitzen. Wenn jemand
          eine gewisse Meterzahl am Stück nicht absolvieren kann, gilt dies
          bereits als Verlust dieser Fähigkeit. Aber hier sind von Versicherer
          von Versicherer verschiedene Fristen festgesetzt. Der Verlust der
          Fähigkeit muss mind. 6-12 Monate andauernd sein, damit die
          Versicherung greift. Ein einfacher Beinbruch über 3 Monate Genesung
          zählt somit nicht. Es muss viel passieren, damit der Verlust einer
          Fähigkeit von der Versicherung anerkannt wird. Die Psyche ist auch nur
          bedingt abgesichert. Solange du deinen Alltag bewältigen kannst, hast
          du deine psychischen Fähigkeiten, auch wenn du beim Kaffee kochen das
          doppelte an Zeit brauchst oder nach einem Einkauf psychisch so
          erschöpft bist, dass du am liebsten ins Bett willst.
        </p>
        <br />
        <h3>
          Warum sich viele für eine Grundfähigkeitsversicherung entscheiden:
        </h3>
        <p>
          Im Grunde geht es darum, dass die Menschen ihre Existenz schützen
          wollen, vor allem die finanzielle. Deswegen wird eine Versicherung
          abgeschlossen, die dir unter die Arme greift, falls du nicht mehr in
          der Lage bist, deinen Beruf auszuüben. Die Grundfähigkeitsversicherung
          kommt von daher für viele in Frage: Nicht, weil sie so beliebt ist,
          sondern weil es die zahlbare Alternative zur
          Berufsunfähigkeitsversicherung ist.
        </p>
        <h3>Kosten einer Grundfähigkeitsversicherung</h3>
        <p>
          Eine GFV kostet je nach Beruf unterschiedlich. Ein Maurer
          beispielsweise zahlt zwischen 60 und 200€ monatlich, um seine
          Grundfähigkeiten abzusichern. Das ist die günstige Alternative zur
          Berufsunfähigkeitsversicherung, bei der der Maurer zwischen 270€ und
          610€ pro Monat zahlt – das ist für die meisten nicht bezahlbar!
        </p>
        <h3>Was ist der unterschied einer GFV und zur BU?</h3>
        <ul>
          <li>
            Eine GFV zahlt, wenn du deine Fähigkeit vollständig verlierst, eine
            BU i.d.R. wenn deine Fähigkeiten „nur“ ab 50% eingeschränkt ist.{" "}
          </li>
          <li>
            Die BU zahlt auch, wenn spezielle Fähigkeiten eingeschränkt sind.{" "}
          </li>
          <li>
            Eine GFV zahlt i.d.R. wenn ein Pflegegrad festgestellt worden ist,
            eine BU zahlt auch vorher.
          </li>
          <li>
            Die Psyche ist in der BU besser abgesichert. Konzentrationsstörung,
            häufige Migräne etc. können schon anerkannt werden. Die GFV hat da
            eine größere Hürde.
          </li>
          <li>
            Wir können sagen, die BU zielt auf die Fähigkeit ab, einen Beruf
            konkret ausüben zu können und die GFV auf körperliche
            Einschränkungen.
          </li>
        </ul>
        <h3>
          Wie du den Preis einer Grundfähigkeitsversicherung zahlst und die
          Leistungen einer BU erhältst:
        </h3>
        Durch unser Projekt bevoga ermöglichen wir es, jede Person in einer
        Berufsunfähigkeitsversicherung günstig zu versichern. Warum und wie das
        geht, erfährst du in unseren Artikeln:
        <br /> <br />
        <a href="/GuenstigeBU" target="_blank" rel="noreferrer">
          Warum bevoga so günstig ist
        </a>{" "}
        <br /> <br />
        <a href="/BuOhneGesundheitsfragen" target="_blank" rel="noreferrer">
          Bu ohne Gesundheitsfragen
        </a>{" "}
        <br /> <br />
        <a href="/ProBevoga" target="_blank" rel="noreferrer">
          9 Gründe für bevoga
        </a>{" "}
        <br /> <br />
        <img
          src="./img/Grundfaehigkeits-Vs-Bu.png"
          alt="Grundfähigkeitsversicherung vs Berufsunfähigkeitsversicherung"
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
