import React from "react";
import { Helmet } from "react-helmet-async";

import "../../css/MainPages.css";
import "../../css/Blog.css";

import { RiPsychotherapyFill } from "react-icons/ri";
import { BsCardChecklist } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdSick } from "react-icons/md";
import { GiThink } from "react-icons/gi";

function Blog() {
  const data = [
    {
      icon: <BsCardChecklist size={150} />,
      header: "Bu ohne Gesundheitsprüfung",
      text: "Warum wir ohne Gesundheitsfragen auskommen und wieso andere sie haben.",
      link: "/BuOhneGesundheitsfragen",
    },
    {
      icon: <GoChecklist size={150} />,
      header: "9 Gründe für unsere Bevoga",
      text: "Wann solltrest du eine klassische BU haben und wann ist die bevoga sinnvoller für dich? ",
      link: "/ProBevoga",
    },
    {
      icon: <RiPsychotherapyFill size={200} />,
      header: "BU trotz Psychotherapie",
      text: "Erfahre, wie klassische Versicherer die Psychotherapie bewerten und wie wir es tun.",
      link: "/Psyche",
    },
    {
      icon: <FaMoneyBillWave size={140} />,
      header: "die günstige BU",
      text: "Für Handwerker und  alle anderen (risikoreichen) Berufe, haben wir eine BU mit Kostenersparnis für dich!",
      link: "/GuenstigeBU",
    },
    {
      icon: <MdSick size={140} />,
      header: "chronische Krankheiten",
      text: "Wie chronische Krankheiten sich bei der  Versicherbarkeit der Berufsunfähigkeit  auswirken können",
      link: "/chronischeKrankheiten",
    },
    {
      icon: <GiThink size={160} />,
      header: "ist eine BU sinnvoll?",
      text: "Hier schauen wir uns an, wann eine BU sinn ergibt und für wen sie geeignet ist.",
      link: "/BuSinnvoll",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>bevoga Blog - alles über Bu ohne Gesundheitsprüfung</title>
        <meta name="description" content="Blog unserer bevoga-Absicherung" />
        <link rel="canonical" href="/Blog" />
      </Helmet>
      <img src="./img/blog.jpg" alt="bevoga-blog" className="background-img" />
      <div className="space"></div>
      <div className="centered box-transparent ">
        <h1>bevoga-Blog</h1>
      </div>
      <br />
      {data.map((data) => (
        <a href={data.link}>
          <div className="blog-container">
            <div className="blog-icon">{data.icon}</div>
            <div className="flex-container">
              <div className="blog-header">{data.header}</div>
              <div className="blog-text">
                <p>{data.text}</p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Blog;
