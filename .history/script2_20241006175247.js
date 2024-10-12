let num = {
  step: +prompt(`Введите число: `, 0),
  up() {
    this.step + 1;
    //console.log(`Следующее число: `, up());
    return this;
  },
  down() {
    this.step - 2;
    //console.log(`Предыдущее число: `, down());
    return this;
  },
  show() {
    // console.log(`Текущее чило: `, this.step);
    return this;
  },
};
num.show().up().down();
