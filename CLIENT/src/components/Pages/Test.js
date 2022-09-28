import React from "react";

import { useState, useEffect } from "react";

function Permission() {
  const [factor, setfactor] = useState(2);
  const [nullify, setNullify] = useState(1);

  const Price = 10;
  const Bonus = 15;
  const finalPrice = Math.max((Price * factor - Bonus) * nullify,0)

  const handleFactor = () => {
    setfactor(1)
    validate()
    console.log('jo')
  };

  const validate = () => {
    if (finalPrice < 0) {
      setNullify(0);
    }
  };



  //HTML Stuff
  return (
    <>
      <input type="checkbox" onClick={handleFactor} />
      


      {finalPrice}
    </>
  );
}

export default Permission;
