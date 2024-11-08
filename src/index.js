import React from "react";
import reactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  author: "Bagajqmomo",
  title: "Kim Minji is the best",
  img: "./images/book-1.jpeg",
};

const secondBook = {
  author: "Chang Yun",
  title: "aespa is the best",
  img: "./images/book-2.jpg",
};

const Booklist = () => {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
