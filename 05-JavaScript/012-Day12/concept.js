console.log(Number('123'));

//find

const products = [
  { id: 1, name: 'pen', price: 50 },
  { id: 4, name: 'pen', price: 50 },

  { id: 3, name: 'bag', price: 10 },
  { id: 2, name: 'book', price: 120 },
];

// const pen = products.find((p) => p.name === 'pen');
const pen = products.find((p) => p.id === 999);

const x = products.some((p) => p.price < 120);
const y = products.every((p) => p.price < 120);

console.log(x);
console.log(y);

///

const fruits = ['apple', 'mango'];
const ul = document.getElementById('fruits');

fruits.forEach((fruit, index) => {
  const li = document.createElement('li');
  li.innerText = fruit + ' ';

  const btn = document.createElement('button');
  btn.innerText = 'Pick me!!';
  btn.addEventListener('click', () => {
    console.log(`you pick, ${fruit}, at index, ${index}`);
  });

  li.append(btn);
  ul.append(li);
});
