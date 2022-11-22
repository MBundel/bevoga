import React from "react";

import "../css/MainPages.css";
import "../css/Blog.css";

import { RiPsychotherapyFill } from "react-icons/ri";

function Blog() {
  const data = [{
    icon: <RiPsychotherapyFill size={200} />,
    header: "BU trotz Psychotherapie",
    text: "Erfahre, wie klassische Versicherer die Psychotherapie bewerten und wie wir es tun.",
    link: "/Psyche"
  }];

  return (
    <div>
      <img src="./img/blog.jpg" alt="bevoga-blog" className="background-img" />
      <div className="space"></div>
      <div className="centered box-transparent ">
        
        Hier entsteht ein Blog mit allen wichtigen Infos
      </div>
      {data.map((data)=>(
      <a href={data.link}>
      <div className="blog-container">
        <div className="blog-icon">{data.icon}</div>
        <div className="flex-container">
          <div className="blog-header">
            {data.header}
          </div>
          <div className="blog-text">
            <p>{data.text}</p>
          </div>
        </div>
      </div></a>))}

      
    </div>
  );
}

export default Blog;
