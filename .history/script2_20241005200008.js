let num = {
  step: +prompt(`Введите число: `, 0),
  up(upper) {
    upper = num.step + 1;
    this.upper;
    return this;
  },
  down(downer) {
    downer = num.up() - 2;
    this.downer;
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
