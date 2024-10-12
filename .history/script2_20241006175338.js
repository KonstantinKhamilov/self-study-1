let num = {
  step: +prompt(`Введите число: `, 0),
  up() {
    this.step + 1;

    return console.log(`Следующее число: `, up());
  },
  down() {
    this.step - 2;

    return console.log(`Предыдущее число: `, down());
  },
  show() {
    return console.log(`Текущее чило: `, this.step);
  },
};
num.show().up().down();
