let num = {
  step: +prompt(`Введите число: `, 0),
  up() {
    this.step++;

    return this;
  },
  down() {
    this.step--;

    return this;
  },
  show() {
    return this;
  },
};
num.show().up().down();
