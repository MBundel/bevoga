import React from "react";

import "../css/MainPages.css";
import "../css/Blog.css";

import { CgPacman } from "react-icons/cg";

function Blog() {
  const data = {
    icon: <CgPacman size={200} />,
    header: "Überschrift Placeholder",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquya. Lorem ipsum dolor sit  ...",
    link: "/"
  };

  return (
    <div>
      <img src="./img/blog.jpg" alt="fragezeichen" className="background-img" />
      <div className="space"></div>
      <div className="centered box-transparent ">
        
        Hier entsteht ein Blog mit allen wichtigen Infos
      </div>
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
      </div></a>

      
    </div>
  );
}

export default Blog;
