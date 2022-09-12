import React from "react";
import { Checkbox } from "@mui/material";
import { green } from "@mui/material/colors";
import { red } from "@mui/material/colors";
import { useState, useEffect } from "react";

function Permission(props) {
  //checkboxes Values
  const [values, setValues] = useState({
    checkValue1: false,
    checkValue2: false,
    checkValue3: false,
    checkValue4: false,
    checkValue5: false,
  });

  // This  will enable/disable the botton
  const [buttonState, setButtonState] = useState(true);

  // This  should be the onChange

  //   const handleClick = () => {
  //     setValues(!values.checkValue1);
  //   };



  //HTML Stuff
  return (
    <>
      <div className="request-container">
        <Checkbox
          sx={{
            color: red[200],
            "&.Mui-checked": {
              color: green[800],
            },
          }}
        
         
        />

        <Checkbox
          sx={{
            color: red[200],
            "&.Mui-checked": {
              color: green[800],
            },
          }}
        />

        
      </div>
    </>
  );
}

export default Permission;
