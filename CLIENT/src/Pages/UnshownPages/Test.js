import React, { useEffect, useState } from "react";

function Permission() {
  const [testData, setTestData] = useState([{}]);
  const [testPost, setTestPost] = useState({ 'skills': ["eating"] });

  // useEffect(() => {
  //   fetch("http://localhost:5000/")
  //     .then((response) => response.json())
  //     .catch((err) => {
  //       console.log("rejected", err);
  //     })
  //     .then((data) => {
  //       setTestData(data);
  //     });
  // }, []);

  const handleClick = () => {
    console.log("i was clicked")
    fetch("http://localhost:5000/", {
      method: "post",
      headers: {'Accept': 'application/json',"Content-Type": "application/json"},
      body: JSON.stringify(testPost),
    }).then((res) => res.json())
    .then(data =>{console.log("success", data)})
    .catch((err) =>{console.log("rejected", err)})
    
  };

  const handleSubmit = () => {
    fetch("https://api.getresponse.com/v3/accounts",{
      method: 'post',
      headers: {'Accept': 'application/json',"Content-Type": "application/json"},
    })
  }

  //   useEffect(() => {
  //   const getResponse = async () => {
  //     const url = `https://graph.instagram.com/v15.0/me/media?fields=id,media_url,permalink&access_token=${process.env.REACT_APP_INSTAGRAM_KEY}`;
  //     const data = await fetch(url).then((res) => res.json());
  //     setFeed(data);
  //   };
  //   getResponse();
  // }, []);


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
<form action="https://api.getresponse.com/v3/accounts" method="POST">
  <input type="text"  placeholder="Vorname"/>
  <input type="submit" />
</form>



      </div>
    </>
  );
}

export default Permission;
