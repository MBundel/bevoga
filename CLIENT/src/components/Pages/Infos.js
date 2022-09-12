import React from "react";


import { Link } from "react-router-dom";


import "../css/MainPages.css";
import "../css/Icons.css";
import "../css/Infos.css";

import { GoInfo } from "react-icons/go";
import { MdCompare } from "react-icons/md";
import { TbBulb } from "react-icons/tb";
import { RiTeamLine } from "react-icons/ri";
import { BsPersonBoundingBox } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";

export default function Infos() {
  return (
    <>
      <div className="infoBackground">
        <img src="./img/fragen.jpg" alt="fragezeichen" className="background-img" />
        <div className="space"></div>
        <div className="contentInfoDiv">
          <Link to="/whatsabu">
            <div className="icon-card">
              <div className="icon-card-icon">
                <GoInfo size={100} />
              </div>
              <div className="icon-card-text"> Alles über BU </div>
            </div>
          </Link>
          <Link to="/compare">
            <div className="icon-card">
              <div className="icon-card-icon">
                <MdCompare size={100} />
              </div>
              <div className="icon-card-text"> bevoga vs Standard </div>
            </div>
          </Link>
          <Link to="/concept">
            <div className="icon-card">
              <div className="icon-card-icon">
                <TbBulb size={100} />
              </div>
              <div className="icon-card-text"> wie funktioniert bevoga</div>
            </div>
          </Link>
          <Link to="/partner">
            <div className="icon-card">
              <div className="icon-card-icon">
                <RiTeamLine size={100} />
              </div>
              <div className="icon-card-text"> Partner</div>
            </div>
          </Link>
          <Link to="/aboutus">
            <div className="icon-card">
              <div className="icon-card-icon">
                <BsPersonBoundingBox size={100} />
              </div>
              <div className="icon-card-text"> Wer wir sind</div>
            </div>
          </Link>
          <Link to="/bonus">
            <div className="icon-card">
              <div className="icon-card-icon">
                <GiReceiveMoney size={100} />
              </div>
              <div className="icon-card-text"> Bonusprogramm</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
