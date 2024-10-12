let num = {
  step: +prompt(`Введите число: `, 0),
  up() {
    this.step + 1;
    return this.step;
  },
  down() {
    this.step - 1;
    return this.step;
  },
  show() {
    console.log(`Текущее чило: `, this.step);
    console.log(`Следующее число: `, num.up());
    console.log(`Предыдущее число: `, num.down());
    return this;
  },
};
num.show().up().down();
