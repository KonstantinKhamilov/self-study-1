let num = {
  step: +prompt(`Введите число: `, 0),
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(`Текущая ступенька: `, this.step);
    return this;
  },
};
num.showStep().up().down();
