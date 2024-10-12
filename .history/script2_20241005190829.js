let num = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  show() {
    console.log(`Текущая ступень: `, this.step);
  },
};
num.show();
console.log(`Результат up(): `, num.up());
