let num = {
  step: +prompt(`Введите число: `, 0),
  show() {
    console.log(`Текущее чило: `, this.step);
    return this;
  },
  up() {
    this.step + 1;
    console.log(`Следующее число: `, num.up());
    return this;
  },
  down() {
    this.step - 2;
    console.log(`Предыдущее число: `, num.down());
    return this;
  },
};
num.show().up().down();
