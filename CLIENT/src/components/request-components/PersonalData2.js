import React, { useState } from "react";

function PersonalData2(props) {
  const [type, setType] = useState("text");
  const [values, setValues] = useState({
    jobTitle: "",
    jobBegin: "",
    IBAN: "",
    BIC: "",
    bank: "",
    contactKK: false,
    perusal: false,
  });
  //--------------------handle Change ----------------------
  //handleChange Input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  // handle Type Change
  const handleType = () => {
    setType("date");
  };

  // ------------------------- HTML CODE -----------------------
  return (
    <>
      <form action="">
        <div className="checkbox-div">
          <input
            onChange={handleChange}
            name="jobTitle"
            value={values.jobTitle}
            type="text"
            placeholder=" Name der beruflichen Tätigkeit"
          />
          <input
            onClick={handleType}
            onChange={handleChange}
            name="jobBegin"
            value={values.jobBegin}
            type={type}
            placeholder="Seit wann tätig"
          />
        </div>
        <div className="checkbox-div">
          <input
            onChange={handleChange}
            name="IBAN"
            value={values.IBAN}
            type="text"
            placeholder="IBAN"
          />
          <input
            onChange={handleChange}
            name="BIC"
            value={values.BIC}
            type="text"
            placeholder=" BIC"
          />
          <input
            onChange={handleChange}
            name="bank"
            value={values.bank}
            type="text"
            placeholder="Bankname"
          />
        </div>
        {/* ------------------- CheckBox DIV -----------------------------   */}
      </form>
      {/* -------------------- Footer -------------------- */}
      <div className="checkbox-div ">
        <div className="request-footer-moreButton">
          <div className="request-footer-moreButton">
            {/* -------------------- Button Back -------------------- */}
            <button
              className="btn btn-transparent"
              onClick={() => {
                props.sendShowLast(true);
                props.sendShowOwn(false);
              }}
            >
              Zurück
            </button>
          </div>
          {/* -------------------- Button Next -------------------- */}
          <button
            className="btn btn-transparent"
            onClick={() => {
              props.sendShowNext(true);
              props.sendShowOwn(false);
              props.sendData(values);
            }}
          >
            Weiter
          </button>
        </div>
      </div>
    </>
  );
}

export default PersonalData2;
