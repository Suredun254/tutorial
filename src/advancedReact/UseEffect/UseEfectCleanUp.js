import React, { useEffect, useState } from "react";

// cleanup function
// second argument

const UseEfectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
      //cleanup function
    };
  });

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  return (
    <div>
      <h1>Window</h1>
      <h2>{size} px</h2>
    </div>
  );
};

export default UseEfectCleanUp;
