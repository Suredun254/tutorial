import React, { useContext, useState } from "react";
import { data } from "../UseStates/names";
const PersonContext = React.createContext();
//provider, consumer
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => people.filter((person) => person.id !== id));
  };

  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h1> UseContext Hook and Context API</h1>
      <List />
    </PersonContext.Provider>
  );
};
const List = () => {
  const mainData = useContext(PersonContext);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};
const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
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

export default ContextAPI;
