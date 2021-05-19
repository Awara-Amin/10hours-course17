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

const secondBook = {
  img:
    "https://www.cnet.com/a/img/wub4Q7jiOP1L3pAfdNQx1FzSgWw=/940x528/2020/04/17/def1b267-b843-4adf-957f-631062cf5bd7/1800-flowers.jpg",
  title: "I need you",
  author: "Bahasht ...",
  number: 33
};

// const author = "Amelia ...";
// const title = "I love you to the Moon and Back";
// const img = "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />

      {/* <Book title="random work" number={33} /> */}
      <Book
        img={secondBook.img}
        title={secondBook.title}
        number={secondBook.number}
      />
    </section>
  );
}

const Book = (propsOrWhatEver) => {
  console.log(propsOrWhatEver);

  return (
    <article className="book">
      {/* <img src={img} alt="" /> */}
      <img src={propsOrWhatEver.img} alt="" />
      <h1>{propsOrWhatEver.title}</h1>
      {/* <h1>{title}</h1> */}
      <h3>{propsOrWhatEver.author}</h3>
      {/* <h3>{author}</h3> */}
      {/* <p>{propsOrWhatEver.job}</p>
      <p>{propsOrWhatEver.title}</p> */}
      <p>{propsOrWhatEver.number}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
