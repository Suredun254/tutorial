import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value >= 1) {
      document.title = `New message(${value})`;
    }
  }, [value]);

  return (
    <div className="maindiv">
      <h1>UseEffectBasics example</h1>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Change value</button>
    </div>
  );
};

export default UseEffectBasics;
