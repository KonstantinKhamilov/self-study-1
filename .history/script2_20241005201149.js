let num = {
  step: +prompt(`Введите число: `, 0),
  up() {
    return this.step + 1;
  },
  down() {
    return this.step - 1;
  },
  show() {
    console.log(`Текущее чило: `, this.step);
    console.log(`Следующее число: `, up());
    console.log(`Предыдущее число: `, down());
    return this;
  },
};
num.show();
