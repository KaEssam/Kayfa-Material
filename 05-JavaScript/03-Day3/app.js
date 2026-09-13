// ternary operator => condetion > value if true : value if false
// switch
// ??

// console.log(5 === '5'); //false => mohamed samir

// const age = 23;
// console.log(age <= 25); // rita

// const lic = true;

// console.log(age >= 18 && !lic); // ranam

///////////////////////////////////////////////

let score = 5;

const isFail = false;

// if (isFail) {
//   console.log('fail');
// } else {
//   console.log('pass');
// }

// if (score >= 20) {
//   console.log('Pass');
// } else if (score < 20) {
//   score += 20 - score;
//   console.log(score);
//   console.log('pass');
//   console.log(`pass ur score ${score}`);
// } else {
//   console.log('fail');
// }

// const result = score >= 20 ? 'A+' : `C ur score ${(score += 20 - score)}`;

// let day = 5;

// switch (day) {
//   case 1:
//     console.log('sat');
//     break;
//   case 2:
//     console.log('sun');
//     break;
//   case 3:
//     console.log('mon');
//     break;
//   default:
//     console.log('weekend');
//     break;
// }

// let role = ' aDmIn ';

// switch (role.trim().toUpperCase()) {
//   case 'ADMIN':
//     console.log('Full Access');
//     break;
//   case 'Studnet':
//     console.log('Limited Access');
//     break;
//   case 'Support':
//   case 'support':
//     console.log('Support');
//     break;
//   default:
//     console.log('Guest');
//     break;
// }
//////////////////////////////////////////////////////////////////////

// console.log('Wellcome ♥');
// console.log('Wellcome');
// console.log('Wellcome');
// console.log('Wellcome');
// console.log('Wellcome');
// console.log('Wellcome');
// console.log('Wellcome');
// console.log('Wellcome');
// console.log('♥ Wellcome');
// console.log('Wellcome');
// console.log('Wellcome');
// console.log('Wellcome');
// console.log('Wellcome');

// function declartion
// function showMSG() {
//   console.log('Welcome ♥');
// }

// console.log('duashfdjs');

// //function call/ invok
// showMSG();

// function helloUser(name) {
//   console.log(`Hello, ${name}`);
// }

// // function test() {
// //   20;
// // }

// // test();

// helloUser('Ahemd');
// helloUser('Ranam');

// function totalPrice(price, quantity) {
//   return price + quantity;
// }

// console.log(totalPrice(50, 5));

// let total = totalPrice(50, 5);

// console.log(total);

/////////////////////////////////////////////

// function sum(num1, num2) {
//   return Number(num1) + Number(num2);
//   // return Number(num1 + num2); // error
// }

// console.log(sum('l', '80')); // nan

// function divid(num1, num2) {
//   if (num2 != 0) {
//     return num1 / num2;
//   } else {
//     return 'Cannot divide by zero';
//   }

//   // let total = num2 != 0 ? num1 / num2 : 'Cannot divide by zero';

//   // return total;
// }

// console.log(divid(50, 0));

//

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);

// for(start; condition, update)
//

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// 2 4 6 8 10 => rita

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) console.log(i);
// }

////

// let i = 4;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let x = 10;
// do {
//   console.log(x);
//   x++;
// } while (x < 5);

let names = ['ranam', 'rita', 'ahmed'];

// for (variable of collection)
for (let name of names) {
  console.log(name);
}
