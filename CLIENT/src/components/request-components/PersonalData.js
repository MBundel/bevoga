import React from 'react'

function PersonalData() {
  return (
    <div>
       
  <div className="checkbox-div">
    <input type="text" placeholder="Abreitsverhältnis controlled ->Azubi, Arbeitnehmer, Selbstständig" />
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
   </div>




        
    </div>
  )
}

export default PersonalData