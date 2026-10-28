// // local storage

// const themeBTN = document.getElementById('theme');

// let theme = localStorage.getItem('theme');

// themeBTN.addEventListener('click', () => {
//   theme = theme === 'light' ? 'dark' : 'light';
//   localStorage.setItem('theme', theme);
//   document.body.classList = theme;
// });

// // error handel => try .. catch

// // BUG

// // const name = 'ahmed';
// // console.log(name);
// // name = 'ali';
// // console.log(name);
// // console.log('first');

// try {
//   const name = 'ahmed';
//   console.log(name);
//   name = 'ali';
//   console.log(name);
// } catch (error) {
//   console.log('we have error');
// } finally {
//   console.log('test');
// }
// console.log('first');

///////////////////////////////////////////////

// const user = {
//   // prop (data)
//   name: 'ali',
//   age: 20,

//   // func (behavier)

//   data() {
//     return `${user.name} , age = ${this.age}`;
//   },
// };

// console.log(user.age);
// console.log(user.data());

///////////////////////////////////////////////

// class

// user 1 => id, name, age, grade
// user 2 => id, salary, age

// class product {
//   name;
//   price;

//   constructor() {
//     console.log('obj created');
//   }
//   label() {
//     return `${this.name} - ${this.price} EGP`;
//   }
// }

// const book = new product();
// book.name = 'js';
// book.price = 20;
// console.log(book.label());

// const pen = new product();
// pen.name = 'das';
// pen.price = 200;
// console.log(pen.label());

// /////
// class product {
//   constructor(name, price) {
//     console.log('obj created');
//     this.name = name;
//     this.price = price;
//   }
//   label() {
//     return `${this.name} - ${this.price} EGP`;
//   }
// }

// // const car = new product('car', 20000);
// const car = new product();
// car.name = 'asdas';
// console.log(car.label());

/////

// console.log('1');

// setTimeout(() => {
//   console.log('2');
// }, 0);

// Promise.resolve().then(() => console.log('3'));
// Promise.resolve().then(() => console.log('6'));

// console.log('4');

/// promise

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`waited ${ms}ms`, ms));
  });
}

const p = wait(500);
console.log(p);
p.then((res) => console.log(res));
console.log('not blocked');

//
function checkTicket(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (code === 'vip') {
        resolve('welcome ');
      } else {
        reject(new Error('invalid Ticket'));
      }
    }, 500);
  });
}

checkTicket('vip')
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

checkTicket('das')
  .then((res) => console.log(res))
  .catch((error) => console.log(error))
  .finally(() => console.log('done check'));
