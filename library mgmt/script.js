
function Book(title, author, genre) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.available = true;
}


function Library() {
  this.books = [];

  
  this.addBook = function (book) {
    this.books.push(book);
  };


  this.searchBooks = function (query) {
    query = query.toLowerCase();
    return this.books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query)
    );
  };
}


const library = new Library();


document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;

  const book = new Book(title, author, genre);
  library.addBook(book);
  displayBooks();
  this.reset();
});


document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const query = document.getElementById("searchQuery").value;
  const searchResults = library.searchBooks(query);
  displaySearchResults(searchResults);
  this.reset();
});


function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  library.books.forEach(function (book) {
    const li = document.createElement("li");
    li.textContent = `Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Available: ${book.available}`;
    bookList.appendChild(li);
  });
}


function displaySearchResults(results) {
  const searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = "";
  results.forEach(function (book) {
    const li = document.createElement("li");
    li.textContent = `Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Available: ${book.available}`;
    searchResults.appendChild(li);
  });
}


const book1 = new Book("Standup comedy", "Judy Carter", "comedy");
const book2 = new Book("A little more", "Sanya N Jain", "Love");
const book3 = new Book("Life is Funny", "Munson", "Humorous");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

displayBooks();
