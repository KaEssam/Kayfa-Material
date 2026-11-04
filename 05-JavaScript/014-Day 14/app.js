// console.log('1');

// setTimeout(() => {
//   console.log('2');
// }, 1000);

// console.log('3');

////////////////////////////////////
// problem
//////////////////////////////////

// console.log('start');

// const stopAt = Date.now() + 5000;

// while (Date.now() < stopAt) {}

// console.log('rate!!');

/////////////////////////////////
// first solution 1 => Callback
///////////////////////////////////

// console.log('coffee');

// setTimeout(() => {
//   console.log('fr5a');
// }, 5000);

// console.log('latte');

////////////

// function makeOrder(item, done) {
//   console.log('ordering', item);
//   setTimeout(() => {
//     done(item + ' ready');
//   }, 1000);
// }

// makeOrder('coffee', (coffee) => {
//   console.log(coffee);
//   makeOrder('cake', (cake) => {
//     console.log(cake);
//     makeOrder('juice', (juice) => {
//       console.log(juice);
//       console.log('done');
//       makeOrder('juice', (juice) => {
//         console.log(juice);
//         console.log('done');
//         makeOrder('juice', (juice) => {
//           console.log(juice);
//           console.log('done');
//         });
//       });
//     });
//   });
// });

/////////////////////////////////////////
// Promise
//////////////////////////////////////////

// function checkTicket(code) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (code === '123') {
//         resolve('pass');
//       } else {
//         reject('invalid Ticket');
//       }
//     }, 500);
//   });
// }

// console.log(checkTicket('adsa'));

// checkTicket('as')
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

function makeOrder(item) {
  console.log('ordering', item);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (item === 'abc') reject(new Error(' WE DONT HAVE'));
      else resolve(item + ' ready');
    }, 500);
  });
}

// makeOrder('coffee')
//   .then((coffee) => {
//     console.log(coffee);
//     return makeOrder('cake');
//   })
//   .then((cake) => {
//     console.log(cake);
//     return makeOrder('abc');
//   })
//   .then((pizza) => {
//     console.log(pizza);
//   })
//   .catch((error) => console.error('issue:' + error))
//   .finally(() => console.log('order done'));

// async - await

// async function orderAll() {
//   const coffee = await makeOrder('coffee');
//   console.log(coffee);
//   const cake = await makeOrder('cake');
//   console.log(cake);

//   console.log('all done');
// }

// orderAll();

////////////////////////////////////////////

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) =>
//     data.forEach((user) => {
//       const li = document.createElement('li');
//       li.innerText = `${user.id}: ${user.username} - ${user.name} - ${user.email}`;
//       list.append(li);
//     }),
//   )
//   .catch((error) => console.error(error));

// async function loadUsers() {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();

//     data.forEach((user) => {
//       const li = document.createElement('li');
//       li.innerText = `${user.id}: ${user.username} - ${user.name} - ${user.email}`;
//       list.append(li);
//     });
//     console.log(data);
//   } catch (error) {
//     list.innerText = 'data not found';
//   }
// }

// loadUsers();

//////////////////////////////////////////
const list = document.getElementById('list');
const loadBtn = document.getElementById('load');
const state = document.getElementById('state');

loadBtn.addEventListener('click', async () => {
  loadBtn.disabled = true;
  state.innerText = 'loading...';

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    data.forEach((user) => {
      const li = document.createElement('li');
      li.innerText = `${user.id}: ${user.username} - ${user.name} - ${user.email}`;
      list.append(li);
    });
    state.innerText = `${data.length} user`;
    console.log(data);
  } catch (error) {
    state.innerText = 'data not found';
  }
});
