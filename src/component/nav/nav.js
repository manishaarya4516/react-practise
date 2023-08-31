import React, { useState } from "react";
import { NavStyle } from "./navstyle";

export const Nav = () => {
  const [age,setAge] = useState(0)


const Increase=()=>{
  setAge (age+1)
  console.log(age);
}
const Decrease=()=>{
  setAge(age-1)
}
  return (
    <NavStyle>
      <div>
      <button onClick={Decrease}>decrease</button>
        <h2 className="nav-title">{age}</h2>
        <button onClick={Increase}>increase</button>
      </div>
    </NavStyle>
  );
};
