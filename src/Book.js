const Book = (props) => {
  const { img, title, author, getBook, id, index } = props;
  return (
    <article className="book">
      <p className="number">{index + 1}</p>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button
        onClick={() => {
          getBook(id);
        }}
      >
        Click me
      </button>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
