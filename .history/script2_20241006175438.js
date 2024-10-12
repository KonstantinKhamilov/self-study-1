let num = {
  step: +prompt(`Введите число: `, 0),
  up() {
    this.step + 1;

    return this;
  },
  down() {
    this.step - 2;

    return this;
  },
  show() {
    return this.step;
  },
};
num.show().up().down();
