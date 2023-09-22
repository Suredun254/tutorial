import React from "react";

const Book = (props) => {
  const { img, title, author } = props.book;
  // attribute, eventHandler
  // onClick , onMouseOver

  const clickHandler = () => {
    alert("Welcome to our Book Vendor ");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <div
      className="book"
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={img} alt="img" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Buy Book
      </button>{" "}
      <button type="button" onClick={complexExample(author)}>
        complex Example
      </button>
    </div>
  );
};

export default Book;
