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

// save data local storage

// const saved = localStorage.getItem('students');
// // state data
// let data = saved ? JSON.parse(saved) : students;

// use try catch

function loadStudnets() {
  const saved = localStorage.getItem('students');
  if (!saved) return students;
  try {
    return JSON.parse(saved);
  } catch (error) {
    console.log('saved data is broken', error.message);
  }
}

let data = loadStudnets();

function setData(newData) {
  data = newData;
  localStorage.setItem('students', JSON.stringify(data));
  renderStudnets(data);
}

// elements
const list = document.getElementById('list');
const avg = document.getElementById('avg');
const form = document.getElementById('add-form');
const btnBouns = document.getElementById('btn-bouns');
const errorMsg = document.getElementById('msg');
const status = document.getElementById('status');
// avg function
function getAvg(items) {
  if (items.length === 0) return 0;
  const total = items.reduce((sum, studnet) => sum + studnet.grade, 0);
  return total / items.length;
}

function getStatus(items) {
  if (items.length === 0) return 'No Student yet';
  if (items.every(minGrade(60))) return 'Everyone Passed ♥';
  if (items.some(minGrade(70))) return 'Some need help, but we have starts';
  return 'sone students need help';
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

    //remove btn
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'remove';
    removeBtn.addEventListener('click', () => {
      if (!confirm(`Remove ${studnet.name}?`)) return;
      setData(data.filter((item) => item.id !== studnet.id));
    });

    // +5 BOUNS
    const BounsBtn = document.createElement('button');
    BounsBtn.innerText = '+5';
    BounsBtn.addEventListener('click', () => {
      setData(
        data.map((item) => {
          if (item.id === studnet.id) return withBouns(item);

          return item;
        }),
      );
    });

    // +5 btn
    if (studnet.grade < 60) {
      li.classList.add('fail');
    }
    li.append(BounsBtn);

    li.append(removeBtn);
    list.append(li);
  });

  //avg
  avg.innerText = `Averge: ${getAvg(items).toFixed(1)}`;
  status.innerText = getStatus(items);
}

// all
document.getElementById('btn-all').addEventListener('click', () => {
  renderStudnets(data);
});

//pass
document.getElementById('btn-pass').addEventListener('click', () => {
  renderStudnets(data.filter((studnet) => studnet.grade >= 60));
});

//bouns

const withBouns = (studnet) => ({
  ...studnet,
  grade: Math.min(studnet.grade + 5, 100),
});

btnBouns.addEventListener('click', () => {
  setData(data.map(withBouns));
});

//rest
document.getElementById('btn-rest').addEventListener('click', () => {
  setData(students);
});

// sort

document.getElementById('btn-sort').addEventListener('click', () => {
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
  const gradeInput = form.elements.grade.value;

  if (name === '' || gradeInput === '') {
    errorMsg.textContent = 'Name and Grade are required';
    errorMsg.classList.add('fail');
    return;
  }

  const exist = data.find(
    (student) => student.name.toLowerCase() === name.toLowerCase(),
  );
  if (exist) {
    errorMsg.textContent = `${exist.name} already exists (id ${exist.id})`;
    return;
  }
  const grade = Number(gradeInput);

  if (isNaN(grade) || grade < 0 || grade > 100) {
    errorMsg.textContent = 'Please enter a valid grade between 0 and 100';
    errorMsg.classList.add('fail');
    return;
  }

  setData([...data, { id: newId(), name: name, grade: grade }]);
  errorMsg.textContent = '';
  console.log(data);
  form.reset();
});

renderStudnets(data);
