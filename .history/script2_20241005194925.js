let num = {
  step: +prompt(`Введите число: `, 0),
  up() {
    this.step++;
    return;
  },
  down() {
    this.step--;
    return;
  },
  show() {
    console.log(`Текущее чило: `, this.step);
    console.log(`Следующее число: `, num.up());
    console.log(`Предыдущее число: `, num.down());
    return;
  },
};
num.show();
