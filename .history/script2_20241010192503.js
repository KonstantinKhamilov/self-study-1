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
*/

//Методы примитивов, числа, объект Math, округление чисел,парсинг чисел тз строк
// Метод to Fixed
const price = (params) => {
  params = 99.99999;
  params.toFixed(1);
  params.toFixed(2);
  params.toFixed(3);

  console.log(params);
  console.log(`округление до первого числа после запятой: `, 1);
  console.log(`округление до второго числа после запятой: `, 2);
  console.log(`округление до третьего числа после запятой: `, 3);
};

price();
