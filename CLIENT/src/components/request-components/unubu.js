import React from 'react'

export default function unubu() {
  return (
    <div><div className="checkbox-div">
    <FormControl>
      <FormLabel>Wo bist du krankenversichert?</FormLabel>
      <RadioGroup>
        <FormControlLabel value="IKK" control={<Radio />} label="IKK" />
        <FormControlLabel
          value="Knappschaft"
          control={<Radio />}
          label="Knappschaft"
        />
        <FormControlLabel
          value="VIACTIV"
          control={<Radio />}
          label="VIACTIV"
        />
        <FormControlLabel
          value="Sonstige"
          control={<Radio />}
          label="Sonstige"
        />
      </RadioGroup>
    </FormControl>
  </div>
  <div className="checkbox-div">
    Für den Antrag musst du einem Kollektiv zugehören, der sich über einer
    dieser Krankenversicherung bildet. (Nach Antrag kannst du wieder in die
    alte Krankenkasse zurück)
    <div>
      {" "}
      <FormControl>
        <FormLabel>Welche Krankenkasse darf es sein?</FormLabel>
        <RadioGroup>
          <FormControlLabel value="IKK" control={<Radio />} label="IKK" />
          <FormControlLabel
            value="Knappschaft"
            control={<Radio />}
            label="Knappschaft"
          />
          <FormControlLabel
            value="VIACTIV"
            control={<Radio />}
            label="VIACTIV"
          />
        </RadioGroup>
      </FormControl>
    </div>
    <div> IMG + BonusProgramm und deren Vorteile</div>
  </div>
  <div className="checkbox-div">
    Antrag auf Krankenkasse
    <FormControl>
      <FormLabel>Wie bist du versichert?</FormLabel>
      <RadioGroup>
        <FormControlLabel value="angestellt" control={<Radio />} label="Angestellt" />
        <FormControlLabel
          value="selbststaendig"
          control={<Radio />}
          label="Als Selbstständiger"
        />
        <FormControlLabel
          value="familienversichert"
          control={<Radio />}
          label="familienversichert"
        />
      </RadioGroup>
    </FormControl>
  </div>
  <div className="checkbox-div">
    <input type="text" placeholder="Geschlecht controlled" />
    <input type="text" placeholder="Geburtsname" />
    <input type="text" placeholder="Geburtsort" />
    <input type="text" placeholder="Geburtstag" />
    <input type="text" placeholder="Staatsangehörigkeit" />
    <input type="text" placeholder="Straße + Hausnummer" />
    <input type="text" placeholder="Postleitzahl" />
    <input type="text" placeholder="Wohnort" />
    <input type="text" placeholder="Familienstand controlled" />
    <input type="text" placeholder="(Kranken-)Versicherungsnummer" />
  </div>
  <div className="checkbox-div">
    <input type="text" placeholder="Abreitsverhältnis controlled" />
    <input type="text" placeholder="Arbeitgeber" />
    <input type="text" placeholder="Straße + Hausnummer Arbeitgeber" />    
    <input type="text" placeholder="Postleitzahl" />
   </div>
  <div className="checkbox-div">
    <input type="text" placeholder="wie zuvor versichert controlled" />
    <input type="text" placeholder="statuswechsel zu beginn? controlled" />
    <input type="text" placeholder=" wenn ja, wann " />           
   </div>
  <div className="checkbox-div">
    <input type="text" placeholder="berufliche Tätigkeit name" />
    <input type="text" placeholder="berufliche Tätigkeit seit" />
    <input type="text" placeholder=" ü o u 90% Schreibtisch controlled" />
    <input type="text" placeholder=" bruttoverdienst " />           
    <input type="text" placeholder=" absicherungshöhe " />           
   </div>
  <div className="checkbox-div">
    <input type="text" placeholder="IBAN" />
    <input type="text" placeholder=" BIC" />
    <input type="text" placeholder=" Bankname " />
   </div>
  <div className="checkbox-div">
    <input type="text" placeholder="ich will kontaktaufname von der KK controlled" />
    <input type="text" placeholder=" Kenntnisnahme: Die Erhebung der persönlichen Daten ist aufgrund der §§ 206 und 284 Sozialgesetzbuch Fünftes Buch (SGB V) in Verbindung mit § 21 SGB Zehntes Buch (SGB X) zur rechtmäßigen Erfüllung unserer Aufgaben erforderlich. Der Schutz der Sozialdaten nach den Vorschriften des SGB X sowie der DS-GVO (Datenschutzgrundverordnung) ist gewährleistet. Weitere Informationen erhalten Sie unter" />
    <input type="text" placeholder=" Kenntnisnahme: Die Erhebung der persönlichen Daten ist aufgrund der §§ 206 und 284 Sozialgesetzbuch Fünftes Buch (SGB V) in Verbindung mit § 21 SGB Zehntes Buch (SGB X) zur rechtmäßigen Erfüllung unserer Aufgaben erforderlich. Der Schutz der Sozialdaten nach den Vorschriften des SGB X sowie der DS-GVO (Datenschutzgrundverordnung) ist gewährleistet. Weitere Informationen erhalten Sie unter " />
   </div></div>
  )
}
