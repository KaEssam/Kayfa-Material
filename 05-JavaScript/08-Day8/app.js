// reference type

// const profile = {
//   name: 'mona',
//   city: 'cairo',
// };

// const draft = profile;

// draft.name = 'Mona Ali';
// console.log(profile.name); // mona
// console.log(draft.name); //mona ali
// console.log(draft === profile); // false

// value type
// let x = 5;
// let y = x;
// y = 10;
// console.log(x, y);

// let w = 'hello';
// let upperW = w + 'dasdasd';
// let xw = upperW + ' ' + '54534';
// console.log(w, upperW, xw); //

// //w = wesdsada
// // w = sdasdgjaof
// //w = fiakjkac

// const account = {
//   balance: 50,
// };

// const view = account;

// account.balance = 70;
// console.log(view.balance);

// const s = { item: 'tea' }; // item = tea
// const p = s; // item = tea
// s = { item: 'coffee', price: 20 }; // item s coffee
// console.log(s.item, p.item, s.price, p.price); // tea, coffee
// console.log(s === p); //

// const one = { item: 1 };
// const two = { item: 1 };

// const one = 1;
// const two = 1;
// const same = one;

// console.log(one === two); // true  - false
// console.log(one === same); // true

// const FL = ['RED', 'BLUE'];
// const SL = ['RED', 'BLUE'];
// const LA = FL;

// console.log(FL == SL);
// console.log(FL == LA);

////////////////////////////////////////////////////////////////////
/// shallow copy
///////////////////////////////////////////////////////////

// const original = { name: 'dany', city: 'cairo' };
// const draft = {
//   name: original.name,
//   city: original.city,
// };

// // draft.name = 'edqaed';
// console.log(original.name, draft.name); // dany, edqaed
// console.log(original === draft); // fasle

// // spread oprator ...

// const source = { item: 'tea' };
// const copy = { ...source, price: 20 };
// console.log(source.item, copy.item); // tea ,tea
// console.log(source === copy); // true

// shallow copy VS deep copy (self study)

// const original = { name: 'ali', address: { city: 'cairo', street: 'main' } };
// const newAddress = { ...original.address, city: 'giza' };
// const copy = { ...original, address: newAddress };

// console.log(original.address.city, copy.address.city);
// console.log(original.address === copy.address);
// console.log(original === copy); // false

// const users = [
//   { id: 1, name: 'Ali' },
//   { id: 2, name: 'Mone' },
// ];

// const updateUsers = users.map((user) =>
//   user.id === 1 ? { ...user, name: 'karim' } : user,
// );

// console.log(users[0].name);
// console.log(updateUsers[0].name);
// console.log(users[1] === updateUsers[1]);

const people = [{ id: 1, info: { name: 'ali' } }];

const next = [...people];
next[0].info.name = 'omar';

console.log(people[0].info.name);
console.log(next === people);
console.log(next[0] === people[0]);
