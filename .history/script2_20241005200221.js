let num = {
  step: +prompt(`Введите число: `, 0),
  up() {
    step++;
    this.step;
    return this;
  },
  down() {
    step - 2;
    this.step;
    return this;
  },
  show() {
    console.log(`Текущее чило: `, this.step);
    console.log(`Следующее число: `, num.up());
    console.log(`Предыдущее число: `, num.down());
    return this;
  },
};
num.show();
