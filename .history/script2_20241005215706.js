let num = {
  step: +prompt(`Введите число: `, 0),
  up() {
    this.step++;
    console.log(`Следующее число: `, num.up());
    return this;
  },
  down() {
    this.step--;
    console.log(`Предыдущее число: `, num.down());
    return this;
  },
  show() {
    console.log(`Текущее чило: `, this.step);
    return this;
  },
};
num.show();
