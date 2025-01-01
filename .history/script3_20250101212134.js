// JavaScript массивы — основы. Приведение к строке. Копирование, объединение и сравнение массивов.
/*
const arr = [
  `Привет`,
  100,
  true,
  { name: `Konstantin` },
  () => console.log(`Ha - ha`),
  [true, false],
];

console.log(arr[1]); //100
console.log(arr[0]); //Привет
console.log(arr[2]); //true
console.log(arr[999]); //undefined
console.log(arr[-11]); //undefined
console.log(arr[3][`name`]); //Object
console.log(arr[4]()); //Ha - ha
console.log(arr[5][0]); //Первый елемент пятого

console.log(`arr befor: `, arr);

console.log(`подмена элемента в массиве`); //
//подмена элемента в массиве
// НЕ СМОТРЯ НА ТО, ЧТО МАССИВ ЗАПИСАН КАК КОНСТАНТА, МЫ МОЖЕМ МЕНЯТЬ ЗНАЧЕНИЯ ЭЛЕМЕНТОВ, КАК И В ОБЪЕКТАХ.
arr[0] = `Пока`;
arr[1] = 200;
arr[2] = false;
arr[100] = `Bay`;

console.log(arr[0]); //Пока
console.log(arr[1]); //200
console.log(arr[2]); //false

console.log(`arr after: `, arr);
console.log(arr[100]); // Вау
console.log(arr.length); // Длинна массива 101
console.log(arr[arr.length - 1]); // Вау
console.log(arr.at(-1)); // Вау
console.log(arr.at(3)); // Объект

//масив в массиве или многомерный массив

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][1]);
*/

//ДОБАВЛЕНИЕ И УДАЛЕНИЕ ЭЛЕМЕНТОВ МАССИВА

const latters = [`А`, `Б`, `В`];
console.log(latters); // А
console.log(latters.length); // 3
console.log(latters.push(`Г`, `Д`)); // А
