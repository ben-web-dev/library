// DOM
const body = document.querySelector('#body');

const myLibrary = [];

function Book(title, author, rating, desc, year) {
    this.title = title;
    this.author = author;
    this.rating = rating;
    this.desc = desc;
    this.year = year;
}

const book1 = new Book('James and the Giant Peach', 
                       'Roald Dahl', 5, 'James finds a big peach', 
                       1961)

function addBookToLibrary() {
    myLibrary.push(book1);
}

body.textContent = book1.title;
console.log(myLibrary);

addBookToLibrary();