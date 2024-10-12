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
*/

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
