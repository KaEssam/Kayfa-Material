// const x = 100;
// const q = 5;
// const t = x * q;

// console.log(t); //500 => sally

///////////////////////////////////

// const s = 500;
// s += 100;
// console.log(s); //500

/////////////////////////////////

// let p = 100;
// const t = p * 2;
// p = 300;
// console.log(t); // 200 => elias

///////////////////////////////////////

// const email = 'karim@mail.com';
// const Email = email.trim().toUpperCase();
// console.log(Email); // yaman => 0 , omran => 1

///////////////////////////////////////////////

// let p = 500;
// p += 2;
// p *= 10; // p = p * 10
// console.log(p); //5020 //=> danial = .5

//////////////////////////////////////////////

// const price = 500;
// console.log(prcie); //

/////////////////////////////////////////

// const name = 'Rita';
// const age = 20;
// console.log(`${name} will be ${age + 1}`); // rita will be 21

///////////////////////////////////////////

// const p = 10.5745;
// const x = p.toFixed(3);
// console.log(x); //10.574
// console.log(typeof x); //
// console.log(typeof p); // Rodi => 2 point

/////////////////////////////////////////////////

///////////////////////////////////////////////////
// --------------- Comparison -----------------
/////////////////////////////////////////////////

// const age = 10;
// const isAdult = age >= 18;
// console.log(isAdult); //true or false
// console.log(typeof isAdult);

// console.log(17 >= 18); // false
// console.log(18 >= 18); // true
// console.log(19 >= 18);
// console.log('10' >= 18); //
// console.log('2' >= '18'); //

// console.log(5 == 5); // loose Equality
// console.log('5' == 5); // true => same value & diff type
// console.log('5' === 5); // strict equality => same value and type
// console.log(5 === 5);

// let x = 2;
// let y = '2';

// console.log(x == y); //=> true => loose type => same value

// x valu 2 = y value 2 => ==

// x data type = number value = 2
// y data type = string value = 2

///////////////////////////////////////////////////
// --------------- Control Flow -----------------
/////////////////////////////////////////////////

age = 10;

if (age >= 18) {
  console.log('U CAN DRIVE');
} else {
  console.log('U CANT DRIVE');
}

// 58 90 87 97 71 54
let score = 80;

if (score >= 90) {
  // 90 : unlimited
  console.log('A');
} else if (score > 80) {
  // 81:89
  console.log('B');
} else if (score >= 70) {
  // 70:80
  console.log('C');
} else {
  console.log('ya looser');
}

if (score <= 60) {
  console.log('looser');
}

//// 1000 => 10%. 5000 20% 10000 40%

// 1- TOTAL PRICE = VALUE (USER TOTAL PRODUCTS PRICE)
// 2- IF CONDITION BASED ON THE BUSSINES RULES WE HAVE
//3- SET NEW TOTAL AND PRINT

let price = 302.26;

if (price >= 1000) {
  price *= 0.9; // price = prcie (1500) * .9 = 1350
  console.log(`ur total price =${price}`);
} else if (price >= 5000) {
  price *= 0.8;
  console.log(`ur total price =${price}`);
} else if (price >= 10000) {
  price *= 0.6;
  console.log(`ur total price =${price}`);
} else {
  console.log('BUY MORE YA F2ER');
}

/////////

// and operator
console.log(true && true); // true
console.log(false && true); // false
console.log(false && false); // fasle

// or operator

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(!true); //fasle

let gender = 'male';
let ages = 25;

if ((gender == 'male' || gender == 'female') && !ages >= 18) {
  console.log('u can drive');
} else {
  console.log('u cant');
}

const l = age >= 18 ? 'Adult' : 'noob';

console.log(l);
// ternary operator => condetion > value if true : value if false
// switch
// ??
