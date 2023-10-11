import React, { useState } from "react";

const MultipleInputs = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = {
        ...person,
        id: new Date().getTime().toString(),
      };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };

  return (
    <div className="maindiv">
      <article>
        <form action="" onClick={handleSubmit}>
          <div>
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age: </label>
            <input
              type="text"
              name="age"
              id="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Add Person</button>
        </form>
        {people.map((person, index) => {
          const { id, email, firstName, age } = person;
          return (
            <div key={id}>
              <h1>{firstName}</h1>
              <h3>{email}</h3>
              <h3>{age}</h3>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default MultipleInputs;
