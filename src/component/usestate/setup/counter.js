import React, { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState(0);

  const Increase = () => {
    setValue(value + 1);
  };

  const Decrease = () => {
    setValue(value - 1);
  };

  const Reset = () => {
    setValue(0);
  };
  const Complex=()=>{
    setTimeout(()=>{
       setValue(value + 1)
    },2000)
  }
  return (
    <div>
      <h2>Counter</h2>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>increase</button>
      <button onClick={() => setValue(0)}>reset</button>
      <button onClick={() => setValue(value - 1)}>decrease</button>
      <h1><button onClick={Complex}>complex</button></h1>
    </div>
  );
};
