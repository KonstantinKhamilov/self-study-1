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
    console.log(alert(`Следующая ступень: `, this.step++));
    console.log(alert(`Предыдущая ступень: `, this.step--));
  },
};

num.show();
