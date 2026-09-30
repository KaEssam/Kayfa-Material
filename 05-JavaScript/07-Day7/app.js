// const form = document.getElementById('singup-form');

// const name = document.getElementById('name');
// console.log(name.value);

// form.addEventListener('submit', function (event) {
//   event.preventDefault();

//   const formData = new FormData(form);

//   // console.log(formData);
//   // console.log(formData.get('name'));
//   const data = Object.fromEntries(formData.entries());
//   console.log(data);
//   // console.log('form submitted');
// });

/////////////////////////////////////////

// SINGUP FORM

/////////////////////////////////////////

const signupForm = document.getElementById('singup-form');

const name = document.getElementById('name');

const email = document.getElementById('email');

const pass = document.getElementById('password');

const terms = document.getElementById('terms');

signupForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if (/^[A-Za-z]{3,20}/.test(name.value)) {
    console.log('valid name');
  } else {
    console.log('invalid Name');
  }
  // name validation
  // if (name.value.trim() === '') {
  //   console.log('name is requierd');
  // }

  // if (name.value.length < 3) {
  //   console.log('name must be at least 3 char');
  //   // return 'name must be at least 3 char';
  // }

  // if (!Number(name.value)) {
  //   return 'name cannot be a num';
  // }

  // email validation
  // if (!email.value.includes('@') || !email.value.includes('.')) {
  //   console.log(email.value);
  //   console.log('invalid mail');
  // }
});

// const pattern = /karim/;

// const pattern = /[abc]/;

// const pattern = /[0-9]/;
// const pattern = /[a-z]/;
// const pattern = /[A-Z]/;

const pattern = /[^0-9]/;

console.log(pattern.test('31'));

function validatePass(pass) {
  if (pass.value.length < 8) {
    console.log('at least 8 char');
  }

  if (!/[A-Z]{2}/.test(pass)) {
    console.log('add upper case');
  }

  if (!/[a-z]/.test(pass)) {
    console.log('add lower case');
  }
  if (!/\d/.test(pass)) {
    console.log('add number');
  }
}

// 3 - 20 char,
const userNamePattern = /^[A-Za-z0-9_]{3,20}\S/;

console.log(userNamePattern.test('af_d'));

// product form (product name. product price, product quantity, product category choies (select))

//
