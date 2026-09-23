// obj

// let user = {
//   firstName: 'Karim',
//   lastName: 'Essam',
//   jobTitle: 'Dev',
//   salary: 10,
//   address: {
//     city: 'giza',
//     country: 'egypt',
//   },
//   skills: ['Html', 'Css', 'Js'],

//   userInfo() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// // let title = document.getElementsByTagName('div');

// // let title = document.getElementsByClassName('test-class');

// // let title = document.getElementById('test-id');

// let title = document.querySelector('div');

// let titles = document.querySelectorAll('div');

// // console.log(title);
// console.log(titles);

// titles[0].innerText = 'Test';
// titles[0].style.backgroundColor = 'red';

// console.log(titles[0].innerText);

///////////////////////////////////////////////

// let users = [
//   { id: 1, name: 'layal' },
//   { id: 2, name: 'rita' },
//   { id: 1, name: 'elias' },
// ];

// let userList = document.getElementById('users-list');

// // userList.innerHTML = '<h3>test</h3>';

// // test.innerHTML = '<li>test</li>';

// // userList.append(test);
// // console.log(test);

// for (let user of users) {
//   let test = document.createElement('ul');
//   test.innerHTML = `<li>${user.name}</li>`;

//   userList.append(test);
// }

//////////////////////////////////////////////////

let saveBTN = document.getElementById('save');

// function save() {
//   console.log('saved');
// }
// // saveBTN.addEventListener('click', function () {
// //   console.log('hi');
// // });

// saveBTN.addEventListener('click', save); //refrance

// save(); // call / invoke

// saveBTN.addEventListener('mouseenter', function (event) {
//   // console.log(event);
//   console.log(event.type);
// });

// saveBTN.addEventListener('mouseleave', function (event) {
//   // console.log(event);
//   console.log(event.type);
// });

// let output = document.getElementById('output');
// let Decrement = document.getElementById('Decrement');

// let resetBTN = document.getElementById('reset');

// let count = 0;
// saveBTN.addEventListener('click', function () {
//   count++;
//   output.innerHTML = `Count: ${count}`;
// });

// Decrement.addEventListener('click', function () {
//   count--;
//   output.innerHTML = `Count: ${count}`;
// });

// resetBTN.addEventListener('click', function () {
//   count = 0;
//   output.innerHTML = `Count: ${count}`;
// });

// let input = document.getElementById('textInput');
// console.log(input.value);
// let perview = document.getElementById('perview');

// input.addEventListener('input', function () {
//   perview.innerText = input.value;
// });

//////////////////////////////////////////////////

// guess the number

let input = document.querySelector('.guess');
let checkBtn = document.querySelector('.check-btn');
let msg = document.querySelector('.msg');
let attemptsEl = document.querySelector('.Attemps');

const secretNumber = Math.floor(Math.random() * 20);

console.log(secretNumber);
let attempts = 5;

checkBtn.addEventListener('click', function () {
  // handel attempts logic
  attempts--;
  attemptsEl.innerText = attempts;
  if (attempts <= 0) {
    attemptsEl.innerText = 'game over';
    checkBtn.disabled = true;
  }

  //handel value validation
  let rawValue = input.value.trim();
  console.log(rawValue);
  if (rawValue === '') {
    msg.innerText = 'Enter a Number';
    msg.style.color = 'red';
    input.style.border = '1px solid red';
    return;
  } else {
    let guess = Number(rawValue);

    if (!Number.isFinite(guess) || guess < 1 || guess > 20) {
      console.log(guess, typeof guess);
      msg.innerText = 'Use a number from 1 to 10';
      msg.style.color = 'red';
      input.style.border = '1px solid red';
    }

    // handel bussines logic
    if (guess === secretNumber) {
      msg.innerText = 'Correct ♥';
    } else if (guess > secretNumber) {
      msg.innerText = 'Too High';
    } else {
      msg.innerText = 'Too low';
    }
  }
});
