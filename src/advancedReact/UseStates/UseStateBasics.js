import React from "react";
import { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("random title");

  const handleClick = () => {
    if (title === "random title") {
      setTitle("hello world");
    } else {
      setTitle("random title");
    }
  };
  return (
    <React.Fragment>
      <h2> {title}</h2>
      <button type="button" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
