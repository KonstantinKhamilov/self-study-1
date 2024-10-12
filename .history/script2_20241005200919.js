let num = {
  step: +prompt(`Введите число: `, 0),
  up() {
    this.step++;
    return this;
  },
  down() {
    return this.step - 2;
  },
  show() {
    console.log(`Текущее чило: `, this.step);
    console.log(`Следующее число: `, num.up());
    console.log(`Предыдущее число: `, num.down());
    return this;
  },
};
num.show();
