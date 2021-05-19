import React from "react";
import ReactDom from "react-dom";

// adding CSS file
import "./index.css";

// setup vars
//  building an object
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg",
  title: "I love you to the Moon and Back",
  author: "Amelia ..."
};

// const author = "Amelia ...";
// const title = "I love you to the Moon and Back";
// const img = "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book img={firstBook.img} />

      <Book title="random work" number={33} />
    </section>
  );
}

const Book = (propsOrWhatEver) => {
  console.log(propsOrWhatEver);

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h3>{author}</h3>
      <p>{propsOrWhatEver.job}</p>
      <p>{propsOrWhatEver.title}</p>
      <p>{propsOrWhatEver.number}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
