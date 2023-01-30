import React from 'react'
import CookieConsent      from "react-cookie-consent";



function Cookies() {
   
  return (
    <>
    
    <CookieConsent
        location="bottom"
        buttonText="Zustimmen"
        cookieName="myAwesomeCookieName2"
        style={{ backgroundColor: "#78B2DB" }}
        buttonStyle={{
          color: "white",
          fontSize: "13px",
          backgroundColor: "green",
        }}
        expires={150}
        enableDeclineButton
        declineButtonText="Ablehnen"
        declineButtonStyle={{
            color: "#60A5D6",
            backgroundColor: "#90C0E2"
        }}
        flipButtons
        
      >
        Wir nutzen <u><a href='/privacy'>Cookies</a></u>,{" "} um die Benutzererfahrung zu optimieren.
        <br /> 
        <br />
        <br />
        <br />
        <br />
        <br /> <span style={{fontSize: "10px"}}> Wir eheben statistische Daten, um unsere Website für die Benutzerfreundlichkeit anzupassen. Dabei nutzen wir Google Analytics, damit wir wissen, woher der User kommt und wie er sich auf der Seite zurechtfindet. Somit können wir diese Website benutzerfreundlicher gestalten.
        </span>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        .
      </CookieConsent>
    
    </>
  )
}

export default Cookies