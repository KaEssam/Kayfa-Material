// console.log('hello, world');
// console.log('hi');

// console.log(1 + 2);

// console.log(1 - 2);

// console.log(10 * 20);

// console.warn('wwewewe');

// console.error('error');

//===================================
// ===== const - let - var ==========
//===================================

// const price = 1000;
// const quantity = 20;
// const total = price * quantity;
// console.log(total);

// // price = 2000;

// console.log(total);

// // let score; //declaration
// let score = 10; //initialization
// score = 15; // reassignment

// const pi = 3.14;
// console.log(score);

//===================================
// ========== data type =============
//===================================
// NUMBER - STRING - BOOLEAN

// console.log(typeof 100);
// console.log(typeof '100');
// console.log(typeof true);

// console.log(100 + 1); //101
// console.log('20' + 1); // 100+1 1001

// console.log('20' / '1');

// let test = '20' * 1; //number

// console.log(typeof test);
// //nan => not a number

// // + (plus , concat)

// let firstName = 'Karim';
// let last_name = 'Essam';
// let FullName = firstName + ' ' + last_name; // concatination
// let fullName = `${firstName} ${last_name}`; // template literal
// console.log(FullName);
// console.log(fullName);

// firstName; //camalCase
// last_name; //sanke_caase or kabab_case
// FullName; //PaskalCase

// nan when u assign string with number with math operatores exlude +
// if both string and using mathoprator will get number output exclude +

//===================================
// ========== undefined & null ======
//===================================

// let v1;
// console.log(typeof v1); //undefined

// let v2 = v1;
// console.log(typeof v2);

// let v3 = null;
// console.log(v3);
// console.log(typeof v3);

// number => 0
// string => ""
// boolean => false
// obj => null

//===================================
// ========== oprators ======
//===================================

// console.log(10 + 3);
// console.log(10 - 3);
// console.log(10 / 3);
// console.log(10 * 3);
// console.log(10 % 3);
// console.log(10 ** 3);

// let score = 10;
// score += 5; // 15
// console.log(score);
// // score = score + 5;  // 10 +5 = 15
// score -= 5;
// console.log(score);

// score = score + 1;
// score++;
// console.log(score);

//===================================
//===================================

// let num = '3'; //string
// console.log(typeof num);

// let n = Number(num);
// console.log(typeof n);

// let num = 'three'; //string
// console.log(num); // three
// console.log(typeof num);

// let y;
// let n = Number(null);
// console.log(n); //nan
// console.log(typeof n);

// let price = 15.5576854001;

// let displayPrice = price.toFixed(2);
// console.log(displayPrice);
// let discount = 20;

// console.log(discount.toFixed(2));

// let total = Number(displayPrice) + discount;

// console.log(total);

//===================================
//===================================

// built in methods for (strings, numbers, math)

console.log(Math.floor(Math.random() * 10000));
// 0.5678746
//1564541
//1241
