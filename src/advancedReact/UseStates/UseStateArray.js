import React, { useState } from "react";
import { data } from "./names";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = oldPeople.filter((person) => person.id !== id);
    setPeople(newPeople);

    {
      /*
  ====================================
    const removeItem = (id) => {
      let newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
      setTimeout(() => {
        setPeople(newPeople);
      }, 2000);
      };
    To have a delay in removing a person
    ==================================
*/
    }
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" onClick={() => setPeople([])}>
        Clear people
      </button>
    </>
  );
};

export default UseStateArray;
