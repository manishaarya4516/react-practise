import React, { useState } from "react";

export const Learning = () => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState([]);

  const inputValue = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    const newTask = [...show, value];
    setShow(newTask);
  };
  const deleteTask = (taskName) => {
    const newTask = show.filter((task) => task !== taskName);
    setShow(newTask);
  };
  return (
    <div>
      <input type="text" onChange={inputValue} /> 
      <button onClick={handleClick}>ADD </button>
      <div>
        {show.map((task) => {
          return (
            <div>
              <h1>{task}</h1>
              <button onClick={() => deleteTask(task)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
