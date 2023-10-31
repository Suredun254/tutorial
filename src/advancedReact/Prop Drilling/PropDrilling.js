import React, { useState } from "react";
import { data } from "../UseStates/names";
const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => people.filter((person) => person.id !== id));
  };

  return (
    <>
      <h1>Prop Drilling</h1>
      <List people={people} removePerson={removePerson} />
    </>
  );
};
const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};
const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <>
      <h2>{name}</h2>
      <button
        onClick={() => {
          removePerson(id);
        }}
      >
        Remove
      </button>
    </>
  );
};

export default PropDrilling;
