import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../lib/init-firebase.js";
import { collection, addDoc } from "firebase/firestore";

import "../css/Button.css";

const Form = (props) => {
  //firebase create user

  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [newMail, setNewMail] = useState(0);

  const usersCollectionRef = collection(db, "requester");

  const createUser = async (event) => {
    event.preventDefault();
    await addDoc(usersCollectionRef, {
      firstName: newFirstName,
      lastName: newLastName,
      phone: newNumber,
      email: newMail,
    });
  };

  // button able/disable
  const [deactivateButton, setDeactivateButton] = useState(true);
  //enable Button-function
  function checkInput() {
    if (
      values.email &&
      values.phone &&
      values.firstName.trim() &&
      values.lastName.trim()
    ) {
      setDeactivateButton(false);
    } else {
      setDeactivateButton(true);
    }
  }

  useEffect(() => {
    checkInput();
  }, [newFirstName, newLastName, newNumber, newMail]);

  // handle Input and update value/name

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // validation

  function validate() {
    const errors = {};
    if (!values.email) {
      errors.email = "Email-Adresse bitte angeben";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email-Adresse ist ungültig";
    }
    if (!values.phone) {
      errors.phone = "Telefonnummer bitte angeben";
    } else if (
      !/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-s./0-9]*$/g.test(values.phone)
    ) {
      errors.phone = "Format ist ungültig";
    }
    if (!values.firstName.trim()) {
      errors.firstName = "Bitte Namen eintragen";
    }
    if (!values.lastName.trim()) {
      errors.lastName = "Bitte Namen eintragen";
    }
    setErrors(errors);

    return JSON.stringify(errors) === JSON.stringify({});
  }
  // handle submit

  const handleSubmit = async (event) => {
    event.preventDefault();
    //handle validation
    const isValid = validate();
    // sucsessful submit
    if (isValid) {
      props.sendNewFirstName(values.firstName);
      props.sendNewLastName(values.lastName);
      props.sendNewNumber(values.phone);
      props.sendNewMail(values.email);
      setDeactivateButton(true);
      await createUser(event);
      props.sendShowFormForRequest(false);
      // setShow(false);
    }
  };

  // HTML FORM

  return (
    <div>
      <div> Deine Kontaktdaten </div>
      <form>
        <input
          type="text"
          placeholder="Dein Vorname"
          name="firstName"
          value={values.firstName}
          onChange={(event) => {
            setNewFirstName(event.target.value);
            handleChange(event);
            checkInput(event);
          }}
        />
        {errors.firstName && <p>{errors.firstName} </p>}
        <input
          placeholder="Dein Nachname"
          name="lastName"
          value={values.lastName}
          onChange={(event) => {
            setNewLastName(event.target.value);
            handleChange(event);
            checkInput(event);
          }}
        />
        {errors.lastName && <p>{errors.lastName}</p>}
        <input
          type="tel"
          name="phone"
          placeholder="Deine Telefonnummer"
          value={values.phone}
          onChange={(event) => {
            setNewNumber(event.target.value);
            handleChange(event);
            checkInput(event);
          }}
        />
        {errors.phone && <p>{errors.phone}</p>}
        <input
          type="email"
          name="email"
          placeholder="Deine Mailadresse"
          value={values.email}
          onChange={(event) => {
            setNewMail(event.target.value);
            handleChange(event);
            checkInput(event);
          }}
        />
        {errors.email && <p>{errors.email}</p>}
        <br /> <br />
        <div className="request-footer-moreButton">
          <button
            className="btn btn-transparent"
            onClick={(event) => {
              event.preventDefault();
              props.sendShowFormForRequest(false);
              props.sendShowPermission(true);
             
            }}
          >
            Zurück
          </button>
          <button
            className="btn btn-transparent"
            onClick={(event) => {
              handleSubmit(event);
            }}
            disabled={deactivateButton}
          >
            Weiter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
