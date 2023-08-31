import React from "react";
import { Book } from "../component/book/book";
import { books } from "./allbooks/books";

export const BookList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {books.map((book) => {
        return (
          <div>
            <Book key={book.id} {...book} />
          </div>
        );
      })}
    </div>
  );
};
