import React from "react";

function Books(props) {
  return (
    <>
      {props.books.map((book) => {
        return (
          <div key={book.id}>
            <h2
              style={{
                textAlign: "left",
              }}
            >
              {book.title}
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <img
                style={{
                  width: "10%",
                }}
                src={book.imageLinks.thumbnail}
                alt=""
              />
              <p
                style={{
                  width: "89%",
                  textAlign: "left",
                }}
              >
                {book.description}
              </p>
            </div>
            <h3
              style={{
                textAlign: "left",
              }}
            >
              {book.authors}
            </h3>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default Books;
