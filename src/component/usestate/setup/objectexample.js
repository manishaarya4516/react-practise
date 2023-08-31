import React, { useState } from "react";
const man = { id: 1, name: "mannu", age: 24, message: "hello hiii" };
export const ObjectExample = () => {
  const [people, setPeople] = useState(man);
  const [name, setName] = useState("mannu");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("helo hiii");
  console.log(people);
  const changeMsg = () => {
    setMessage("byy byyy")
    // setPeople({ ...people, message: "byyy byyy" });
  };
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>{message}</h2>
      <button onClick={changeMsg}>change</button>
    </div>
  );
};
