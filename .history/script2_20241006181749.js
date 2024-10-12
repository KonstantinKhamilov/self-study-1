let num = {
  showStep() {
    (step = +prompt(`Введите число: `, 0)),
      console.log(`Текущая ступенька: `, step);
    return this;
  },
  up() {
    step++;
    console.log(`Следующая ступенька: `, up());
    return this;
  },
  down() {
    step - 2;
    console.log(`Предыдущая ступенька: `, down());
    return this;
  },
};
num.showStep().up().down();
