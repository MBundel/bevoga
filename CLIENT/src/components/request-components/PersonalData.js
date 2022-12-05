
import React, { useState } from "react";

import { Checkbox } from "@mui/material";
import { green, red } from "@mui/material/colors";


function PersonalData(props) {

const [disabeld, setDisabeld] = useState()
const [values, setValues] = useState({
  employment: "",
  prevInsured: "",
  statusGKV: "",
  startGKV: "",
  nameAG: "",
  adressAG: "",
  plzAG: "",
  insuredFamilyMember: "",
  kindOfprevInsured:"",


})


const handleChange = (e) => {
  const { name, value } = e.target;
  setValues({
    ...values,
    [name]: value,
  });
 
};

const handleButton = () => {
  if(
        values.streetAdress !== ""
     && values.postalCode !== ""
     && values.city !== ""
     && values.sex !== ""
     && values.birthPlace !== ""
     && values.birthday !== ""
     && values.country !== ""
     && values.family !== ""
     && values.insuranceID !== ""
  ){
    setDisabeld(false)
  }else{
    setDisabeld(true)
  }
}



  return (
    <div>
      Informationen für die Krankenkasse <span className="important">nur bei Wechsel ausfüllen!</span>
      <form action="">
        <div className="checkbox-div">
          <select value={values.employment} onChange={handleChange} name="employment">
            <option value="arbeitsverhältnis">Arbeitsverhältnis</option>
            <option value="employed">angestellt</option>
            <option value="trainee">auszubildend</option>
            <option value="selfEmployed">selbstständig</option>
          </select>
          <input onChange={handleChange} value={values.nameAG} name="nameAG" type="text" placeholder="Name Arbeitgeber" />
          <input onChange={handleChange} value={values.adressAG} name="adressAG" type="text" placeholder="Straße + Hausnummer Arbeitgeber" />
          <input onChange={handleChange} value={values.plzAG} name="plzAG" type="text" placeholder="Postleitzahl + Ort Arbeitgeber" />
        </div>
        <div className="checkbox-div">
          <input
            onChange={handleChange} value={values.insuredFamilyMember} name="insuredFamilyMember"
            type="number"
            placeholder="Anzahl der familienversicherten Kinder/Partner "
          />
          <select value={values.kindOfprevInsured} onChange={handleChange} name="kindOfprevInsured" id="">
            <option value="default">Art der Vorversicherung</option>
            <option value="notInsured">Nicht versichert</option>
            <option value="selfInsured">Selbst versichert</option>
            <option value="familyInsured">familienversichert</option>
            <option value="privateInsured">privat versichert</option>
          </select>
          <select
            onChange={handleChange} value={values.prevInsured} name="prevInsured"
      
            id="previous_insurance"
            data-validation-rules="required|max:127"
            class="form-control required"
          >
            <option value="default">Vorherige Krankenversicherung</option>
            <option value="actimonda krankenkasse">
              actimonda krankenkasse
            </option>
            <option value="AOK Baden-Württemberg">AOK Baden-Württemberg</option>
            <option value="AOK Bayern">AOK Bayern</option>
            <option value="AOK Bremen / Bremerhaven">
              AOK Bremen / Bremerhaven
            </option>
            <option value="AOK Hessen">AOK Hessen</option>
            <option value="AOK Niedersachsen">AOK Niedersachsen</option>
            <option value="AOK NordOst">AOK NordOst</option>
            <option value="AOK NORDWEST">AOK NORDWEST</option>
            <option value="AOK Plus">AOK Plus</option>
            <option value="AOK Rheinland / Hamburg">
              AOK Rheinland / Hamburg
            </option>
            <option value="AOK Rheinland-Pfalz/Saarland">
              AOK Rheinland-Pfalz/Saarland
            </option>
            <option value="AOK Sachsen-Anhalt">AOK Sachsen-Anhalt</option>
            <option value="atlas BKK ahlmann">atlas BKK ahlmann</option>
            <option value="Audi BKK">Audi BKK</option>
            <option value="ausländische Krankenkasse">
              ausländische Krankenkasse
            </option>
            <option value="Bahn-BKK">Bahn-BKK</option>
            <option value="BARMER GEK">BARMER GEK</option>
            <option value="Bertelsmann BKK">Bertelsmann BKK</option>
            <option value="BIG Gesundheit">BIG Gesundheit</option>
            <option value="BKK 24">BKK 24</option>
            <option value="BKK Achenbach Buschhütten">
              BKK Achenbach Buschhütten
            </option>
            <option value="BKK Akzo Nobel Bayern">BKK Akzo Nobel Bayern</option>
            <option value="BKK B. Braun Melsungen">
              BKK B. Braun Melsungen
            </option>
            <option value="BKK BMW">BKK BMW</option>
            <option value="BKK BPW Bergische Achsen KG">
              BKK BPW Bergische Achsen KG
            </option>
            <option value="BKK der G. M. PFAFF AG">
              BKK der G. M. PFAFF AG
            </option>
            <option value="BKK der SIEMAG">BKK der SIEMAG</option>
            <option value="BKK Deutsche Bank AG">BKK Deutsche Bank AG</option>
            <option value="BKK Diakonie">BKK Diakonie</option>
            <option value="BKK Dürkopp Adler">BKK Dürkopp Adler</option>
            <option value="BKK Ernst und Young">BKK Ernst und Young</option>
            <option value="BKK Euregio">BKK Euregio</option>
            <option value="BKK EVM">BKK EVM</option>
            <option value="BKK EWE">BKK EWE</option>
            <option value="BKK exklusiv">BKK exklusiv</option>
            <option value="BKK Faber-Castell und Partner">
              BKK Faber-Castell und Partner
            </option>
            <option value="BKK firmus">BKK firmus</option>
            <option value="BKK Freudenberg">BKK Freudenberg</option>
            <option value="BKK GILDEMEISTER SEIDENSTICKER">
              BKK GILDEMEISTER SEIDENSTICKER
            </option>
            <option value="BKK Grillo-Werke AG">BKK Grillo-Werke AG</option>
            <option value="BKK Groz-Beckert">BKK Groz-Beckert</option>
            <option value="BKK Herford Minden Ravensberg">
              BKK Herford Minden Ravensberg
            </option>
            <option value="BKK Herkules">BKK Herkules</option>
            <option value="BKK KARL MAYER">BKK KARL MAYER</option>
            <option value="BKK KBA">BKK KBA</option>
            <option value="BKK Krones">BKK Krones</option>
            <option value="BKK Linde">BKK Linde</option>
            <option value="BKK MAHLE">BKK MAHLE</option>
            <option value="BKK Melitta Plus">BKK Melitta Plus</option>
            <option value="BKK Miele">BKK Miele</option>
            <option value="BKK MOBIL OIL">BKK MOBIL OIL</option>
            <option value="BKK MTU Friedrichshafen GmbH">
              BKK MTU Friedrichshafen GmbH
            </option>
            <option value="BKK Pfalz">BKK Pfalz</option>
            <option value="BKK Provita">BKK Provita</option>
            <option value="BKK Publik">BKK Publik</option>
            <option value="BKK PwC">BKK PwC</option>
            <option value="BKK Rieker Ricosta Weisser">
              BKK Rieker Ricosta Weisser
            </option>
            <option value="BKK RWE">BKK RWE</option>
            <option value="BKK Salzgitter">BKK Salzgitter</option>
            <option value="BKK SCHEUFELEN">BKK SCHEUFELEN</option>
            <option value="BKK Schwarzwald-Baar-Heuberg">
              BKK Schwarzwald-Baar-Heuberg
            </option>
            <option value="BKK Stadt Augsburg">BKK Stadt Augsburg</option>
            <option value="BKK Technoform">BKK Technoform</option>
            <option value="BKK Textilgruppe Hof">BKK Textilgruppe Hof</option>
            <option value="BKK VBU">BKK VBU</option>
            <option value="BKK VDN">BKK VDN</option>
            <option value="BKK VerbundPlus">BKK VerbundPlus</option>
            <option value="BKK Voralb Heller Index Leuze">
              BKK Voralb Heller Index Leuze
            </option>
            <option value="BKK Werra-Meissner">BKK Werra-Meissner</option>
            <option value="BKK Wieland-Werke">BKK Wieland-Werke</option>
            <option value="BKK Wirtschaft und Finanzen">
              BKK Wirtschaft und Finanzen
            </option>
            <option value="BKK Würth">BKK Würth</option>
            <option value="BKK&amp;nbsp;ZF&amp;nbsp;&amp;&amp;nbsp;Partner">
              BKK&nbsp;ZF&nbsp;&amp;&nbsp;Partner
            </option>
            <option value="Bosch BKK">Bosch BKK</option>
            <option value="Daimler BKK">Daimler BKK</option>
            <option value="DAK Gesundheit">DAK Gesundheit</option>
            <option value="Debeka BKK">Debeka BKK</option>
            <option value="DIE BERGISCHE KRANKENKASSE">
              DIE BERGISCHE KRANKENKASSE
            </option>
            <option value="Die Continentale BKK">Die Continentale BKK</option>
            <option value="Die Schwenninger Krankenkasse">
              Die Schwenninger Krankenkasse
            </option>
            <option value="energie-BKK">energie-BKK</option>
            <option value="HEIMAT KRANKENKASSE">HEIMAT KRANKENKASSE</option>
            <option value="HEK - Hanseatische Krankenkasse">
              HEK - Hanseatische Krankenkasse
            </option>
            <option value="hkk Erste Gesundheit">hkk Erste Gesundheit</option>
            <option value="IKK Brandenburg und Berlin">
              IKK Brandenburg und Berlin
            </option>
            <option value="IKK classic">IKK classic</option>
            <option value="IKK gesund plus">IKK gesund plus</option>
            <option value="IKK Nord">IKK Nord</option>
            <option value="IKK Südwest">IKK Südwest</option>
            <option value="KKH-Allianz">KKH-Allianz</option>
            <option value="Knappschaft">Knappschaft</option>
            <option value="LKK Baden-Württemberg">LKK Baden-Württemberg</option>
            <option value="LKK Franken und Oberbayern">
              LKK Franken und Oberbayern
            </option>
            <option value="LKK Gartenbau Kassel">LKK Gartenbau Kassel</option>
            <option value="LKK Hessen, Rheinland-Pfalz und Saarland">
              LKK Hessen, Rheinland-Pfalz und Saarland
            </option>
            <option value="LKK Mittel- und Ostdeutschland">
              LKK Mittel- und Ostdeutschland
            </option>
            <option value="LKK Niederbayern-Oberpfalz und Schwaben">
              LKK Niederbayern-Oberpfalz und Schwaben
            </option>
            <option value="LKK Niedersachsen-Bremen">
              LKK Niedersachsen-Bremen
            </option>
            <option value="LKK Nordrhein-Westfalen">
              LKK Nordrhein-Westfalen
            </option>
            <option value="LKK Schleswig-Holstein und Hamburg">
              LKK Schleswig-Holstein und Hamburg
            </option>
            <option value="Merck BKK">Merck BKK</option>
            <option value="mhplus Betriebskrankenkasse">
              mhplus Betriebskrankenkasse
            </option>
            <option value="Novitas BKK">Novitas BKK</option>
            <option value="PKV">PKV</option>
            <option value="pronova BKK">pronova BKK</option>
            <option value="R+V Betriebskrankenkasse">
              R+V Betriebskrankenkasse
            </option>
            <option value="Salus BKK">Salus BKK</option>
            <option value="SECURVITA BKK">SECURVITA BKK</option>
            <option value="Siemens-Betriebskrankenkasse SBK">
              Siemens-Betriebskrankenkasse SBK
            </option>
            <option value="SKD BKK">SKD BKK</option>
            <option value="Südzucker-BKK">Südzucker-BKK</option>
            <option value="TK - Techniker Krankenkasse">
              TK - Techniker Krankenkasse
            </option>
            <option value="TUI BKK">TUI BKK</option>
            <option value="VIACTIV Krankenkasse">VIACTIV Krankenkasse</option>
            <option value="WMF BKK">WMF BKK</option>
          </select>
          <select value={values.statusGKV} onChange={handleChange} name="statusGKV" id="">
            <option value="default">Mein Versicherungsstatus...</option>
            <option value="change">...ändert sich (Studium/Ausbildung/Job)</option>
            <option value="stay">...bleibt unverändert</option>
          </select>
          <select onChange={handleChange} value={values.startGKV} name="startGKV" type="date" placeholder="Versicherungsbeginn">
            <option value="default">Versicherungsbeginn...</option>
            <option value="change">...zum nächstmöglichen Zeitpunkt</option>
            <option value="stay">... nach individueller telefonischer Absprache</option>
          </select>
        </div>
         {/* -------------------- Footer -------------------- */}
      <div className="checkbox-div ">
        <div className="request-footer-moreButton">
          <div className="request-footer-moreButton">
       {/* -------------------- Button Back -------------------- */}      
            <button className="btn btn-transparent"
            onClick={()=>{
              props.sendShowOwn(false)
              props.sendShowLast(true)
            }}
            >Zurück</button>
          </div>
        {/* -------------------- Button Next -------------------- */} 
          <button className="btn btn-transparent" disabled={disabeld}
           onClick={()=>{
            props.sendShowOwn(false)
            props.sendShowNext(true)            
            props.sendData(values)
          }}
          >
            Weiter
          </button>
        </div>
      </div>
      </form>
    </div>
  );
}

export default PersonalData;
