/*задача - лестница. нужно через промпт ввести число. Создать объект с функциями, которые будут выводить следующее и предыдущее
 число от введённого */

let step = +prompt(`Введите число: `, 0);
let num = {
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  show() {
    alert(`Следующая ступень: `, num.up());
    alert(`Предыдущая ступень: `, num.down());
  },
};

console.log(num.show());
