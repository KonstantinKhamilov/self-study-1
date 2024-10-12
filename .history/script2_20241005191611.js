let step = prompt(`Введите число: `, 0);

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
    console.log({
`Текущая ступень: ${this.step},
    
    `}),
};
num.show();


