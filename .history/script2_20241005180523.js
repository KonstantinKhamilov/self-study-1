/*задача - лестница. нужно через промпт ввести число. Создать объект с функциями, которые будут выводить следующее и предыдущее
 число от введённого */

let num = {
  step: +prompt(`Введите число: `, 0),
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  show() {
    alert(`Следующая ступень: `, num.up());
    alert(`Предыдущая ступень: `, num.down());
  },
};

num.show();
