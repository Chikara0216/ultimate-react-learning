const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

const books = getBooks();
const book = getBook(3);
book

// const title = book.title;
// const author = book.author;

// Object Destructuring - Create the variables all at once
// Variable names should match the object's properties

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// Array destructuring
// Rest operator and Spread operator
// A rest element must be last in a destructuring pattern

const [primaryGenre, secondaryGenre, ...otherGenres] = genres; // Rest operator


console.log(primaryGenre, secondaryGenre, otherGenres);

// const newGenres = [genres, 'epic fantasy'] // Not what we want - We want to get a new array with all the values

const newGenres = [...genres, 'epic fantasy']; // Spread operator - Takes all the values out of the array
// const newGenres = ["epic fantasy", ...genres];
newGenres

// Spread operator with objects - Allows to add new properties and update existing ones

const updatedBook = {
  ...book,
  movieReleaseDate: '2021-10-22', // Adding a new property
  pages: 896, // Overwriting an existing property
}
updatedBook

// Template Literals, Arrow Functions and Ternary Statements

// Function expression, not a function declaration
const getYear = (str) => {
  return str.split('-')[0];
}

const summary = `${title}, a ${pages}-long book, was written by ${author} and published in ${getYear(publicationDate)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
summary

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`The book has ${pagesRange} pages.`);

// Short-circuiting and logical operators

// && - short-circuits when the first value is false
console.log(true && "second value");
console.log(false && "second value"); // Short-circuiting
console.log(hasMovieAdaptation && "This book has a movie");

// Falsy values: 0, '', null, undefined, NaN, false

console.log("first value" && "second value"); // truthy value
console.log(0 && "second value"); // falsy value - short-circuiting

// || - short-circuits when the first value is true
console.log(true || "second value");
console.log(false || "second value");

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || 'NOT TRANSLATED';
spanishTranslation;

console.log(book.reviews.librarything?.reviewsCount);
const reviewsCount = book.reviews.librarything?.reviewsCount || "no data";
reviewsCount; // should be 0 instead of 'no data'

// Nullish coalescing operator - returns the second value only when the first value is null or undefined
// Works like the || operator but also short-circuits for falsy values

const count = book.reviews.librarything?.reviewsCount ?? "no data";
count;

// Optional Chaining

function getTotalReviewsCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0; // undefined in Dune

  return goodreads + librarything;
}

console.log(getTotalReviewsCount(book));

/* ------------------------------------------------------------------------------------------------------------------------------ */

/* // Higher order functions
// 3 Functional Array Methods - map, filter, reduce
// These functions do not mutate the original array, but return a new array

const books = getBooks();

// map() - loops over an array and returns an array of the same length with some operation applied to each array element
// map() expects a callback function that will be called for each of the elements

const x = [1, 2, 3, 4, 5].map(el => el * 2);
x;

const titles = books.map((book) => book.title);
titles;

function getTotalReviewsCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0; // undefined in Dune

  return goodreads + librarything;
}

// Returning an array of objects using map
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewsCount(book)
}));
essentialData;

// filter() - filter for some elements of an array based on a condition and create a new array out of them
// use ! in the condition to filter 'out'

const longBooksWithMovie = books
  .filter((book) => book.pages >= 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const longBooks = books.filter((book) => (book.pages >= 500 && book.hasMovieAdaptation));
longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// reduce() - most versatile and powerful of all the array methods, we could implement all the other methods using reduce
// Most common use case - perform mathematical operations
// reduce entire array to a single value - initialValue or accumulator value

const totalPagesCount = books.reduce((sum, book) => sum + book.pages, 0);
totalPagesCount;

// sort() method - mutates the original array

const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr; // also gets sorted when used without slice()

const sortedByPages = books
  .slice()
  .sort((a, b) => a.pages - b.pages)
  .map((book) => ({
    titles: book.title,
    pages: book.pages,
  }));
sortedByPages;

// Working with Immutable Arrays - Adding, deleting and updating elements without mutating the original array

// Adding a book object to the books array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
}

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// Deleting a book object from an array of books
// const booksAfterDelete = books.filter((book) => !(book.id === 2));
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 2);
booksAfterDelete;

// Updating a book object in the books array
// map() for updating objects inside an array
const booksAfterUpdate = booksAfterDelete.map((book) => (
  book.id === 1 ? { ...book, pages: 1216 } : book
));
booksAfterUpdate; */

// Asynchronous JavaScript - Promises
// fetch() returns a Promise { <pending> } - pending because the promise hasn't been fulfilled (or rejected) yet

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log('Shakti');

// async & await

// async function getTodos() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();
//   console.log(data);

//   return data;
// }

const getTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  console.log(data);
  return data;
}

const todos = await getTodos();
console.log(todos);

console.log('Shakti');
