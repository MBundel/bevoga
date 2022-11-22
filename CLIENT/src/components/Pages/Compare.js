import React from "react";
import Table from "../Table";
import {Helmet} from 'react-helmet-async'
import * as buQuestions from "../../records/BuQuestions.js";

import { Button } from "../Button";

import "../css/MainPages.css";


const questionAndAnswer = buQuestions.questionAndAnswer;
const list = questionAndAnswer.map((element) => {
  return {
    question: element[0],
    answerA: element[1],
    answerB: element[2],
  };
});

const colNames = ["frage", "bevoga", "gewöhnliche BU"];


function Compare() {
  return (
    <>
      
     <Helmet>
      <title> Vergleich: standard BU und unsere BU </title>
      <meta name="description" content="Wie unterscheiden sich  die Berufsunfähigkeitsversicherungen?"/> 
      <link rel="canonical" href="/compare" />
    </Helmet>
      <img src="./img/compare.jpg" alt="vergleich" className="background-img" />
      <div className="contentDiv">
       
        <Table list={list} colNames={colNames} />
        <div className="space"></div>
      </div>
      <br />
          <br />
          <div className="importantBox">
            <div className="centeredContent">
              <Button
                path="/infos"
                class="btn-middle btn-transparent btn"
                text="Mehr infos?"
              />
              <Button
                path="/request"
                class="btn-middle btn-white btn"
                text="zum Antrag"
              />
            </div>
          </div>
          <br />
          <br />
    </>
  );
}

export default Compare;
