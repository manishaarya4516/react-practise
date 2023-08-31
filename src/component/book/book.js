import React from "react";
import "../book/book.css";

export const Book = (props) => {
  const { img, header, author } = props;
  return (
    <div className="book">
      <img src={img} alt="img" />
      <h1>{header}</h1>
      <h3>{author}</h3>
    </div>
  );
};
