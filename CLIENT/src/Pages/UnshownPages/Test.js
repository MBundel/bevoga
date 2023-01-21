import React, { useEffect, useState } from "react";

function Permission() {
  const [testData, setTestData] = useState([{}]);
  const [testPost, setTestPost] = useState({ "skills": "testENV3"});
  const [testPost2, setTestPost2] = useState({  "name": "frontend",  "age": "26"});
  const [wheelchair, setWheelchair] = useState(false);


  const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'http://bevogabeanstalk-env.eba-wfpdniin.eu-central-1.elasticbeanstalk.com/';



  const handleClick = () => {
    console.log("i was clicked");
    fetch(baseURL, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      })
      .catch((err) => {
        console.log("rejected", err);
      });
  };
  const handleClick2 = () => {
    console.log("i was clicked");
    fetch("http://localhost:5000/create", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testPost2),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      })
      .catch((err) => {
        console.log("rejected", err);
      });
      setWheelchair(true)
  };





  //HTML Stuff
  return (
    <>
      <div className="request-container">
        {typeof testData.skills === "undefined" ? (
          <p>Loading...</p>
        ) : (
          testData.skills.map((skills, i) => <p key={i}>{skills}</p>)
        )}

        <button className="btn btn-transparent" onClick={handleClick}>
          POST test
        </button>
        <button className="btn btn-transparent" onClick={handleClick2} disabled={wheelchair}>
          POST firebase test
        </button>
        <form action="https://api.getresponse.com/v3/accounts" method="POST">
          <input type="text" placeholder="Vorname" />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default Permission;
