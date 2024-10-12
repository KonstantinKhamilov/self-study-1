let step = +prompt("Введите число: ", 0);
let num = {
  up() {
    step++;
    return this;
  },
  down() {
    step--;
    return this;
  },
  show() {
    alert("Следующая ступень: " + step);
    this.up();
    alert("Предыдущая ступень: " + step);
    this.down();
  },
};

num.show();
