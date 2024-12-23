import React from "react";
import reactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

const Booklist = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <>
      <h1>Best Girl in The World</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} getBook={getBook} index={index} />
          );
        })}
      </section>
    </>
  );
};

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
