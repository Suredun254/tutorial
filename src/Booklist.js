import React from "react";

const Books = [
  {
    id: 1,
    title: "The Ballad of Songbirds and Snakes",
    author: "Suzanne Collins",
    img: "https://images-na.ssl-images-amazon.com/images/I/51RYHlz+7OL._AC_SX184_.jpg",
  },
  {
    id: 2,
    title: "White Bird: A Novel: Based on the Graphic",
    author: "R.J Palacio, Erica S. Perl",
    img: "https://images-na.ssl-images-amazon.com/images/I/51i6KX4JNIL._AC_SX184_.jpg",
  },
  {
    id: 3,
    title: "Black Cake: A Novel",
    author: "Charmaine Wilkerson",
    img: "https://images-na.ssl-images-amazon.com/images/I/51AuvKnaQzL._AC_SX184_.jpg",
  },
];
const Booklist = () => {
  return (
    <section className="bookList">
      {Books.map((book) => {
        // const { img, author, title } = book;
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <div className="book">
      <img src={img} alt="img" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </div>
  );
};

export default Booklist;
