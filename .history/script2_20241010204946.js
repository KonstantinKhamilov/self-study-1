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


//Методы примитивов, числа, объект Math, округление чисел,парсинг чисел тз строк
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
*/

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
  `Если в значении переменной перед числом будет не цифровой знак, то распарсить не получится. Нужно будет применять регулярные выражения`
);
