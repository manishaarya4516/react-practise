import React, { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = { name, email ,id:new Date().getTime().toString()};

    setPeople([...people, person]);
    console.log(people);

    setName("");
    setEmail("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>email</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>add</button>
      </form>
      {people.map((person) => {
        const { name, email,id } = person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <h3>{email}</h3>
          </div>
        );
      })}
    </div>
  );
};
