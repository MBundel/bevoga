// import
import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// import Css

import "../../css/Button.css";

const Form = (props) => {
  //firebase create user

  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [newMail, setNewMail] = useState(0);

  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/create"
      : "http://bevogabeanstalk-env.eba-wfpdniin.eu-central-1.elasticbeanstalk.com/create";

  const handleSubmitSERVER = () => {
    fetch(baseURL, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filledForm),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      })
      .catch((err) => {
        console.log("rejected", err);
      });
  };

  //-------- form --------------

  const filledForm = {
    firstName: newFirstName,
    lastName: newLastName,
    phone: newNumber,
    email: newMail,
  };

  //----------------- Send EMailJS function ------------
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "default_service",
        "template_e3flt9o",
        filledForm,
        "Qp969SYEVhnBfwmCg"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    console.log("jup");
  };

  // button able/disable
  const [deactivateButton, setDeactivateButton] = useState(false);

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
      setDeactivateButton(true);
      await handleSubmitSERVER();
      console.log("nach event");
      setDeactivateButton(false);
      setShow(false);
    }
  };

  const [show, setShow] = useState(true);

  // HTML FORM

  return (
    <div>
      {show ? (
        <div style={{ width: "400px" }}>
          <div> {props.header1}</div>
          <div> {props.header2} </div>
          {/* <form>
            <input
              type="text"
              placeholder="Dein Vorname"
              name="firstName"
              value={values.firstName}
              onChange={(event) => {
                setNewFirstName(event.target.value);
                handleChange(event);
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
              }}
            />
            {errors.email && <p>{errors.email}</p>}
            <br /> <br />

           
            <button
              className="btn btn-transparent"
              onClick={(event) => {
                handleSubmit(event);
                sendEmail(event)      
              }}
              disabled={deactivateButton}
            >
              {props.button}
            </button>
          </form> */}
          <form
            action="https://app.getresponse.com/add_subscriber.html"
            accept-charset="utf-8"
            method="post"
            style={{ width: "100%" }}
          >
            <input
              type="text"
              name="email"
              placeholder="Deine Email-Adresse"
              style={{ width: "100%" }}
            />
            <br />
            <input
              type="text"
              name="first_name"
              placeholder="Dein Vorname"
              style={{ width: "100%" }}
            />
            <br />

            <input
              type="text"
              name="last_name"
              placeholder="Deine Nachname"
              style={{ width: "100%" }}
            />
            <br />
            <input
              name="custom_weitere"
              type="text"
              placeholder="Deine Telefonnummer"
              style={{ width: "100%" }}
            />
            <br />
            <input type="hidden" name="campaign_token" value="QcaM4" />

            <input
              type="hidden"
              name="thankyou_url"
              value="https://www.bevoga.de/newsletter"
            />

            <input type="hidden" name="start_day" value="0" />

            <input
              type="submit"
              value="Abschicken"
              style={{ width: "100%" }}
              className="btn btn-transparent"
            />
          </form>
        </div>
      ) : null}
      {!show ? (
        <div className="centered">
          {" "}
          <p>
            {" "}
            Erfolgreich abgeschickt! <br /> Bestätigungsmail ist unterwegs
          </p>{" "}
        </div>
      ) : null}
    </div>
  );
};

export default Form;
