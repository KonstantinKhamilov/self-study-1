//задача - лестница. нужно через промпт ввести число. Создать объект с функциями, которые будут выводить следующее и предыдущее
// число от введённого

let diggit = {
  step: +prompt(`Введите число: `, 0),
  up() {
    step++;
  },
  down() {
    step--;
  },
};