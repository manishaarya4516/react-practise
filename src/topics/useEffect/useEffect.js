import React, { useEffect, useState } from "react";

export const UseEffect = () => {
  const [value, setValue] = useState(0);
  const [mm, setMm] = useState();
  useEffect(() => {
    document.title = "mann";
    console.log("mmmmmm");
  }, [value]);
  console.log("nnn");
  const onn = () => {
    setMm("mmeeeeee");
  };
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>click</button>
      <button onClick={() => setValue(value - 1)}>me</button>
      {mm}
      <button onClick={onn}>me</button>
    </div>
  );
};
