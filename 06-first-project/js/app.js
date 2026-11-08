// // Register

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const body = {
    firstName: document.getElementById('firstName').value.trim(),
    lastName: document.getElementById('lastName').value.trim(),
    email: document.getElementById('email').value.trim(),
    password: document.getElementById('password').value,
  };

  try {
    const res = await fetch(
      'http://linkvaultapi.runasp.net/api/auth/register',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      },
    );

    const data = await res.json();
    const token = data.token;

    if (typeof token !== 'string' || token.trim() === '') {
      console.log('invalid token', token);
      return;
    } else {
      localStorage.setItem('ac_token', token);
      // window.location.replace('/06-first-project/index.html');
      // location.href = '../index.html';
      window.open('/06-first-project/index.html');
    }
  } catch (error) {
    console.log(error);
  }
});

// // login

// document.getElementById('loginForm').addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const body = {
//     email: document.getElementById('email').value.trim(),
//     password: document.getElementById('password').value,
//   };

//   try {
//     const res = await fetch('http://linkvaultapi.runasp.net/api/auth/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(body),
//     });

//     const data = await res.json();
//     const token = data.token;

//     if (typeof token !== 'string' || token.trim() === '') {
//       console.log('invalid token', token);
//       return;
//     } else {
//       localStorage.setItem('ac_token', token);
//       window.location.replace('/06-first-project/index.html');
//       // location.href = '../index.html';
//       // window.open('/06-first-project/index.html');
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// categories

// // get
// async function getCategories() {
//   const res = await fetch('http://linkvaultapi.runasp.net/api/categories', {
//     method: 'GET',
//     headers: { Authorization: `Bearer ${localStorage.getItem('ac_token')}` },
//   });

//   const data = await res.json();

//   const list = document.getElementById('categoriesList');
//   list.innerHTML = data.map(
//     (c) =>
//       `<li class="list-group-item active" data-id="${c.id}">${c.categoryName}</li>`,
//   );
//   console.log(data);
// }

// getCategories();
// post
