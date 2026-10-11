// recap

// function great(name) {
//   return 'hello ' + name;
// }

// console.log(great('joe'));

// const drinks = ['tea', 'coffee'];

// for (let drink of drinks) {
//   console.log('I like ' + drink);
// }

// ['tea', 'coffee'].forEach(function (drink) {
//   console.log('I like ' + drink);
// });

const students = [
  { name: 'Ahmed Al-Farsi', grade: 92 },
  { name: 'Fatima Al-Zahra', grade: 88 },
  { name: 'Omar Al-Sayed', grade: 46 },
  { name: 'Aisha Mahmoud', grade: 79 },
  { name: 'Youssef Nabil', grade: 75 },
  { name: 'Mariam Hassan', grade: 96 },
  { name: 'Tariq Bin Ziyad', grade: 55 },
  { name: 'Zainab Al-Mansoor', grade: 85 },
  { name: 'Khaled Al-Mutawa', grade: 78 },
  { name: 'Noor Al-Din', grade: 66 },
];

const list = document.getElementById('list');
const avg = document.getElementById('avg');

function getAvg(items) {
  if (items.length === 0) return 0;
  const total = items.reduce((sum, studnet) => sum + studnet.grade, 0);
  // x = 20;
  // console.log(x);
  return total / items.length;
}

function renderStudnets(items) {
  list.replaceChildren(); // empties all list
  items.forEach((studnet) => {
    const li = document.createElement('li');
    li.innerText = `${studnet.name} - ${studnet.grade}`;

    if (studnet.grade < 60) {
      li.classList.add('fail');
    }

    list.append(li);
  });

  avg.innerText = `Averge: ${getAvg(items).toFixed(1)}`;
  // console.log(getAvg(items));
}

document.getElementById('btn-all').addEventListener('click', () => {
  renderStudnets(students);
});

document.getElementById('btn-pass').addEventListener('click', () => {
  renderStudnets(students.filter((studnet) => studnet.grade >= 60));
});

const btnBouns = document.getElementById('btn-bouns');

const withBouns = (studnet) => ({
  ...studnet,
  grade: studnet.grade + 5,
});

btnBouns.addEventListener('click', () => {
  //// BUG BUG BUG
  // students.forEach((studnet) => {
  //   studnet.grade += 5;
  //   btnBouns.disabled = true;
  // });

  // renderStudnets(students);
  // renderStudnets(students.map(withBouns));

  renderStudnets(
    students.map((studnet) => ({
      ...studnet,
      grade: studnet.grade + 5,
    })),
  );
});

document.getElementById('btn-rest').addEventListener('click', () => {
  renderStudnets(students);
});

// bouns, reset, sort

renderStudnets(students);

// declartion , expression, arrow function

// function double(n) {
//   return n * 2;
// }

// // const double2 = function (n) {
// //   return n * 2;
// // };

// // const double2 = (n) => {
// //   return n * 2;
// // };

// const double2 = (n) => n * 2;

// // fn, fn()
// console.log(double2(5));
// console.log(double);
// console.log(double2);

// /// callback

// function run(fn) {
//   fn();
// }

// run(() => console.log('test run'));

// const prices = [5, 25, 3, 78, 12];

// // const isExpensive = (price) => price > 10;

// // const expensive = prices.filter(isExpensive);

// // console.log(expensive);
// // console.log(prices.filter(isExpensive));

// // console.log(prices.filter((price) => price < 10));

// const double = prices.map((p) => p * 2);
// const double2 = prices.filter((p) => p > 20);

// console.log(double);
// console.log(double2);

// const total = prices.reduce((sum, price) => sum + price, 0);
// // console.log(total);

// /// chaining

// const res = prices.map((p) => p * 2).filter((p) => p > 20);
// console.log(res);

// ///

// function add(a, b) {
//   return a + b;
// }

// add(2, 3);
// // console.log(x);

// //hoisting
// // var x = 10;

// //tdz (temporal dead zone)
// console.log(x);
// let x = 0;

// function addToX(y) {
//   x += y;
//   return x;
// }

// // find, some, every (self study)
