function addBook() {
  const bookTitle = prompt("Enter the book title:");
  if (bookTitle) {
    const bookList = document.getElementById("book-list");
    const newBook = document.createElement("li");
    newBook.textContent = bookTitle;
    newBook.onclick = toggleFavorite;
    bookList.appendChild(newBook);
  }
}

function searchBook() {
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();
  const books = document.querySelectorAll("#book-list li");

  books.forEach((book) => {
    if (book.textContent.toLowerCase().includes(searchTerm)) {
      book.style.backgroundColor = "yellow";
    } else {
      book.style.backgroundColor = "";
    }
  });
}

function removeBook() {
  const bookList = document.getElementById("book-list");
  if (bookList.lastChild) {
    const confirmation = confirm(
      "Are you sure you want to remove the last book?"
    );
    if (confirmation) {
      bookList.removeChild(bookList.lastChild);
    }
  }
}

function toggleFavorite(event) {
  event.target.classList.toggle("favorite");
}

function clearSearchHighlights() {
  const books = document.querySelectorAll("#book-list li");
  books.forEach((book) => {
    book.style.backgroundColor = "";
  });
}

// Adding event listener to existing books for toggleFavorite
document.querySelectorAll("#book-list li").forEach((book) => {
  book.onclick = toggleFavorite;
});
