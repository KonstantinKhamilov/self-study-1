let num = {
  step: +prompt(`Введите число: `, 0),
  up() {
    this.step++;
    console.log(`Следующая ступенька: `, this.step);
    return this;
  },
  down() {
    this.step--;
    console.log(`Предыдущая ступенька: `, this.step);
    return this;
  },
  showStep() {
    console.log(`Текущая ступенька: `, this.step);
    return this;
  },
};
num.showStep().up().down();
