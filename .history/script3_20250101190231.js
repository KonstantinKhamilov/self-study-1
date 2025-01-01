// JavaScript массивы — основы. Приведение к строке. Копирование, объединение и сравнение массивов.

const arr = [
  `Привет`,
  100,
  true,
  { name: `Konstantin` },
  () => console.log(`Ha - ha`),
  [true, false],
];

//подмена элемента в массиве
arr[0] = `Пока`;
(arr[1] = 200), (arr[2] = false);

console.log(arr[1]); //100
console.log(arr[0]); //Привет
console.log(arr[2]); //true
console.log(arr[999]); //undefined
console.log(arr[-11]); //undefined
console.log(arr[3][`name`]); //Object
console.log(arr[4]()); //Ha - ha
console.log(arr[5][0]); //Первый елемент пятого

console.log(`подмена элемента в массиве`); //Первый елемент пятого

console.log(arr[0][`name`]); //Пока
console.log(arr[1]); //200
console.log(arr[2]); //false
/*

//масив в массиве или многомерный массив

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][1]);
*/