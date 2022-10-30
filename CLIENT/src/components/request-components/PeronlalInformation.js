
//----------------------- Import ----------------------
import React, { useEffect, useState } from "react";

//----------------------- Component ----------------------
function PeronlalInformation(props) {

//----------------------- useState ----------------------  
// all input fields
 const [values, setValues] = useState({
  streetAdress: "",
  postalCode: "",
  city: "",
  sex: "",
  birthName: "",
  birthPlace: "",
  birthday: "",
  country: "",
  family: "",
  insuranceID: ""
 })
// Button Validation 
const [disabeld, setDisabeld] = useState(true)

//----------------------- handle Change all input fields ---------------------- 
    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
      handleButton()
    };
    
//-----------------------  Placeholder Date ---------------------- 
const [type, setType] = useState("text")

const handleDate = () => {
  setType("date")
} 

// const handleText = () =>{  
//   if(values.birthday === ""){
//   setType("text")}
// }


//-----------------------  Eneble Button ---------------------- 

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
// --------------------- useEffect for updating -------------
useEffect(() => {
  handleButton();
}, [values]);


//----------------------- HTML CODE ---------------------- 
  return (
    <div>
      <div>deine persönlichen Angaben</div>
      <div className="checkbox-div">
        
{/* -------------------- Input Fields -------------------- */}
        <form autoComplete="on">
          <input  onChange={handleChange}  value={values.streetAdress} type="text"    name="streetAdress" placeholder="Straße + Hausnummer" />
          <input  onChange={handleChange}  value={values.postalCode}   type="number"  name="postalCode" placeholder="Postleitzahl" />
          <input  onChange={handleChange}  value={values.city}         type="text"    name="city" placeholder="Wohnort" />
          <select onChange={handleChange}  value={values.sex}          type="text"    name="sex" placeholder="Geschlecht" >
            <option                        value="default"                            >Geschlecht</option>
            <option                        value="male"                               >männlich</option>
            <option                        value="female"                             >weiblich</option>
            <option                        value="divers"                             >divers</option>
          </select>
          <input  onChange={handleChange}  value={values.birthName}    type="text"    name="birthName" placeholder="Geburtsname" />
          <input  onChange={handleChange}  value={values.birthPlace}   type="text"    name="birthPlace" placeholder="Geburtsort" />
          <input  onChange={handleChange}  value={values.birthday}     type={type}    name="birthday" placeholder="Geburtstag" onClick={handleDate} />
          <input  onChange={handleChange}  value={values.country}      type="text"    name="country" placeholder="Staatsangehörigkeit" />
          <select onChange={handleChange}  value={values.family}       type="text"    name="family"  placeholder="Familienstand">
            <option                        value="default"                            >Familienstand</option>
            <option                        value="sinlge"                             >ledig</option>
            <option                        value="married"                            >verheiratet</option>
            <option                        value="widowed"                            >verwitwet</option>
            <option                        value="divorced"                           >geschieden</option>
            <option                        value="registeredLifePartnership"          >eingetragene Lebenspartnerschaft</option>
            <option                        value="CanceldLifePartnership"             >eingetragene Lebenspartnerschaft aufgebhoben</option>
            <option                        value="deceasedLifePartnership"            >eingetragener Lebenspartner verstorben</option>
          </select>
          <input  onChange={handleChange}  value={values.insuranceID} type="text" name="insuranceID" placeholder="(Kranken-)Versicherungsnummer" />
        </form>
      </div>

      {/* -------------------- Footer -------------------- */}
      <div className="checkbox-div ">
        <div className="request-footer-moreButton">
          <div className="request-footer-moreButton">
       {/* -------------------- Button Back -------------------- */}      
            <button className="btn btn-transparent"
            onClick={()=>{
              props.sendShowLast(true)
              props.sendShowOwn(false)
            }}
            >Zurück</button>
          </div>
        {/* -------------------- Button Next -------------------- */} 
          <button className="btn btn-transparent" disabled={disabeld}
           onClick={()=>{
            props.sendShowNext(true)
            props.sendShowOwn(false)
            props.sendData(values)
          }}
          >
            Weiter
          </button>
        </div>
      </div>
    
    </div>
  );
}

export default PeronlalInformation;
