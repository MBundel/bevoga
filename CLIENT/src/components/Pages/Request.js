// import React from "react";
// import { useState } from "react";
// import { db } from "../../lib/init-firebase.js";
// import { collection, addDoc } from "firebase/firestore";

// import "../css/MainPages.css";

// export default function Request() {
//   const [newFirstName, setNewFirstName] = useState("");
//   const [newLastName, setNewLastName] = useState("");
//   const [newNumber, setNewNumber] = useState(0);
//   const [newMail, setNewMail] = useState(0);
//   const [newLoan, setNewLoan] = useState(0);
//   const [newBirthday, setNewBirthday] = useState(0);

//   const usersCollectionRef = collection(db, "requester");

//   const createRequester = async (event) => {
//     event.preventDefault();
//     await addDoc(usersCollectionRef, {
//       firstName: newFirstName,
//       lastName: newLastName,
//       phone: newNumber,
//       email: newMail,
//       loan: newLoan,
//       birthday: newBirthday,
//     });
//   };

//   const [show, setShow] = useState(true);

//   return (
//     <div>
//       <img className="background-img" src="../../img/unterschrift.jpg" alt="" />
//       <div className="space"></div>
//       <div className="centered box-transparent-fit">
//         {show ? (
//           <div>
            
//             Antrag bald online abschießbar, hier Angebot einfordern <br />
//             <form>
//               <input
//                 placeholder="Dein Vorname"
//                 required
//                 onChange={(event) => {
//                   setNewFirstName(event.target.value);
//                 }}
//               />
//               <input
//                 placeholder="Dein Nachname"
//                 required
//                 onChange={(event) => {
//                   setNewLastName(event.target.value);
//                 }}
//               />
//               <input
//                 type="tel"
//                 placeholder="Deine Telefonnummer"
//                 required
//                 onChange={(event) => {
//                   setNewNumber(event.target.value);
//                 }}
//               />
//               <input
//                 type="email"
//                 placeholder="Deine Mailadresse"
//                 required
//                 onChange={(event) => {
//                   setNewMail(event.target.value);
//                 }}
//               />
//               <input
//                 type="date"
//                 placeholder="Dein Geburtstag"
//                 required
//                 onChange={(event) => {
//                   setNewBirthday(event.target.value);
//                 }}
//               />

//               <input
//                 type="number"
//                 placeholder="Dein monatliches Brutto"
//                 required
//                 onChange={(event) => {
//                   setNewLoan(event.target.value);
//                 }}
//               />

//               <div className="space3"></div>
//               <button
//                 className="btn btn-middle btn-transparent"
//                 onClick={(event) => {
//                   createRequester(event);
//                   setShow(false);
//                 }}
//               >
//                 Abschicken
//               </button>
//             </form>
//           </div>
//         ) : null}
//         {!show ? <div> Erfolgreich abgeschickt! </div> : null}
//       </div>
//     </div>
//   );
// }






//-------------------------------------------------------------------

import React from "react";
import Permission from "../request-components/Permission"
import FormForRequest from "../request-components/FormForRequest"
import PossibilityCheck from "../request-components/PossibilityCheck";
import GkvOptions from "../request-components/GkvOptions";
import BuSumCalculator from "../request-components/BuSumCalculator";

import { useState } from "react";
import { db } from "../../lib/init-firebase.js";
import { collection, addDoc } from "firebase/firestore";

import "../css/MainPages.css";
import "../css/Request.css";
import PersonalData from "../request-components/PersonalData";
import PeronlalInformation from "../request-components/PeronlalInformation";




// Creater User and Send User to Firestore

export default function Request() {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [newMail, setNewMail] = useState(0);
  // const [newLoan, setNewLoan] = useState(0);
  // const [newBirthday, setNewBirthday] = useState(0);
  const [newsletterWA, setNewsletterWA] =useState(false);
  const [newsletterMail, setNewsletterMail] =useState(false);

  const usersCollectionRef = collection(db, "requester");

  const createRequester = async (event) => {
    event.preventDefault();
    await addDoc(usersCollectionRef, {
      firstName: newFirstName,
      lastName: newLastName,
      phone: newNumber,
      email: newMail,
      whatsappPermission: newsletterWA,
      emailPermission: newsletterMail,
      // loan: newLoan,
      // birthday: newBirthday,
    });
  };

 
  const [showPermission, setShowPermission] = useState(true);
  const [showFormForRequest, setShowFormForRequest] = useState(true);

  



  return (
    <div>
      <img className="background-img" src="../../img/unterschrift.jpg" alt="" />
      <div className="space"></div>
      <div className="request-container">
     
     
      

        <div className="space"> XXXXXXXXXXXXXXXXXXXXXXXXXXX</div>

       {showPermission ? (<Permission 
        sendPermissionWA= {newsletterWA => setNewsletterWA(newsletterWA)}        
        sendPermissionMail= {newsletterMail => setNewsletterMail(newsletterMail)}        
        sendShowPermission= {showPermission => setShowPermission(showPermission)}        
        sendShowFormForRequest= {showFormForRequest => setShowFormForRequest(showFormForRequest)}        
        />):null}

        <div className="space"> XXXXXXXXXXXXXXXXXXXXXXXXXXX</div>

        {showFormForRequest ? ( <FormForRequest
          sendShowFormForRequest={showFormForRequest => setShowFormForRequest(showFormForRequest)}
          sendShowPermission={showPermission => setShowPermission(showPermission)}
          sendNewFirstName={newFirstName => setNewFirstName(newFirstName)}
          sendNewLastName={newLastName => setNewLastName(newLastName)}
          sendNewNumber={newNumber => setNewNumber(newNumber)}
          sendNewMail={newMail => setNewMail(newMail)}
        />):null}

          <div className="space"> XXXXXXXXXXXXXXXXXXXXXXXXXXX</div>

            <PossibilityCheck/>

            <div className="space"> XXXXXXXXXXXXXXXXXXXXXXXXXXX</div>

            <GkvOptions/>

            <div className="space"> XXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
            <BuSumCalculator/>
            <div className="space"> XXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
            <PeronlalInformation/>
            <div className="space"> XXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
            <PersonalData/>
      </div>
       
    </div> 
  );
}
