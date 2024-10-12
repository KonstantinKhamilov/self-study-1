let num = {
  step: prompt(`Введите число: `, 0),
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  show() {
    console.log(`Текущее чило: ${this.step}`);
  },
};
num.show();
