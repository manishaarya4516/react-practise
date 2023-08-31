import React, { useState } from "react";

export const ErrorExample1 = () => {
  const [text, setText] = useState("mannu");

  const handleClick = () => {
    if (text==="mannu") {
        setText("pallu");
        
    }else{
        setText("mannu")
    }
  };
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        color: "red",
        flexDirection:"column"
      }}
    >
      <h1>{text}</h1>
      <button type="button" onClick={handleClick}>
        change
      </button>
    </div>
  );
};
