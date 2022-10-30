

//-------------------------------------------------------------------

import React from "react";
import Permission from "../request-components/Permission"
import FormForRequest from "../request-components/FormForRequest"
import PossibilityCheck from "../request-components/PossibilityCheck";
import GkvOptions from "../request-components/GkvOptions";
import BuSumCalculator from "../request-components/BuSumCalculator";
import PersonalData from "../request-components/PersonalData";
import PeronlalInformation from "../request-components/PeronlalInformation";
import Submit from "../request-components/Submit";
import SendStatus from "../request-components/SendStatus";
import PersonalData2 from "../request-components/PersonalData2";
import NecessaryApproval from "../request-components/NecessaryApproval";

import { useState } from "react";
import { db } from "../../lib/init-firebase.js";
import { collection, addDoc } from "firebase/firestore";

import "../css/MainPages.css";
import "../css/Request.css";









// Creater User and Send User to Firestore

export default function Request() {
  const [formForRequestData, setFormForRequestData] = useState("");
  const [newsletterWA, setNewsletterWA] =useState(false);
  const [newsletterMail, setNewsletterMail] =useState(false);
  const [possibility, setPossibility] =useState(false)
  const [membership, setMembership] =useState("")
  const [company, setCompany] = useState("")
  const [brutto, setBrutto] = useState(0)
  const [insuredSum, setInsuredSum] =useState(0)
  const [price, setPrice] = useState(0)
  const [whiteCollar, setWhiteCollar]= useState(false)
  const [personalInfos, setPersonalInfos]= useState("")
  const [personalData, setPersonalData]= useState("")
  const [personalData2, setPersonalData2]= useState("")
  const [necessaryApproval, setNecessaryApproval]= useState("")


  const usersCollectionRef = collection(db, "requester");

  const createRequester = async (event) => {
    event.preventDefault();
    await addDoc(usersCollectionRef, {
      formForRequestData: formForRequestData,
      whatsappPermission: newsletterWA,
      emailPermission:    newsletterMail,
      insurable:          possibility,
      membership:         membership,
      company:            company,
      insuredSum:         insuredSum,
      bruttoIncome:       brutto,
      FinalPrice:         price,
      whiteCollar:        whiteCollar,
      personalInfos:      personalInfos,
      personalData:       personalData,
      personalData2:      personalData2,
      necessaryApproval:  necessaryApproval
     
    });
  };

 // --------------- show and hide forms -----------
  const [showBuSumCalculator, setShowBuSumCalculator]         = useState(false)
  const [showFormForRequest, setShowFormForRequest]           = useState(true)
  const [showGkvOptions, setShowGkvOptions]                   = useState(false)
  const [showNecessaryApproval, setShowNecessaryApproval]     = useState(false)
  const [showPermission, setShowPermission]                   = useState(false)
  const [showPersonalData, setShowPersonalData]               = useState(false)
  const [showPersonalData2, setShowPersonalData2]             = useState(false)
  const [showPersonalInformation, setShowPersonalInformation] = useState(false)
  const [showPossibilityCheck, setShowPossibilityCheck]       = useState(false)
  const [showResult, setShowResult]                           = useState(false)
  const [showSubmit, setShowSubmit]                           = useState(false)
  
 
  



  return (
    <div>
      <img className="background-img" src="../../img/unterschrift.jpg" alt="" />
      <div className="space"></div>
      <div className="request-container">
     
     
       

        {/* ------------------------------------------------------------------------- */}

       {showPermission      ? (         <Permission 
        sendShowOwn       = {showPermission      => setShowPermission         (showPermission)}        
        sendShowNext      = {showFormForRequest  => setShowFormForRequest     (showFormForRequest)}   
        sendPermissionWA  = {newsletterWA        => setNewsletterWA           (newsletterWA)}        
        sendPermissionMail= {newsletterMail      => setNewsletterMail         (newsletterMail)}        
             
        />):null}

        {/* ------------------------------------------------------------------------- */}
        
        {showFormForRequest ? (   <FormForRequest
          sendShowLast =  {showPermission         => setShowPermission         (showPermission)}
          sendShowOwn  =  {showFormForRequest     => setShowFormForRequest     (showFormForRequest)}
          sendShowNext =  {showPossibilityCheck   => setShowPossibilityCheck   (showPossibilityCheck)}
          sendData     =  {FormForRequestData     => setFormForRequestData     (FormForRequestData)}       
        />):null} 

        {/* ------------------------------------------------------------------------- */}

        {showPossibilityCheck ? (  <PossibilityCheck
          sendShowLast   = {showFormForRequest    => setShowFormForRequest     (showFormForRequest)}
          sendShowOwn    = {showPossibilityCheck  => setShowPossibilityCheck   (showPossibilityCheck)}
          sendShowNext   = {showNecessaryApproval => setShowNecessaryApproval  (showNecessaryApproval)}
          sendPossibility= {possibility           => setPossibility            (possibility)}
          
        />):null}

        {/* ------------------------------------------------------------------------- */}

         {showNecessaryApproval ? (<NecessaryApproval
          sendShowLast= {showPossibilityCheck    => setShowPossibilityCheck    (showPossibilityCheck)}
          sendShowOwn = {showNecessaryApproval   => setShowNecessaryApproval   (showNecessaryApproval)}
          sendShowNext= {showBuSumCalculator     => setShowBuSumCalculator     (showBuSumCalculator)}
          sendData    = {necessaryApproval       => setNecessaryApproval       (necessaryApproval)}
         />):null}  

         {/* ------------------------------------------------------------------------- */}  

        {showBuSumCalculator ? (    <BuSumCalculator
          sendShowLast  = {showNecessaryApproval  => setShowNecessaryApproval  (showNecessaryApproval)}
          sendShowOwn   = {showBuSumCalculator    => setShowBuSumCalculator    (showBuSumCalculator)}
          sendShowNext  = {showGkvOptions         => setShowGkvOptions         (showGkvOptions)}
          sendBrutto    = {brutto                 => setBrutto                 (brutto)}
          sendInsuredSum= {insuredSum             => setInsuredSum             (insuredSum)}
          sendPrice     = {price                  => setPrice                  (price)}
          sendCollar    = {whiteCollar            => setWhiteCollar            (whiteCollar)}        
        />): null}

          {/* ------------------------------------------------------------------------- */}
         
        {showGkvOptions  ? (             <GkvOptions
          sendShowLast  ={showBuSumCalculator     => setShowBuSumCalculator    (showBuSumCalculator)}
          sendShowOwn   ={showGkvOptions          => setShowGkvOptions         (showGkvOptions)}
          sendShowNext  ={showPersonalData        => setShowPersonalData       (showPersonalData)}
          sendMembership={membership              => setMembership             (membership)}
          sendCompany   ={company                 => setCompany                (company)}
        />): null} 
        
         {/* ------------------------------------------------------------------------- */}  
        {showPersonalData?(           <PersonalData
          sendShowLast= {showGkvOptions           => setShowGkvOptions         (showGkvOptions)}
          sendShowOwn = {showPersonalData         => setShowPersonalData       (showPersonalData)}
          sendShowNext= {showPersonalInformation  => setShowPersonalInformation(showPersonalInformation)}
          sendData    = {personalData             => setPersonalData           (personalData)}
        />):null}

         {/* ------------------------------------------------------------------------- */}  
   
        {showPersonalInformation? (<PeronlalInformation
          sendShowLast= {showPersonalData         => setShowPersonalData       (showPersonalData)}
          sendShowOwn = {showPersonalInformation  => setShowPersonalInformation(showPersonalInformation)}
          sendShowNext= {showPersonalData2        => setShowPersonalData2      (showPersonalData2)}
          sendData    = {personalInfos            => setPersonalInfos          (personalInfos)}
        />): null}  

       

         {/* ------------------------------------------------------------------------- */}  
        {showPersonalData2?(         <PersonalData2
         sendShowLast=  {showPersonalInformation => setShowPersonalInformation (showPersonalInformation)}
         sendShowOwn =  {showPersonalData2        => setShowPersonalData2      (showPersonalData2)}
         sendShowNext=  {showSubmit               => setShowSubmit             (showSubmit)}
         sendData    =  {personalData2            => setPersonalData2          (personalData2)}
        />):null}

         {/* ------------------------------------------------------------------------- */}  
           {showSubmit ?( 
            <> Hiermit möchte ich mir ein Angebot und die Vertragsunterlagen zukommen lassen. 
             <div className="checkbox-div">
             <div className="request-footer-moreButton">
               <div>
                 <button className="btn btn-transparent"
                   onClick={(event) => {
                     event.preventDefault();
                     setShowSubmit(false);
                     setShowPersonalData2(true);
                   }}>Zurück</button>
               </div>
              
               <button className="btn btn-transparent"
               onClick={ async(event) =>{
               
                 setShowSubmit(false)
                 await createRequester(event)
                 setShowResult(true)

               }}>
                 Abschicken
               </button>
             </div>
           </div></>
            ): null}
        {/* ------------------------------------------------------------------------- */}
            {showResult?(<SendStatus/>):null} 
        

            
      </div>
       
    </div> 
  );
}
