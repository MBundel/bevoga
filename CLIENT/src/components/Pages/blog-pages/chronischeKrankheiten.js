import React from "react";
import { Button } from "../../Button.js";
import "../../css/BlogPage.css";
import { Helmet } from "react-helmet-async";

function chronischeKrankheiten() {
  return (
    <>
      <Helmet>
        <title>Wann ist bevoga die bessere Bu für dich ist</title>
        <meta
          name="description"
          content="Bu Absicherung trotz chronishcer Krankheit"
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
        <h1>
          Wie können chronische Krankheiten in einer
          Berufsunfähigkeitsversicherung abgesichert werden?
        </h1>
        <h2>Berufsunfähigkeitsversicherung und chronische Erkrankungen</h2>
        <p>
          Manche Erkrankungen tauchen plötzlich aus dem nichts aus, können aber
          auch einfach so wieder verschwinden. Viele dieser Erkrankungen bleiben
          leider jedoch dauerhaft, werden chronisch. Nur sind die Symptome mal
          stark oder gar nicht ausgeprägt. Je nach Ausprägung der Krankheit und
          je nachdem, welcher Beruf ausgeübt wird, kann eine chronische
          Krankheit ein K.O.-Kriterium für die Absicherungsmöglichkeit gegen
          Berufsunfähigkeit sein.{" "}
        </p>
        <h3>Wie geht eine klassische BU mit chronischen Krankheiten um?</h3>
        <p>
          Das beste vorweg: Solltest du bereits gegen Berufsunfähigkeit ohne
          Einschränkung versichert sein und wirst aufgrund einer chronischen
          Erkrankung berufsunfähig, zahlt dir deine Versicherung in diesem Fall
          deine BU-Rente. <br />
          Was ist aber, wenn du bereits bei Antragsstellung eine chronische
          Erkrankung hast? Beim Antrag für die Berufsunfähigkeitsversicherung
          werden Gesundheitsfragen zu diesen, wie Allergien, Asthma, Rheuma,
          etc. gestellt. Wenn du hierbei eine Frage mit Ja beantwortest, möchten
          die Versicherer genauer wissen, welche Ausprägung deine Krankheit hat.
          Eine Laktoseintoleranz ist i.d.R. zu vernachlässigen, bei Allergien
          kommt es auf die Stärke der Symptome an. Eine Pollenallergie kann
          saisonal bedingt sein und sich nur durch eine verschnupfte Nase
          zeigen. Damit sind dann viele Berufe ganz normal versicherbar. Sollte
          diese Allergie jedoch ausgeprägtere Symptome haben, kann es schon
          sein, dass der eine oder andere Versicherer dies als Vorstufe des
          Asthmas interpretiert und damit den Versicherungsschutz für die
          Atemwege und -organe ausschließt. Ab und an wird ein Risikozuschlag
          angeboten. Das bedeutet, dass für die gleiche Leistung mehr Beitrag
          gezahlt werden muss. Bei anderen chronischen Krankheiten kann ein
          Versicherungsschutz unmöglich sein. Morbus Chron, Parkinson, Multiple
          Sklerose sind schwer bis unmöglich, abzusichern.
          <br />
          Wer wegen dauerhaften gesundheitlichen Leidens keine BU-Versicherung
          abschließen kann, kann im Leistungsfall tief fallen. Wenn
          beispielsweise Asthma vom Versicherungsschutz ausgeschlossen ist und
          man aufgrund dessen nun aus dem Berufsleben ausscheidet, leistet die
          Versicherung auch nicht. Dieses Thema ist bei Antragsstellung ein
          nicht zu unterschätzender Risikofaktor. Die Versicherbarkeit steht auf
          der Kippe und damit die Grundabsicherung der Existenz!
        </p>
        <h3>Wie geht bevoga mit chronischen Erkrankungen um?</h3>
        <p>
          Hier eine gute Nachricht vorweg: Auch wir zahlen, wenn eine chronische
          Krankheit Ursache der Berufsunfähigkeit ist. Es wird noch besser:
          Selbst, wenn sie bereits vor Antragsstellung vorhanden war, ist diese
          bei uns abgesichert! <br />
          Da wir keine Gesundheitsfragen stellen, sind solche Einschränkungen
          der Gesundheit grundsätzlich bei uns versicherbar. Solange du bei
          Antragsstellung in der Lage bist, deinen Beruf trotz dieser
          dauerhaften Krankheit(en) ohne Einschränkungen auszuüben und dein Arzt
          dir nicht von der Arbeit abrät, ist alles im grünen Bereich.
          <br />
          Wir stellen wenige Fragen, die nur sicherstellen sollen, dass bereits
          keine Berufsunfähigkeit vorliegt.
          <br />
          Warum wir das so machen, hat verschiedene Gründe: bei der klassischen
          BU ist nur der Gesundheitsstatus bei Antragsstellung interessant. Als
          Beispiel: Peter hat um 12 Uhr einen Termin beim Arzt und erhält dort
          eine blöde Diagnose. Den Termin um 14 Uhr beim Finanzberater, bei dem
          er eine BU abschließen wollte, kann er sich nun schenken, da er durch
          die Diagnose als nicht versicherbar gilt. Wenn er zuerst beim
          Finanzberater und 10 Minuten danach beim Arzt gewesen wäre, dann hätte
          er sich noch absichern können. Da das nicht besonders fair klingt,
          verzichten wir auf die Gesundheitsfragen. Damit wir auch ohne
          Gesundheitsfragen bei geringem Beitrag ein funktionierendes System
          haben, haben wir eine andere Risikoberechnung.
        </p>
        <img
          src="./img/Versicherbarkeit-chronische-Krankheiten-BU.png"
          alt="Versicherbarkeit-chronische-Krankheiten-BU"
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

export default chronischeKrankheiten;
