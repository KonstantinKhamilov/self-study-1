//строгий код
`use strict`;
/*
//typeof - определение типа данных
console.log(typeof `Hello world!`);
console.log(typeof 198489n); // с числами с n в конце нельзя проводить матем-ие действия с числами без n в конце
console.log(typeof true);
const age = 11;
console.log(typeof age);
console.log(typeof String(true));
console.log(2 ** 10); // возведение в степень
console.log(13 % 5); // нахождение остатка на деление. Применяется для определеия чётного числа

//унраные операторы
console.log(`5` + `3`); //В консоли будет 53, т.к. 5 и 3 это строки
console.log(+`5` + +`3`); // В консоли будет 8, т.к + вплотную к строкам 5 и 3, преобразует в числа, т.е. из string в number

//инкремент и дикремент

let count = 10;
++count; // постфиксная система
console.log(count); // в консоли будет 11

//префиксная система
let newCount = count++;
console.log(count); //здесь js сложит строки кода 21 и 25, и получится 12
console.log(newCount); // в консоли будет 11


//операторы сравнения == и ===

console.log(`5` == 5); // в консоли будет true, т.к. это не строгое сравнение
//лучше применять всегда строгое. т.к. js будет определять тип данных и это будет правильное применение
console.log(`5` === 5); // в консоли будет fals, т.к. строка 5 не может быть равна числу 5


//ветвления if, else, if else. тернарный оператор ?
// тернарный оператор - это аналог операторам ветвления if, else & if else
// тернарный оператор имеет вид: условие ? выражение1 : выражение2
// если условие верно, то выражение1 будет выполнено, если условие не верно, то выполнится выражение2

let age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a child");
}

// тернарный оператор
let age2 = 15;
console.log(age2 >= 18 ? "You are an adult" : "You are a child");
// тернарный оператор можно применять в любом месте, где можно применять if,
// else, if else, т.е. в выражениях, в функциях, в циклах

const year = 3000;
const message =
  year === 2024
    ? `Продолжаю учиться!`
    : year === 3000
    ? `Нейросети победели`
    : `Неизвестный год :(`;
console.log(message);


//логические операторы || && !== ??
// оператор "или". Если хотябы один из операндов будет true, то и всё выражение будет true
// false || false - будет fals
// false || true - будет true
// true || false - будет true
// true || true - будет true

//const age = 1;
//const withParent = false;
//if (age >= 18 || withParent) {
//  console.log("Вы можете проходить");
//} else {
//  console.log("Предъявите паспорт");
//}
  
age >= 18 || withParent
  ? console.log("Вы можете проходить")
  : console.log("Предъявите паспорт");
// в операторе или - вся проверка идёт с лева на право и применяет булиеву логику ко всем типам данных.
// проверка заканчивается на первом же true,а если в проверке все типы были false, то в результат выведется последнее значение
const result = `` || false || null || undefined || 0 || `Hello` || `Goodby`;
console.log(result); // Hello
const result2 = `` || false || null || undefined || 0 || 100 || 200;
console.log(result2); // 100
const result3 = `` || false || null || undefined || 0;
console.log(result3); // 0. В js 0 приравнен к false

// &&. Если хотябы один операнд будет false, то и всё выражение будет false
// false && false - будет fals
// false && true - будет fals
// true && false - будет fals
// true && true - будет true

const moneyInWallet = 0;
const priceIceCream = 4;
const store = true;
moneyInWallet >= priceIceCream && store
  ? console.log(`Вот ваше мороженое!`)
  : console.log(`Мороженого нет!`);
// Принцып работы так же, как и оператор или, тоько проверка заканчивается на первом же false
// И, если все типы true, то выведется просто последнее значение.
*/

//Оператор -не- !. !true = false !false = true. Т.е. ! меняет значение логики на противоположную
console.log(!true); // false
console.log(!false); // true
console.log(!`string`); // false
console.log(!100); // false
console.log(!``); // true
console.log(!0); // true

const name = `Константин`;
const age = 22;
const hasMuchMoney = true;
const hasGoodJob = true;
const hasFreeTime = false;
const hasMotivathion = false;
if (name !== `Константин`) {
  console.log(`Вы не Константин. Позовите Константина`);
} else if (age < 20) {
  console.log(`Вы еще слишком молоды`);
} else if (!hasMuchMoney || !hasGoodJob || (hasFreeTime && hasMotivathion)) {
  console.log(`Пора учить javascript`);
} else {
  console.log(`Ты наверно очень богат на деньги и тебе это не нужно`);
}
