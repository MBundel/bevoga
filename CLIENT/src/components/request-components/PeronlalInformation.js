import React from "react";

function PeronlalInformation() {
  return (
    <div>
      <div>deine persönlichen Angaben</div>
      <div className="checkbox-div">
        

        <form autoComplete="on">
          <input type="text" name="street-address" placeholder="Straße + Hausnummer" />
          <input type="text" name="postal-code" placeholder="Postleitzahl" />
          <input type="text" name="city" placeholder="Wohnort" />
          <select type="text" autoComplete="sex" placeholder="Geschlecht" >
            <option value="male">männlich</option>
            <option value="female">weiblich</option>
            <option value="divers">sonstige</option>
             </select>
          <input type="text" autoComplete="family-name" placeholder="Geburtsname" />
          <input type="text" autoComplete="city" placeholder="Geburtsort" />
          <input type="text" autoComplete="bday" placeholder="Geburtstag" />
          <input type="text" autoComplete="country" placeholder="Staatsangehörigkeit" />
          <select type="text" placeholder="Familienstand controlled">
            <option value="sinlge">ledig</option>
            <option value="married">verheiratet</option>
            <option value="widowed">verwitwet</option>
            <option value="divorced">geschieden</option>
            <option value="registeredLifePartnership">eingetragene Lebenspartnerschaft</option>
            <option value="CanceldLifePartnership">eingetragene Lebenspartnerschaft aufgebhoben</option>
            <option value="deceasedLifePartnership">eingetragener Lebenspartner verstorben</option>
          
          </select>
          <input type="text" autoComplete="" placeholder="(Kranken-)Versicherungsnummer" />
        </form>
      </div>
    </div>
  );
}

export default PeronlalInformation;
