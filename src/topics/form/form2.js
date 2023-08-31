import React, { useState } from "react";
import { FormStyle } from "./FormStyle";

export const Form2 = () => {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    age: "",
    desc: "",
  });

  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({
      ...person,
      [name]: value,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.age && person.desc) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ name: "", email: "", age: "", desc: "" });
    }
  };

  return (
    <FormStyle>
      <div>
        <form>
          <label>name</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={person.name}
            onChange={handleChange}
          />
          <label>email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={person.email}
            onChange={handleChange}
          />
          <label>Age</label>
          <input
            type="text"
            name="age"
            placeholder="age"
            value={person.age}
            onChange={handleChange}
          />
          <label>description</label>
          <input
            type="text"
            name="desc"
            placeholder="desc"
            value={person.desc}
            onChange={handleChange}
          />
          <button onClick={handleClick}>add</button>
        </form>
        {people.map((person) => {
          const { name, email, id, age, desc } = person;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <h3>{email}</h3>
              <h4>{age}</h4>
              <h5>{desc}</h5>
            </div>
          );
        })}
      </div>
    </FormStyle>
  );
};
