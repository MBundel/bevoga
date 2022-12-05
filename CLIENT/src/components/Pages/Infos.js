import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Musterpolice from "../../documents/Musterpolice.pdf";
import Erstinformation from "../../documents/erstinformation.pdf";
import Policeninfoblatt from "../../documents/Policeninfoblatt.pdf";

import "../css/MainPages.css";
import "../css/Icons.css";
import "../css/Infos.css";

import { GoInfo } from "react-icons/go";
import { MdCompare } from "react-icons/md";
import { TbBulb } from "react-icons/tb";
import { RiTeamLine } from "react-icons/ri";
import { BsPersonBoundingBox } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { FaFileContract } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { RiPsychotherapyFill } from "react-icons/ri";
import { BsCardChecklist } from "react-icons/bs";
import { FaMoneyBillWave } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { MdSick } from "react-icons/md";
import { GiThink } from "react-icons/gi";
import { RiErrorWarningFill } from "react-icons/ri";

export default function Infos() {
  const infocardData = [
    {
      id: 1,
      icon: <GoInfo size={100} />,
      link: "/whatsabu",
      text: "Alles über BU",
    },
    {
      id: 2,
      icon: <MdCompare size={100} />,
      link: "/compare",
      text: "bevoga VS Standard",
    },
    {
      id: 3,
      icon: <TbBulb size={100} />,
      link: "/concept",
      text: "wie funktioniert bevoga",
    },
    {
      id: 4,
      icon: <RiTeamLine size={100} />,
      link: "/partner",
      text: "Partner",
    },
    {
      id: 5,
      icon: <BsPersonBoundingBox size={100} />,
      link: "/aboutus",
      text: "Wer wir sind",
    },
    {
      id: 6,
      icon: <GiReceiveMoney size={100} />,
      link: "/bonus",
      text: "Bonusprogramm",
    },
    {
      id: 7,
      icon: <ImNewspaper size={100} />,
      link: "/blog",
      text: "Blog",
    },
    {
      id: 8,
      icon: <RiPsychotherapyFill size={100} />,
      link: "/Psyche",
      text: "Bu und Psyche",
    },
    {
      id: 9,
      icon: <BsCardChecklist size={100} />,
      link: "/BuOhneGesundheitsfragen",
      text: "Bu ohne Ges.-Fragen",
    },
    {
      id: 10,
      icon: <FaMoneyBillWave size={100} />,
      link: "/GuenstigeBU",
      text: "niedriger Beitrag",
    },
    {
      id: 11,
      icon: <GoChecklist size={100} />,
      link: "/ProBevoga",
      text: "9 gute Gründe für uns ",
    },
    {
      id: 12,
      icon: <MdSick size={100} />,
      link: "/chronischeKrankheiten",
      text: "chronische Krankheiten ",
    },
    {
      id: 13,
      icon: <GiThink size={100} />,
      text: "Ist eine BU sinnvoll?",
      link: "/BuSinnvoll",
    },
    {
      id: 13,
      icon: <RiErrorWarningFill size={100} />,
      text: "Keine Normalannahme",
      link: "/keineNormalannahme",
    },
    // hier über einfügen
  ];
  const pdfObj = [
    {
      id: 901,
      icon: <FaFileContract size={100} />,
      link: Musterpolice,
      text: "Musterpolice",
    },
    {
      id: 902,
      icon: <FaFileContract size={100} />,
      link: Erstinformation,
      text: "Erstinformation",
    },
    {
      id: 903,
      icon: <FaFileContract size={100} />,
      link: Policeninfoblatt,
      text: "Policeninfoblatt",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Alles über Berufsunfähigkeitsversicherung </title>
        <meta
          name="description"
          content="Bibliothek unserer bevoga-Absicherung"
        />
        <link rel="canonical" href="/infos" />
      </Helmet>
      <div className="infoBackground">
        <img
          src="./img/fragen.jpg"
          alt="fragezeichen"
          className="background-img"
        />
        <div className="space"></div>
        <div className="contentInfoDiv">
          {/* --------- MAP-CARD -------------- */}
          {infocardData.map((infocardData) => (
            <Link to={infocardData.link}>
              <div className="icon-card">
                <div className="icon-card-icon">{infocardData.icon}</div>
                <div className="icon-card-text"> {infocardData.text}</div>
              </div>
            </Link>
          ))}
          {/* --------- MAP-CARD -------------- */}
          {pdfObj.map((pdfObj) => (
            <a href={pdfObj.link} target="_blank" rel="noreferrer">
              <div className="icon-card">
                <div className="icon-card-icon">{pdfObj.icon}</div>
                <div className="icon-card-text"> {pdfObj.text}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
