import React from "react";
import Team from "../../components/Team";
import {Helmet} from 'react-helmet-async'

import * as TeamMembers from "../../records/TeamMembers.js";

import { Button } from "../../components/Button";

const characteristics = TeamMembers.TeamMembers;


function AboutUs() {
  return (
    <div>
        
     <Helmet>
      <title>Team </title>
      <meta name="description" content="über uns"/> 
      <link rel="canonical" href="/aboutus" />
    </Helmet>
       <img src="./img/team.jpg" alt="fragezeichen" className="background-img" />
      <div className="space"></div>
        {characteristics.map((characteristics) => (
          <Team
            image={characteristics.img}
            imageAlt={characteristics.imgAlt}
            name={characteristics.name}
            title={characteristics.title}
            infoText={characteristics.text}
            mail={characteristics.mail}
            tasks={characteristics.tasks}
            phone={characteristics.phone}
          />
        ))}
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
    </div>
  );
}
export default AboutUs;
