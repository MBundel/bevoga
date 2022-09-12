import React from "react";
import { useState } from "react";
import { db } from "../../lib/init-firebase.js";
import { collection, addDoc } from "firebase/firestore";

import "../css/MainPages.css";

export default function Request() {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [newMail, setNewMail] = useState(0);
  const [newLoan, setNewLoan] = useState(0);
  const [newBirthday, setNewBirthday] = useState(0);

  const usersCollectionRef = collection(db, "requester");

  const createRequester = async (event) => {
    event.preventDefault();
    await addDoc(usersCollectionRef, {
      firstName: newFirstName,
      lastName: newLastName,
      phone: newNumber,
      email: newMail,
      loan: newLoan,
      birthday: newBirthday,
    });
  };

  const [show, setShow] = useState(true);

  return (
    <div>
      <img className="background-img" src="../../img/unterschrift.jpg" alt="" />
      <div className="space"></div>
      <div className="centered box-transparent-fit">
        {show ? (
          <div>
            
            Antrag bald online abschießbar, hier Angebot einfordern <br />
            <form>
              <input
                placeholder="Dein Vorname"
                required
                onChange={(event) => {
                  setNewFirstName(event.target.value);
                }}
              />
              <input
                placeholder="Dein Nachname"
                required
                onChange={(event) => {
                  setNewLastName(event.target.value);
                }}
              />
              <input
                type="tel"
                placeholder="Deine Telefonnummer"
                required
                onChange={(event) => {
                  setNewNumber(event.target.value);
                }}
              />
              <input
                type="email"
                placeholder="Deine Mailadresse"
                required
                onChange={(event) => {
                  setNewMail(event.target.value);
                }}
              />
              <input
                type="date"
                placeholder="Dein Geburtstag"
                required
                onChange={(event) => {
                  setNewBirthday(event.target.value);
                }}
              />

              <input
                type="number"
                placeholder="Dein monatliches Brutto"
                required
                onChange={(event) => {
                  setNewLoan(event.target.value);
                }}
              />

              <div className="space3"></div>
              <button
                className="btn btn-middle btn-transparent"
                onClick={(event) => {
                  createRequester(event);
                  setShow(false);
                }}
              >
                Abschicken
              </button>
            </form>
          </div>
        ) : null}
        {!show ? <div> Erfolgreich abgeschickt! </div> : null}
      </div>
    </div>
  );
}
