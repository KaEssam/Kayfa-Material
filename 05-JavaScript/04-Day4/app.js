// function addFee(price) {
//   return price / 20;
// }

// // score => omran = 1
// console.log(addFee('100')); //10020

// //////

// // score => sally = 1
// function classify(score) {
//   if (score < 50) {
//     return 'Fail';
//   } else {
//     return 'Pass';
//   }
// }

// console.log(classify(40)); //fail

// ////////////////////////
// const totalX = 500;

// function calculate() {
//   const total = 200;
//   // console.log(totalX)
//   return total;
// }

// // const result = calculate(); // 200

// // // totalX = 100;
// // console.log(result);
// // console.log(total);

// //////////////////////////////

// score => rodi = 2
// function countMultiples(start, end, divisor) {
//   let count = 0;

//   for (let number = start; number <= end; number++) {
//     if (number % divisor !== 0) {
//       continue;
//     }

//     count++;
//   }

//   return count;
// }

// console.log(countMultiples(1, 10, 3));

////////////////////////////////////////////////////////////////////

///////////////////////////////////////
// DataStructur
//////////////////////////////////////

const arr = [1, 2, 3, 4, 5]; // index = length -1

console.log(arr[4]);

const skill1 = 1;
const skill2 = 'CSS';
const skill3 = 'JAVASCRIPT';
const skill4 = 'BOOTSTRAP';

const skills = ['HTML', 'CSS', 'JS', 'CSS', 'JS']; // len = 3 , index = 2

// console.log(skill1);
// console.log(skill2);
// console.log(skill3);
// console.log(skill4);

// console.log(skills[0]);
// console.log(skills[1]);
// console.log(skills[2]);
// console.log(skills[3]);

// for (let i = 0; i < skills.length; i++) {
//   console.log(skills[i]);
// }

// // add to array
// //way 1
// skills[skills.length] = 'TS';
// skills[skills.length] = 'das';
// skills[skills.length] = 'dasdas';

// //way 2
// skills.push('ahmed', 'dasdasd', 'djasgdklasdj', 'sdasdas'); // add to end
// skills.shift(''); // add to start

// skills.pop(); // remove last ele
// skills.unshift(); // remove first ele

// const newSkills = ['1', '2', '3'];

// const bigSkills = skills.concat(newSkills);

// skills.push(newSkills);

// if (Array.isArray(skills)) {
//   for (let i in skills) {
//     console.log(skills[i]);
//   }
// } else {
//   console.log('not array');
// }

// console.log(Array.isArray(skill1));
// console.log(Array.isArray(skills));

// //////////
// // SET
// /////////

// const uniqueSkills = new Set(skills);

// console.log(uniqueSkills);

const roles = new Set();

// roles.add('Admin');
// roles.add('Admin');
// roles.add('Editor');

// console.log(roles.size);

// for (let i of roles) {
//   console.log(i);
// }

////// => diff bettwen for..in vs for..of??? // next session

/////////////// obj

// const std1 = ['Ahmed', 23, 'A', 'True', 40];

// std1[2];

const student = {
  name: 'Ahemd',
  age: 23,
  grade: 'A',
  isPass: true,

  sayHello() {
    return 'hello';
  },
};

console.log(student.sayHello());
student.name = 'asdasd';

console.log(student.name);

// const student = {
//   name: 'Ahemd',
//   age: 23,
//   grade: 'A',
//   isPass: true,
//   address: {
//     city: 'cairo',
//   },
// };

// student.age = 18;
// console.log(student['age']);
// console.log(student.age);

// const order = {
//   customer: {
//     name: 'sare',
//     address: {
//       city: 'giza',
//     },
//   },
// };

// console.log(order.customer.address.city);

const students = [
  {
    name: 'Ahemd',
    age: 23,
    grade: 'A',
    isPass: true,
    address: {
      city: 'cairo',
    },
  },
  {
    name: 'Ahemd',
    age: 23,
    grade: 'A',
    isPass: true,
    address: {
      city: 'cairo',
    },
  },
  {
    name: 'Ahemd',
    age: 23,
    grade: 'A',
    isPass: true,
    address: {
      city: 'cairo',
    },
  },
];

/// map

const scores = new Map([
  ['ahmed', 30],
  ['sara', 50],
]);

console.log(scores.keys());
console.log(scores.has('dasdas'));
console.log(scores.get('ahmedd'));

for (let i of scores) {
  console.log(i);
}

for (let [name, score] of scores) {
  console.log(name, score);
}

let cart = new Map([
  [205, 3],
  [20, 50],
  [257, 1],
]);

for (let [productId, quantity] of cart) {
  console.log(`Id:${productId}, quantity${quantity}`);
}

// array
// object
// map
//set

const book = {
  title: 'js',
  author: 'karim',
  pages: 250,
};

console.log(book.author);
