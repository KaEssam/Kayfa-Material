const students = [
  { id: 1, name: 'Ahmed Al-Farsi', grade: 92 },
  { id: 2, name: 'Fatima Al-Zahra', grade: 88 },
  { id: 3, name: 'Omar Al-Sayed', grade: 46 },
  { id: 4, name: 'Aisha Mahmoud', grade: 79 },
  { id: 5, name: 'Youssef Nabil', grade: 75 },
  { id: 6, name: 'Mariam Hassan', grade: 96 },
  { id: 7, name: 'Tariq Bin Ziyad', grade: 55 },
  { id: 8, name: 'Zainab Al-Mansoor', grade: 85 },
  { id: 9, name: 'Khaled Al-Mutawa', grade: 78 },
  { id: 10, name: 'Noor Al-Din', grade: 66 },
];

// state data
let data = students;

function setData(newData) {
  data = newData;
  renderStudnets(data);
}

// elements
const list = document.getElementById('list');
const avg = document.getElementById('avg');
const form = document.getElementById('add-form');
const btnBouns = document.getElementById('btn-bouns');

// avg function
function getAvg(items) {
  if (items.length === 0) return 0;
  const total = items.reduce((sum, studnet) => sum + studnet.grade, 0);
  return total / items.length;
}

// creation function as factor
function minGrade(min) {
  return (studnet) => studnet.grade >= min;
}

function renderStudnets(items) {
  list.replaceChildren(); // clear all list to new reneder

  // display studnet data on page
  items.forEach((studnet) => {
    const li = document.createElement('li');
    li.innerText = `${studnet.id} - ${studnet.name} - ${studnet.grade}`;

    if (studnet.grade < 60) {
      li.classList.add('fail');
    }

    list.append(li);
  });

  //avg
  avg.innerText = `Averge: ${getAvg(items).toFixed(1)}`;
}

// all
document.getElementById('btn-all').addEventListener('click', () => {
  // renderStudnets(students);
  renderStudnets(data);
});

//pass
document.getElementById('btn-pass').addEventListener('click', () => {
  // renderStudnets(students.filter((studnet) => studnet.grade >= 60));
  renderStudnets(data.filter((studnet) => studnet.grade >= 60));
});

//bouns

const withBouns = (studnet) => ({
  ...studnet,
  grade: Math.min(studnet.grade + 5, 100),
});

btnBouns.addEventListener('click', () => {
  // renderStudnets(
  //   students.map((studnet) => ({
  //     ...studnet,
  //     grade: studnet.grade + 5,
  //   })),
  // );
  setData(data.map(withBouns));
});

//rest
document.getElementById('btn-rest').addEventListener('click', () => {
  // renderStudnets(students);
  setData(students);
});

// sort

document.getElementById('btn-sort').addEventListener('click', () => {
  // const sortedStudnets = students.toSorted((a, b) => b.grade - a.grade);
  const sortedStudnets = data.toSorted((a, b) => b.grade - a.grade);
  renderStudnets(sortedStudnets);
});

// excellent

document.getElementById('btn-ex').addEventListener('click', () => {
  renderStudnets(data.filter(minGrade(85)));
});

// generate id

function generateId(start) {
  let nextId = start;
  return () => {
    const id = nextId;
    nextId++;
    return id;
  };
}

// generate id
const newId = generateId(students.length + 1);

// add studnet form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(form.elements);
  const name = form.elements.name.value.trim();
  const grade = form.elements.grade.value;

  setData([...data, { id: newId(), name: name, grade: grade }]);
  console.log(data);
  form.reset();
});

renderStudnets(data);

/////////////////////////////////////////////////////////
// // SORT - TOSORT

// let num = [10, 1, 5];
// // let sortedNum = num.sort(); // sorted as text
// // let sortedNUms = num.sort((a, b) => a - b);

// //tosort

// let sort = num.toSorted((a, b) => a - b);
// console.log(num);
// console.log(sort);

// // state - setState (important)

// const orginial = 0;
// let count = orginial; //0

// function show() {
//   console.log(`count: ${count}`);
// }

// function setCount(newCount) {
//   count = newCount;
//   show();
// }

// setCount(count); // 0 + 1 = 1
// setCount(count); // 1 + 1 = 2
// setCount(orginial); // rest

// function multiplyBy(factor) {
//   return (num) => num * factor;
// }

// const d = multiplyBy(2);
// const t = multiplyBy(3);

// console.log(d(5)); //10
// console.log(t(5)); //15
// console.log([1, 2, 3].map(d));

// const school = 'kayfa'; // global

// function show() {
//   const instructor = 'karim'; // function scope
//   if (true) {
//     const session = '8 pm'; // block scope
//     console.log(school, instructor, session);
//   }

//   console.log(school, instructor, session);
// }

// show();
// console.log(school, instructor, session);

///////////////////////////////////////////////
/// call stack
///////////////////////////////////////////////

// function c(params) {
//   console.log('c runs');
// }

// function b(params) {
//   c();
//   console.log('b runs');
// }

// function a(params) {
//   b();
//   c();
//   console.log('a runs');
//   b();
// }

// a();

// a b c  => ranam
// c b a  => yaman

// c b c a c b

////////////////////////////////////////////
/// clousers
///////////////////////////////////////////

// function makeCounter() {
//   let count = 0;
//   return () => {
//     count++;
//     return count;
//   };
// }

// const counterA = makeCounter();
// console.log(counterA());
// console.log(counterA());

// const counterB = makeCounter();
// console.log(counterB());

// console.log(id);
