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
    return this;
  },
};
num.show().up().down();
