import React from "react";

import { books } from "./Book/books";
import Book from "./Book/Book";
const Booklist = () => {
  return (
    <section className="bookList">
      {books.map((book, index) => {
        {/* const { img, author, title } = book; */}

        return <Book key={book.id} book={book}></Book>;
        {/* <Book key={book.id} {...book}></Book>; */}
        {/* Spread operator....  */}
      })}
    </section>
  );
};

export default Booklist;
