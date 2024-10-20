/*
let num = {
  step: +prompt(`Введите число: `, 0),
  showStep() {
    console.log(`Текущая ступенька: `, this.step);
    return this;
  },
  up() {
    this.step++;
    console.log(`Следующая ступенька: `, this.step);
    return this;
  },
  down() {
    this.step--;
    console.log(`Предыдущая ступенька: `, this.step);
    return this;
  },
};
num.showStep().up().down();


//Методы примитивов, числа, объект Math, округление чисел,парсинг чисел из строк
// Метод toFixed. Преобразует число в строку
const price = (params) => {
  params = 99.555555;

  console.log(typeof params);
  console.log(`округление до первой цифры после запятой: `, params.toFixed(1));
  console.log(`округление до второй цифры после запятой: `, params.toFixed(2));
  console.log(
    `округление до третьей цифры после запятой: `,
    params.toFixed(3)
  );
};

price();

// Метод toPrecision. округляет число не после запятой, а сразу с первой цифры

const price = (params) => {
  params = 100.055;

  console.log(params);
  console.log(`округление до третьей цифры от первой: `, params.toPrecision(3));
  console.log(
    `округление до четвёртой цифры от первой: `,
    params.toPrecision(4)
  );
  console.log(`округление до пятой цифры от первой: `, params.toPrecision(5));
};

price();


//toString
const num = 100;
console.log(`Число ${num} в двоичной системе исчесления: `, num.toString(2));


// Объект Math
//Math.random() - возвращает случайное число
console.log(`Случайное число с помощью Math.random: `, Math.random());
// Math.abs - возвращает абсолютное число, по сути убирает знак минус
console.log(`Абсолютное число: `, Math.abs(-100));
// Math.pow - возведение числа в степень. первый аргумент это само число, второй аргумент это степень
console.log(`Возведение числа 2 в степень 3: `, Math.pow(2, 3));
//Ту же функциональность можно получить с помощью оператора две звёздочки **
console.log(
  `Возведение числа 2 в степень 3 с помощью оператора две звёздочки **: `,
  2 ** 3
);
// Math.sqrt & Math.cbrt
console.log(`Квадратный корень из числа 16: `, Math.sqrt(16));
console.log(`Кубический корень из числа 27: `, Math.cbrt(27));
//Math.min & Math.max
console.log(`Минимальное число из 10 -5 99: `, Math.min(10, -5, 99));
console.log(`Максимальное число из 10 -5 99: `, Math.max(10, -5, 99));
// при выводе подобных чисел из массивов, лучше использовать оператор спред ...
const arr = [10, 5, 99];
console.log(
  `Минимальное число из массива Math.min(...arr)) [10, 5, 99]: `,
  Math.min(...arr)
);
console.log(
  `Максимальное число из массива Math.max(...arr)) [10, 5, 99]: `,
  Math.max(...arr)
);
// Math.round - округляет число до ближайшего целого числа
console.log(
  `Округление числа Math.round 3.7 до ближайшего целого числа: `,
  Math.round(3.7)
);
console.log(
  `Округление числа Math.round -3.7 до ближайшего целого числа: `,
  Math.round(-3.7)
);

// Math.ceil - округляет число до ближайшего целого числа, но если число положительное
// то округляет вверх, если отрицательное то вниз
console.log(
  `Округление числа Math.ceil 3.7 до ближайшего целого числа: `,
  Math.ceil(3.7)
);
console.log(
  `Округление числа Math.ceil -3.7 до ближайшего целого числа: `,
  Math.ceil(-3.7)
);
// Math.floor - округляет число до ближайшего целого числа, но если число положительное
// то округляет вниз, если отрицательное то вверх
console.log(
  `Округление числа Math.floor 3.7 до ближайшего целого числа: `,
  Math.floor(3.7)
);
console.log(
  `Округление числа Math.floor -3.7 до ближайшего целого числа: `,
  Math.floor(-3.7)
);
// Math.trunc
console.log(`Удаление дробной части числа Math.trunc 3.7: `, Math.trunc(3.7));
console.log(`Удаление дробной части числа Math.trunc -3.7: `, Math.trunc(3.7));
// Распарсить строку в число
const num = `100`;
console.log(`Распарсить строку в число с помощью Number: `, Number(num));
console.log(`Распарсить строку в число с помощью +: `, +num);


// Если в значении переменной после числа стоят не числовые знаки, то для получения числа применяется метод parseInt
const num = `    100`;
console.log(`Все пробелы перед числом не принемаются в учёт`);
console.log(`Распарсить строку в число с помощью Number: `, Number(num));

const a = `100px`;
console.log(
  `Распарсить строку 100px в число с помощью parseInt: `,
  parseInt(a)
);

const b = `    100.55px`;
console.log(
  `Распарсить строку 100.55px в число с помощью parseFloat: `,
  parseFloat(b)
);
console.log(
  `Если в значении переменной перед числом будет не цифровой знак аВ100рх, то распарсить не получится. Нужно будет применять регулярные выражения`
);

// тАБЛИЦА УМНОЖЕНИЯ
let a = [];
let b = [];
let c = [];
for (let i = 1; i <= 10; i++) {
  //console.log(a);
  for (let q = 1; q <= 10; q++) {
    //console.log(b);
    c = [i] * [q];
    console.log(c);
  }
}

// Получаем ссылку на элемент, в который будем выводить таблицу
let tableElement = document.getElementById("multipyl");

// Создаем таблицу
let table = document.createElement("table");
table.border = "1"; // добавляем рамку для наглядности

for (let i = 1; i <= 10; i++) {
  let row = table.insertRow();
  for (let j = 1; j <= 10; j++) {
    let cell = row.insertCell();
    cell.textContent = i * j;
  }
}

// Добавляем таблицу на страницу
tableElement.appendChild(table);


// Строки в JavaScript. Методы at, replace, slice, includes, repeat, trim, split. Длина строки length.
const name = `Konstantin`;
console.log(`Длина строки ${name}: `, name.length); // 10
console.log(`ПЕрвый символ строки ${name}: `, name[0]); // K
console.log(`Четвёртый символ строки ${name}: `, name[3]); // s
console.log(`Последний символ строки ${name}: `, name[9]); // n
console.log(`Последний индекс символа строки ${name}: `, name.length - 1); // 9
console.log(`Последний символ строки ${name}: `, name[name.length - 1]); // n

// Метод at
const name = `Konstantin`;
console.log(`Символ строки ${name} под индексом 0: `, name.at()); //K
console.log(`Символ строки ${name} под индексом 1: `, name.at(1)); //o
console.log(`Последний символ строки ${name}: `, name.at(-1)); //n
console.log(`Предпоследний символ строки ${name}: `, name.at(-2)); //i

// toLowerCase toUpperCase
const name = `KoNstAntIn`;
console.log(name);
console.log(
  `Приведение строки ${name} к малому регистру: `,
  name.toLowerCase()
); // konstantin
console.log(
  `Приведение строки ${name} к большому регистру: `,
  name.toUpperCase()
); // KONSTANTIN


// Метод trim() убирает пробелы в начале и в конц строки, только если пробелы именно в нчале или в конце
const name = `   Konstantin   `;
const nameFormated = name.trim();
console.log(`Количество символов в строке ${name}: `, name.length);
console.log(`Строка ${name} после удаления пробелов: `, nameFormated.length);
*/

//
