import React from "react";
import { Button } from "../../components/Button.js";
import { Helmet } from "react-helmet-async";
import "../../css/BlogPage.css";


function ProBevoga() {
  return (
    <>
      <Helmet>
        <title> Was eine Normalannahme bei einer BU ist und welche Optionen zur Verfügung stehen</title>
        <meta
          name="description"
          content=" Berufsunfähigkeitsversicherung, Normalannahme, Zuschlag, Ausschluss, Ablehnung"
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
        <h1>Normalannahme, Annahme mit Erschwerung, Ablehnung</h1>
        <p>
          Wie reagieren Versicherer bei Antragstellung einer
          Berufsunfähigkeitsversicherung?
        </p>
        <h2>Normalannahme</h2>
        <p>
          Von einer Normalannahme spricht man, wenn der Versicherer dich für
          gesund bewertet und dir vollen Versicherungsschutz zum normalen
          Beitrag bietet. Du passt in sein „Raster“ bestehend aus Alter, Beruf
          etc.
        </p>
        <h2>Annahme mit Erschwerung</h2>
        <p>
          Annahme mit Erschwerung bedeutet, dass du Versicherungsschutz erhälts,
          aber es Defizite in deiner Versicherung gibt. Also du nicht genau den
          Schutz bekommst, den du ja eigentlich willst. Sei es, das es teurer
          wird, sei es das bestimmte Erkrankungen ausgeschlossen werden.
        </p>
        <h3>Zuschlag</h3>
        <p>
          Bei einem Risikozuschlag zahlst du für die gleiche Leistung mehr
          Beitrag. Krankheiten, BMI und risikorelevante Hobbies sind oftmals
          Ursache für eine risikobezogene Beitragserhöhung (auch bis zu 100%).
          Aber auch Risikofaktoren im Beruf: Ein Chemiker beispielsweise, der
          mit radioaktiven Substanzen arbeitet, erhält zur Berufsgruppe
          „Chemiker“ zzgl. einen Gefahrenzuschlag, da etwa ein Chemiker in der
          Lebensmittelindustrie meistens keiner Strahlung ausgesetzt ist.
        </p>
        <h3>Ausschluss</h3>
        <p>
          Ein Ausschluss bedeutet, dass eine bestimmte Ursache die zur
          Berufsunfähigleit führen kann, nicht in der
          Berufsunfähigkeitsversicherung abgesichert ist, sei es Krankheit,
          Hobby, etc. Wer nun z.B. eine Krankheit ausgeschlossen hat, aber
          aufgrund dieser berufsunfähig wird, erhält keine Leistung vom
          Versicherer. Sportarten, wie Reiten können vom Versicherungsschutz
          ausgeschlossen werden, wer vom Pferd fällt und dadurch direkt in die
          Berufsunfähigkeit landet, erhält keine Leistung. Problematisch wird
          es, wenn man sich eine Verletzung vom Reiten zuzieht und dadurch
          Folgeschäden bleiben, z.B. ein angebrochener Wirbel. Wenn dann nun ein
          Unfall passiert, wo der angebrochener Wirbel nochmals verletzt wird
          und das dann zur Berufsunfähigkeit führt, stellt sich die Frage,
          inwieweit der erste Unfall mit dem zweiten zu tun hat. Wenn der
          Reitunfall nicht passiert, wäre der Wirbel sonst intakt geblieben,
          sodass keine Berufsunfähigkeit vorläge? Wer will das sagen? Solche
          Fälle landen dann oft vor Gericht.
        </p>
        <h2>Ablehnung und Zurückstellung</h2>
        <p>
          Eine Ablehnung bedeutet, dass der Versicherer dich als zu hohes Risiko
          einschätzt und damit nicht haben will. Aus unserer Erfahrung trifft es
          jeden 4.
        </p>
        <br />
        <p>
          Eine Zurückstellung ist eine Ablehnung, nur klingt sie netter. Sie
          lehnen dich so lange ab, bis die Gesundheitsfragen eine Annahme
          aufgrund der Zeit wieder zulassen (Waren Sie in den letzten 3/5/10
          Jahren…).{" "}
        </p>

        <img
          src="./img/Zuschlag-Ausschluss-Risikozuschlag-Ablehnung.png"
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
