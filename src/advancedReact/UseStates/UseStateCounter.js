import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      //   setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <div className="maindiv">
      <section>
        <>
          <h1>UseState Counter example</h1>
          <h2 style={{ margin: "4rem 0", color: "red" }}>{value}</h2>

          {/* 
            ==========================================
            <button type="button" onClick={() => setValue(value - 1)}>
                Decrement
            </button> 
            invoking function directly
            ==========================================
       */}

          <button type="button" onClick={decrement}>
            Decrement
          </button>
          <button type="button" onClick={reset}>
            Reset
          </button>
          <button type="button" onClick={increment}>
            Increment
          </button>
        </>
        <>
          <h1>UseState Complex Counter example</h1>
          <h2 style={{ margin: "4rem 0", color: "red" }}>{value}</h2>

          <button type="button" onClick={complexIncrease}>
            Increase Later
          </button>
        </>
      </section>
    </div>
  );
};

export default UseStateCounter;
