/*задача - лестница. нужно через промпт ввести число. Создать объект с функциями, которые будут выводить следующее и предыдущее
 число от введённого */

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
console.log(`Резудьтат up(): `, up());
num.show();
