import React from "react";
import { Link } from "react-router-dom";

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


export default function Infos() {
  

  return (
    <>
      <div className="infoBackground">
        <img
          src="./img/fragen.jpg"
          alt="fragezeichen"
          className="background-img"
        />
        <div className="space"></div>
        <div className="contentInfoDiv">

          {/* --------- CARD -------------- */}

          <Link to="/whatsabu">
            <div className="icon-card">
              <div className="icon-card-icon">
                <GoInfo size={100} />
              </div>
              <div className="icon-card-text"> Alles über BU </div>
            </div>
          </Link>

          {/* --------- CARD -------------- */}

          <Link to="/compare">
            <div className="icon-card">
              <div className="icon-card-icon">
                <MdCompare size={100} />
              </div>
              <div className="icon-card-text"> bevoga vs Standard </div>
            </div>
          </Link>

          {/* --------- CARD -------------- */}
          
          <Link to="/concept">
            <div className="icon-card">
              <div className="icon-card-icon">
                <TbBulb size={100} />
              </div>
              <div className="icon-card-text"> wie funktioniert bevoga</div>
            </div>
          </Link>
          
          {/* --------- CARD -------------- */}
          
          <Link to="/partner">
            <div className="icon-card">
              <div className="icon-card-icon">
                <RiTeamLine size={100} />
              </div>
              <div className="icon-card-text"> Partner</div>
            </div>
          </Link>
          
          {/* --------- CARD -------------- */}
          
          <Link to="/aboutus">
            <div className="icon-card">
              <div className="icon-card-icon">
                <BsPersonBoundingBox size={100} />
              </div>
              <div className="icon-card-text"> Wer wir sind</div>
            </div>
          </Link>
          
          {/* --------- CARD -------------- */}
          
          <Link to="/bonus">
            <div className="icon-card">
              <div className="icon-card-icon">
                <GiReceiveMoney size={100} />
              </div>
              <div className="icon-card-text"> Bonusprogramm</div>
            </div>
          </Link>
          
          
          {/* --------- CARD -------------- */}
          
          <Link to="/blog">
            <div className="icon-card">
              <div className="icon-card-icon">
                <ImNewspaper size={100} />
              </div>
              <div className="icon-card-text"> Blog</div>
            </div>
          </Link>
          
          {/* --------- CARD -------------- */}
          
          <a href={Musterpolice} target="_blank" rel="noreferrer">
            <div className="icon-card">
              <div className="icon-card-icon">
                <FaFileContract size={100} />
              </div>
              <div className="icon-card-text"> Musterpolice</div>
            </div>
          </a>
          
          {/* --------- CARD -------------- */}
          
          <a href={Erstinformation} target="_blank" rel="noreferrer">
            <div className="icon-card">
              <div className="icon-card-icon">
                <FaFileContract size={100} />
              </div>
              <div className="icon-card-text">Erstinformation</div>
            </div>
          </a>
          
          {/* --------- CARD -------------- */}
          
          <a href={Policeninfoblatt} target="_blank" rel="noreferrer">
            <div className="icon-card">
              <div className="icon-card-icon">
                <FaFileContract size={100} />
              </div>
              <div className="icon-card-text"> Produktinfoblatt</div>
            </div>
          </a>
          {/* ---------------- */}
        </div>
      </div>
    </>
  );
}
