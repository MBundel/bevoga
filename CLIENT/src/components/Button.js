import React from "react";
import { Link } from "react-router-dom";

import "./css/Button.css";
export const Button = (props) => {
  

  return (
    <Link to={props.path}>
    <button className={props.class}>{props.text}</button>
    </Link>
  );
};
