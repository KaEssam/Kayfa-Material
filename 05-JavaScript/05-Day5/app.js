///////////////////////////////////
//bom => browser object model
////////////////////////////////////

// console.log(navigator.onLine);

// alert('warning one!!!');

// // used for confirm action (return type boolane)
// const ok = confirm('Delete Item?');

// console.log(ok);

// // if the user say ok delete item, user click cnacel say no
// function remove() {
//   // ok is boolane type (true or fasle)
//   if (ok) {
//     console.log('deleted');
//   } else {
//     console.log('no');
//   }
// }

// remove();

// const email = prompt('Enter Email?');
// console.log(email);

// SELF STUDY (setTimeout, setInterval)

window.open('https://www.w3schools.com/js/js_window.asp');

///////////////////////////////////////////
////   DOM => DOUCMENT OBJECT MODEL
///////////////////////////////////////////

// NODE VS ELEMENT

// console.log(document.body.children); // element
// console.log(document.body.childNodes); //node

// selectors

//  1- query selector like css selector

// let title = document.querySelector('h2'); // select one element

// let title = document.querySelectorAll('h2');

// let title = document.querySelectorAll('.product-title');

// let btn = document.querySelector('#cart-btn');

// let btn = document.getElementById('cart-btn');

// let title = document.getElementsByClassName('product-title');

// let h2 = document.getElementsByTagName('h2');

// console.log(h2);

/////////////////////////////

// let title = document.querySelector('.product-title');

// // let title = document.getElementsByClassName('product-title');
// console.log(title.textContent);
// console.log(title.innerHTML);
// console.log(title.innerText);

// title.textContent = '<strong>Hello</strong>';
// // title.innerHTML = `<strong>${Hello}</strong>`;
// title.innerText = '<strong>Hello</strong>';

// // title[0].textContent = 'Hello';

///////////////////////////////////////////

// when user visit our website, take his name, and say hello with user name

// let userName = prompt('Enter your name?');

// // alert(`welcome, ${userName}`);

// let name = document.getElementById('userName');
// console.log(userName);
// name.innerText = `welcome, ${userName}`;
// name.style.color = 'red';

// function sayHello() {
//   alert(`welcome, ${userName}`);
// }

const products = [
  { id: 1, name: 'pc', price: 100 },
  { id: 2, name: 'labtop', price: 500 },
  { id: 3, name: 'DASDASD', price: 5000 },
];

let productList = document.getElementById('prodcuts');

for (let prodcut of products) {
  console.log(prodcut.id);
  let item = document.createElement('il');
  item.innerHTML = `
        <p><em>${prodcut.id}</em> <strong>${prodcut.name}</strong>.. ${prodcut.price} EGP</p>
      `;

  console.log(item);
  productList.append(item);
  console.log(productList);
}
