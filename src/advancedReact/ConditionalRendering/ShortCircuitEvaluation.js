import React, { useState } from "react";

const ShortCircuitEvaluation = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello sure";
  // const secondValue = text && "hello sure";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value:{secondValue}</h1> */}
      <h1>{text || "john doe"}</h1>
      {text && <h1>hello world</h1>}
      {!text && <h1>hello world</h1>}
      <button type="button" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Errror...</h1>}

      {/* tenary operator */}
      {isError ? <p>AN error is present</p> : <h2>there is no error</h2>}
    </>
  );
};

export default ShortCircuitEvaluation;
