// const courses = ['HTML', 'CSS', 'js'];
// // const firstCoures = courses[0]
// // const secondCoures = courses[1];

// const [first, , last] = courses;

// console.log(first, last);

// // default values

// const [firstC = 'no first Course', secondC = 'no second course'] = ['HTML'];
// console.log(firstC, secondC); //html

// const [missing = 'backup', isNull = 'backup', seats = 10, active = true] = [
//   undefined,
//   null,
//   0,
//   false,
// ];
// console.log(missing, isNull, seats, active);

// let x = 10;
// let y = 20;

// // let temp;
// // temp = y; // temp = 20
// // y = x; //=>  y= 10
// // x = temp; // x = 20

// // console.log(x, y);

// [x, y] = [y, x];
// console.log(x, y);

// const std = { city: 'giza', name: 'salma' };
// // let name = std.name;
// // let city = std.city;
// // console.log(name, city);

// const { name: stdName, city } = std;
// console.log(city, stdName);

// array destructure

// const novels = ['c', 'z'];
// const [f, s] = novels;

// object destructure
// const book = { title: 'js', pages: 200 };
// // const {title, pages} = book
// const { title: BookTitle, pages } = book;

// DEFAULT (undefiend, empty string)

// const book = { title: 'js' };
// const { pages = 200 } = book;
// console.log(pages);

// const [first = false] = [];
// console.log(first);

//nested desturcture

// const book = {
//   title: 'The Quiet Map',
//   publisher: { name: 'River House', address: { city: 'gize' } },
// };

// const publisherx = book.publisher.name;

// const {
//   publisher: { name },
// } = book;

// console.log(name);

// const {
//   publisher: {
//     address: { city },
//   },
// } = book;

// console.log(city);

// spread ...
// const bookses = ['js', 'ts'];
// const moreBooks = ['c#', ...bookses];

// console.log(moreBooks);

// const book = { title: 'js', pages: 200 };
// const updateBook = { pages: 250, author: 'karim', ...book };
// console.log(updateBook);

// const [first, ...others] = books;
// // const firstBook = books[0];
// // console.log(firstBook);
// console.log(first);
// console.log(others);

const books = [
  {
    id: 1,
    title: 'The Quiet Map',
    author: 'Nadia Farid',
    year: 2022,
    genres: ['hgfg', 'travel'],
    publisher: { name: 'River House', city: 'Cairo' },
    rating: null,
    copies: 0,
    available: false,
  },
  {
    id: 2,
    title: 'Signals at Dawn',
    author: 'Omar Selim',
    year: 2024,
    genres: ['science', 'history'],
    publisher: { name: 'North Star', city: 'Alexandria' },
  },
  {
    id: 3,
    title: 'Dawn',
    author: 'Selim',
    year: 2026,
    genres: ['science', 'history'],
    publisher: { name: 'North Star', city: 'Alexandria' },
  },
];

// get first book and second book

const [firstbook, seconedbook] = books;
console.log(firstbook, seconedbook);

// get title & author for first book

const { title, author } = firstbook;
console.log(title, author);

// from second book get title as booktitle, get year as publishyear
const { title: bookTitle, year: publishYear } = seconedbook;
console.log(bookTitle, publishYear);

// from second book get rating as defualt 5 & copies as 10 & available true
const { rating = 5, copies = 10, available = true } = seconedbook;

// from first book get the publisherName and publisherCity

const {
  publisher: { name: publiseherName, city: publisherCity },
} = firstbook;

const [firstGenra, secondGenra] = firstbook.genres;
console.log(publiseherName, publisherCity, firstGenra, secondGenra);
