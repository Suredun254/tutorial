import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "sure",
    age: 23,
    message: "Hello Sure",
  });

  // having separate useState variables
  const [name, setName] = useState("Sure");
  const [age, setAge] = useState(23);
  const [message, setMessage] = useState("hello world");

  const changeMessage = () => {
    // setPerson({ ...person, message: "hello world" });
    // accessing of object when listed in useState({})

    setMessage("welcome to coding");
  };

  return (
    <div className="maindiv">
      <h1>UseStateObject Example</h1>
      {/* <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3> */}

      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button onClick={changeMessage}>Change Message</button>
    </div>
  );
};

export default UseStateObject;
