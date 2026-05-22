"use strict";

// Simulates loading data asynchronously
async function fetchBooks() {

    // The async function immediately returns a Promise
  return new Promise((resolve) => {

     // setTimeout runs asynchronously
    setTimeout(() => {
      const books = [
        {
          title: "The Hobbit",
          author: "J.R.R. Tolkien"
        },
        {
          title: "1984",
          author: "George Orwell"
        },
        {
          title: "Dune",
          author: "Frank Herbert"
        }
      ];

       // resolve() finishes the Promise
      // The awaited result becomes available
      resolve(books);
    }, 1000);
  });
}



// Displays books in the browser
function displayBooks(bookList) {
  const container = document.getElementById("bookContainer");

  container.innerHTML = "";

  bookList.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
    `;

    container.appendChild(bookDiv);
  });
}

// Handles button click
async function loadBooks() {
  
   // fetchBooks() starts running
  // JavaScript pauses HERE because of await
  // Other code in the event loop can continue running
  const books = await fetchBooks();
  displayBooks(books);
}

document
  .getElementById("loadBtn")
  .addEventListener("click", loadBooks);