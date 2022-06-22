const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* const add = (obj, key, value) => {
  obj[key] = value;
};
add(lesson2, 'turno', 'noite');
console.log(lesson2); */

/* const add2 = (obj) => {
  obj = '';
};
console.log(Object.keys(lesson1, lesson2, lesson3)); */

/* const add3 = (obj) => Object.values(obj);
console.log(add3(lesson3)); */

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const total = (obj) => {
  let total1 = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  console.log(total(allLessons));
  return total1;
};
total();