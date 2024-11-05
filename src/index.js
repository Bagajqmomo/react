import React from "react";
import reactDOM from "react-dom/client";

const Booklist = () => {
  return (
    <section>
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/71AQWDUx1bL._SY466_.jpg"
      alt="The Housemaid's Wedding: A Short Story "
    />
  );
};

const Title = () => {
  return <h2>The Housemaid's Wedding: A Short Story </h2>;
};
const Author = () => {
  return <h4>Author Name</h4>;
};

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(<Booklist />);
