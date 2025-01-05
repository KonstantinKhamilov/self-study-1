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
console.log(matrix[1][1]); //5
*/

//ДОБАВЛЕНИЕ И УДАЛЕНИЕ ЭЛЕМЕНТОВ МАССИВА
//ДОБАВЛЕНИЕ
//const letters = [`А`, `Б`, `В`];
//console.log(letters); // А, Б, В
//console.log(letters.length); // 3
//console.log(letters.push(`Г`, `Д`)); //ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ В КОНЕЦ МАССИВА
//console.log(letters); //А, Б, В, Г, Д
//console.log(letters.length); // 5
//console.log(letters.unshift(`Г`, `Д`)); //ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ В НАЧАЛО МАССИВА
//console.log(letters); //Г, Д, А, Б, В
//УДАЛЕНИЕ
//console.log(letters.pop()); //УДАЛЕНИЕ ЭЛЕМЕНТОВ С КОНЦА МАССИВА. Т.К. рор ОБЁРНУТ В КОНСОЛ.ЛОГ, ТО УДАЛЁННЫЙ ЭЛЕМЕНТ ОТОБРАЗИТСЯ В КОНСОЛИ
//console.log(letters); //А, Б, В, Г, Д
//console.log(letters.length); // 5
//console.log(letters.shift()); //УДАЛЕНИЕ ЭЛЕМЕНТОВ С НАЧАЛА МАССИВА
//console.log(letters); //Г, Д, А, Б, В
//ПРИВЕДЕНИЕ МАССИВА К СТРОКЕ   toString. ПРИМЕНЯЕТСЯ РЕДКО
let arr = [
  `Привет`,
  100,
  200,
  300,
  true,
  { name: `Konstantin` },
  () => console.log(`Ha - ha`),
  [true, false],
];
//console.log(arr.toString()); //Привет,100,true,[object Object],() => console.log(`Ha - ha`),true,false

//ЧАЩЕ ИСПОЛЬЗУЕТСЯ ДЛЯ СКЛЕИВАНИЯ ЭЛЕМЕНТОВ МАССИВА МЕТОД join
//console.log(arr.join(`, `)); // Привет, 100, true, [object Object], () => console.log(`Ha - ha`), true,false
//МЕТОД split МОЖНО ПРИМЕНИТЬ ДЛЯ ПРЕОБРАЗОВАНИЯ СТРОКИ В МАССИВ.
//split И join МОЖНО ПРИМЕНИТЬ ДЛЯ ПЕРЕБОРА ЧЕГО-ЛИБО

const arrSearch = () => {
  console.log(arr);
  for (const element of arr) {
    if (typeof element === `number`) {
      return `В массиве есть число: ${element}`;
    } else if (element >= 1) {
      let arrNum = element.push();
      return `В массиве есть числa: ${arrNum}`;
    }
  }
  return `В массиве нет числа`;
};

console.log(arrSearch().push());
