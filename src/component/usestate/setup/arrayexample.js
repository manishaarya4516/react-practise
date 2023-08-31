import React, { useState } from "react";
import { Data } from "../../pages/data/data";

export const ArrayExample = () => {
  const [people, setPeople] = useState(Data);

  const clearAll = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    console.log(newPeople);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name, age } = person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <h3>{age}</h3>
            <button onClick={() => clearAll(id)}>clear</button>
          </div>
        );
      })}
    </div>
  );
};
