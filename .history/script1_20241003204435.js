//строгий код
`use strict`;
/*
//typeof - определение типа данных
console.log(typeof `Hello world!`);
console.log(typeof 198489n); // с числами с n в конце нельзя проводить матем-ие действия с числами без n в конце
console.log(typeof true);
const age = 11;
console.log(typeof age);
console.log(typeof String(true));
console.log(2 ** 10); // возведение в степень
console.log(13 % 5); // нахождение остатка на деление. Применяется для определеия чётного числа

//унраные операторы
console.log(`5` + `3`); //В консоли будет 53, т.к. 5 и 3 это строки
console.log(+`5` + +`3`); // В консоли будет 8, т.к + вплотную к строкам 5 и 3, преобразует в числа, т.е. из string в number

//инкремент и дикремент

let count = 10;
++count; // постфиксная система
console.log(count); // в консоли будет 11

//префиксная система
let newCount = count++;
console.log(count); //здесь js сложит строки кода 21 и 25, и получится 12
console.log(newCount); // в консоли будет 11


//операторы сравнения == и ===

console.log(`5` == 5); // в консоли будет true, т.к. это не строгое сравнение
//лучше применять всегда строгое. т.к. js будет определять тип данных и это будет правильное применение
console.log(`5` === 5); // в консоли будет fals, т.к. строка 5 не может быть равна числу 5


//ветвления if, else, if else. тернарный оператор ?
// тернарный оператор - это аналог операторам ветвления if, else & if else
// тернарный оператор имеет вид: условие ? выражение1 : выражение2
// если условие верно, то выражение1 будет выполнено, если условие не верно, то выполнится выражение2

let age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a child");
}

// тернарный оператор
let age2 = 15;
console.log(age2 >= 18 ? "You are an adult" : "You are a child");
// тернарный оператор можно применять в любом месте, где можно применять if,
// else, if else, т.е. в выражениях, в функциях, в циклах

const year = 3000;
const message =
  year === 2024
    ? `Продолжаю учиться!`
    : year === 3000
    ? `Нейросети победели`
    : `Неизвестный год :(`;
console.log(message);


//логические операторы || && !== ??
// оператор "или". Если хотябы один из операндов будет true, то и всё выражение будет true
// false || false - будет fals
// false || true - будет true
// true || false - будет true
// true || true - будет true

//const age = 1;
//const withParent = false;
//if (age >= 18 || withParent) {
//  console.log("Вы можете проходить");
//} else {
//  console.log("Предъявите паспорт");
//}
  
age >= 18 || withParent
  ? console.log("Вы можете проходить")
  : console.log("Предъявите паспорт");
// в операторе или - вся проверка идёт с лева на право и применяет булиеву логику ко всем типам данных.
// проверка заканчивается на первом же true,а если в проверке все типы были false, то в результат выведется последнее значение
const result = `` || false || null || undefined || 0 || `Hello` || `Goodby`;
console.log(result); // Hello
const result2 = `` || false || null || undefined || 0 || 100 || 200;
console.log(result2); // 100
const result3 = `` || false || null || undefined || 0;
console.log(result3); // 0. В js 0 приравнен к false

// &&. Если хотябы один операнд будет false, то и всё выражение будет false
// false && false - будет fals
// false && true - будет fals
// true && false - будет fals
// true && true - будет true

const moneyInWallet = 0;
const priceIceCream = 4;
const store = true;
moneyInWallet >= priceIceCream && store
  ? console.log(`Вот ваше мороженое!`)
  : console.log(`Мороженого нет!`);
// Принцып работы так же, как и оператор или, тоько проверка заканчивается на первом же false
// И, если все типы true, то выведется просто последнее значение.


//Оператор -не- !. !true = false !false = true. Т.е. ! меняет значение логики на противоположную
console.log(!true); // false
console.log(!false); // true
console.log(!`string`); // false
console.log(!100); // false
console.log(!``); // true
console.log(!0); // true

const name = `Константин`;
const age = 20;
const hasMuchMoney = true;
const hasGoodJob = true;
const hasFreeTime = false;
const hasMotivathion = false;
if (name !== `Константин`) {
  console.log(`Вы не Константин. Позовите Константина`);
} else if (age < 20) {
  console.log(`Вы еще слишком молоды`);
} else if (!hasMuchMoney || !hasGoodJob || (hasFreeTime && hasMotivathion)) {
  console.log(`Пора учить javascript`);
} else {
  console.log(`Ты наверно очень богат на деньги и тебе это не нужно`);
}


// switch case
let age = +prompt(`Введите ваш возраст:`);
switch (true) {
  case age >= 1 && age <= 125:
    {
      console.log(`Ваш возраст ${age}`);
    }
    break;
  default: {
    console.log(`Нет такого возраста`);
  }
}


// функции
// function declaration
function getAgeType(age) {
  if ((age >= 1 && age < 125) || age === `number`) {
    return `Ваш возраст ${age}`;
  }

  return `Введены некорректные данные`;
}
// вызов функции

console.log(getAgeType(`fgrhrbr`));
console.log(getAgeType(25));
console.log(getAgeType(-25));
console.log(getAgeType(225));
console.log(getAgeType(45));

// function expretion
const logHello = function () {
  console.log(`Привет!`);
};
logHello();
// Такую const функцию нельзя переопределить, будет ошибка. Но если объявить через let, то ошибки не будет.
//так же нельзя вызвать функцию logHello(); до её объявления const logHello = function ()

//стрелочные функции
const fn1 = () => {
  return `Я функция fn1`;
};
const fn2 = fn1; //Объявление новой переменной с присваиванием значения результата функции переменной fn1
console.log(fn2()); //Вызов переменной fn2 в виде функции (), которой было присвоено значения результата функции переменной fn1

//Передача функции в другие функции называется callback
// callback
const logMasseg = (actionBefor, actionAfter) => {
  //Объявление колбэк функции с 2-мя аргументами
  actionBefor(); // Объявление аргумента функции logMasseg(), как функции
  console.log(`Привет!`);
  actionAfter(); // Объявление аргумента функции logMasseg(), как функции
};
const fn1 = () => console.log(`befor`); //Объявление колбэк функций
const fn2 = () => console.log(`after`); //Объявление колбэк функций
logMasseg(fn1, fn2); //Вызов функции с присвоенными значениями колбэк функций fn1 и fn2 к аргументам (actionBefor, actionAfter)

//get - получить какое-то значение
//set - установить какое-то значение
//create - создать какое-то значение
//update - обновить какое-то значение
//delete - удалить какое-то значение
//show - показать какое-то значение
//hide - скрыть какое-то значение
//search - найти какое-то значение
//calc - вычислить какое-то значение
//check - проверить какое-то значение

const listUsers = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 35 },
  { id: 4, name: "Porter", age: 20 },
  { id: 5, name: "Tanya", age: 30 },
  { id: 6, name: "Yarick", age: 45 },
  { id: 7, name: "Sasha", age: 25 },
  { id: 8, name: "Nastya", age: 30 },
  { id: 9, name: "Nazar", age: 35 },
];

const users = (list) => {
  // Вывод всех пользователей
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }

  // Вывод количества пользователей
  console.log(`Total number of users: ${list.length}`);

  // Вывод пользователей с возрастом 30
  const usersWithAge30 = list.filter((user) => user.age === 30);
  console.log("Users with age 30:", usersWithAge30);
};

users(listUsers);


// Поверхностное сравнение объектов
// Создаем два объекта user1 и user2 с одинаковыми свойствами и значениями
const user1 = { name: "John", age: 25 };
const user2 = { name: "John", age: 25 };

// Объявляем функцию arrUsers, которая принимает два объекта в качестве аргументов
const arrUsers = (objUser1, objUser2) => {
  // Получаем массивы ключей для каждого объекта
  const keys1 = Object.keys(objUser1);
  const keys2 = Object.keys(objUser2);

  // Выводим в консоль количество ключей в первом объекте
  console.log(`Range user1:`, keys1.length);
  // Выводим в консоль количество ключей во втором объекте
  console.log(`Range user2:`, keys2.length);

  // Проверяем, совпадает ли количество ключей в обоих объектах
  if (keys1.length !== keys2.length) {
    // Если количество ключей не совпадает, возвращаем false
    return false;
  }

  // Проходим по всем ключам первого объекта
  for (const key in objUser1) {
    // Проверяем, совпадают ли значения по каждому ключу в обоих объектах
    if (objUser1[key] !== objUser2[key]) {
      // Если значения не совпадают, возвращаем false
      return false;
    }
  }

  // Если все ключи и значения совпадают, возвращаем true
  return true;
};

// Вызываем функцию arrUsers с объектами user1 и user2 и выводим результат в консоль
console.log(`равны ли объекты user1 и user2:`, arrUsers(user1, user2));


// рекурсия для глубокого сравнение объектов
// Создаем два объекта для сравнения
const user1 = { name: "John", age: 25 };
const user2 = { name: "John", age: 25 };

// Функция для глубокого сравнения объектов
const arrUsers = (objUser1, objUser2) => {
  // Получаем массивы ключей из обоих объектов
  const keys1 = Object.keys(objUser1);
  const keys2 = Object.keys(objUser2);

  // Выводим количество ключей в каждом объекте для отладки
  console.log(`Range user1:`, keys1.length);
  console.log(`Range user2:`, keys2.length);

  // Если количество ключей не совпадает, объекты не равны
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Проходимся по всем ключам первого объекта
  for (const keys in objUser1) {
    // Получаем значения по текущему ключу из обоих объектов
    const value1 = objUser1[keys];
    const value2 = objUser2[keys];

    // Проверяем, являются ли оба значения объектами
    const arrValueUsers =
      typeof value1 === "object" && typeof value2 === "object";

    // Если оба значения объекты, рекурсивно вызываем функцию для их сравнения
    if (arrValueUsers) {
      return arrUsers(value1, value2);
    }

    // Если значения не равны, объекты не равны
    if (value1 !== value2) {
      return false;
    }
  }

  // Если все проверки пройдены, объекты равны
  return true;
};

// Выводим результат сравнения объектов
console.log(`равны ли объекты user1 и user2:`, arrUsers(user1, user2));


//Копирование объеекта
//объект obj1 с одним свойством name, которое имеет значение "Konstantin".
const obj1 = {
  name: `Konstantin`,
};
//создаем новый объект obj2 и используем оператор spread (...) для копирования свойств
//из объекта obj1 в объект obj2.
//Это означает, что объект obj2 будет иметь те же свойства, что и объект obj1.
const obj2 = { ...obj1 };
// объект obj1 не был изменен, несмотря на то, что мы изменили значение свойства name
//в объекте obj2. Это потому, что мы создали новый объект obj2 и скопировали свойства
//из объекта obj1, а не просто присвоили объект obj1 новому имени.
obj2.name = `Yarik`;
console.log(`object1`, obj1);
console.log(`object2`, obj2);


const guest1 = {
  name: `Konstantin`,
  age: 42,
  orderInfo: {
    roomType: 2,
    stateDates: {
      from: `15.10.2024`,
      to: `22.10.2024`,
    },
  },
};

const guest2 = {
  name: `Yarik`,
  age: 15,
};

const guest3 = {
  name: `Tatnya`,
};

const logGuestInfo = (guest) => {
  console.log(
    `Имя: ${guest.name}, 
    Возраст: ${guest?.age ?? `Возраст не указан`}, 
    Дата выезда: ${guest.orderInfo?.stateDates?.to ?? `Не указана`},
    `
  );
};
logGuestInfo(guest1);
logGuestInfo(guest2);
logGuestInfo(guest3);

const auto1 = {
  brand: "Toyota",
  model: "Camry",
  year: 2015,
  speed: 120,
};
const auto2 = {
  brand: `Renault`,
  model: `Koleos`,
  speed: 150,
};
const speedAuto = (auto) => {
  const range = 200;

  console.log(
    `Марка: ${auto?.brand ?? `Марка не указана`},
    модель: ${auto?.model ?? `Модель не указана`},
   год выпуска: ${auto?.year ?? `год выпуска не указан`},
    скорость: ${auto.speed},`
  );
  let result = range / auto.speed;
  const timeAuto = () => {
    let h = Math.floor(result % 60);
    let min = Math.floor((result * 60) % 60);
    let sec = Math.floor((result * 3600) % 60);
    console.log(`Время в пути: ${h} ч ${min} мин ${sec} сек`);
  };
  timeAuto();
};
speedAuto(auto1);
speedAuto(auto2);


//Диструктиризация объекта
const auto1 = {
  brand: "Toyota",
  model: "Camry",
  year: 2015,
  speed: 120,
};
const { brand, model, year, speed, adress } = auto1; //Если добавить ключ, которого нет в ранее объявленной переменной,
//то будет undefined
console.log(brand);
console.log(model);
console.log(year);
console.log(speed);
console.log(adress);

//Дистриктуризация объекта в функции
const logAdress = (adress) => {
  //Объявление функции
  //Присваивание к значению функции новых ключей, к которым потом присвоятся свои значения
  console.log(`
    Адрес ${adress.city}
    улица ${adress.street}
    дом ${adress.hous}
    квартира ${adress.apartment}
    `);
};
//Вызываем функцию с ранее присвоенными ключами, к которым теперь присваиваем новые значения
logAdress({
  city: `Kramatorsk`,
  street: `Dnepropetrovskaya`,
  hous: `6`,
  apartment: `17`,
});

//Второй вариант. Что бы не писать каждый раз адрес.сити, адрес.стрит и т.д.
const logAdress2 = (adress) => {
  const { city, street, hous, apartment } = adress; //можно сделать дистриктуризацию прямо в функции

  //В консол.лог теперь не нужно писать значение adress
  console.log(`
    Адрес ${city}
    улица ${street}
    дом ${hous}
    квартира ${apartment}
    `);
};
//Вызываем функцию с ранее присвоенными ключами, прописанными в объявленной дистриктуризации
logAdress2({
  city: `Kramatorsk`,
  street: `Dnepropetrovskaya`,
  hous: `6`,
  apartment: `17`,
});

//Третий вариант, именно который применяется при написании кода
//Саму дистриктуризацию можно сделать непосредственно в круглых скобках
//при объявлении функции
const logAdress3 = ({ city, street, hous, apartment }) => {
  //В консол.лог теперь не нужно писать значение adress
  console.log(`
    Адрес ${city}
    улица ${street}
    дом ${hous}
    квартира ${apartment}
    `);
};
//Вызываем функцию с ранее присвоенными ключами, прописанными в круглых скобках
logAdress3({
  city: `Kramatorsk`,
  street: `Dnepropetrovskaya`,
  hous: `6`,
  apartment: `17`,
}); // Такой код считается более надёжным и лучше читается


//Возможность передать сущность, которую вытягиаем из объекта при дистриктуризации
const user = {
  name: `Konstantin`,
};
const admin = {
  name: `Boss`,
};
//const {name} = user;
//const {name} = admin; //такой код вызовет ошибку
const { name: userName } = user; //Переименование при дистриктуризации
const { name: adminName } = admin; //если прописать двоеточие и указать другое имя,
//то именно такое имя будет у конечной переменной, которую мы объявляем
console.log(`userName:`, userName);
console.log(`adminName:`, adminName); //В консол.лог выводятся значения


const user1 = {
  name: `Konstantin`,
  age: 25,
  city: `Kiev`,
};

const user2 = {
  name: `Alexander`,
  age: 30,
};
const { city = `Не указан` } = user2; //Юзер2 не имеет ключа сити. Выведется то, что в кавычках
//const { city = `Не указан` } = user1; //Выведется значение сити переменной юзер1
console.log(`City: `, city);

//переименование и задача значения по умолчанию при дистриктуризации
const user3 = {
  name: `Konstantin`,
};
const { name: userName = `Не указан` } = user3;
console.log(`userName: `, userName); //В консол.лог выводится значение name
//Если в переменной будет отсутствовать какой-либо кллюч, то выведется значение по умолчанию


//остаточные или рест параметры
const userInfo = (user) => {
  const { city, name, age, ...rest } = user;

  console.log(
    `
    Name: ${name},
    Age: ${age},
    City: ${city},
    Дополнительная информация: ${rest}`
  ); //City: ${city}, Дополнительная информация: ${rest} Выведется неправильная инфа - Дополнительная информация: [object Object]
  //если прописать ключ и значение в общих кавычках
  //Выводить нужно отдельным консол.лог
  console.log(`Дополнительная информация: `, rest);
};

userInfo({
  name: `Konstantin`,
  age: 42,
  city: `Kiev`,
  isDeveloper: true,
  jobPost: `seniuor FullStack`,
  company: `KMDA`,
});


//this

const user = {
  name: `Konstantin`,
  age: 42,
  //Объявлена функция function declaration, в которой this в методе объекта ссылается на сам объект
  logThis: function () {
    console.log(`this в теле метода объекта user: `, this);
    console.log(`this name: `, this.name);
  },
  adress: {
    city: `Kramatorsk`,
    zipcode: 84302,
    logInnerThis: function () {
      console.log(`this в теле метода объекта adress: `, this);
      console.log(`this city: `, this.city);
    },
  },
};
user.logThis();
user.adress.logInnerThis();


const user = {
  name: `Konstantin`,
  age: 42,
  //Объявлена функция arrow expression, в которой this в методе объекта ссылается на глобальный объект window
  // теряется котекст выполнения
  logThis: () => {
    console.log(`this в теле метода объекта user: `, this);
    //  console.log(`this name: `, this.name);
  },
};
user.logThis();


const user = {
  name: `Konstantin`,
  age: 42,
  // Упрощённая запись function declaration
  logThis() {
    console.log(`this в теле метода объекта user: `, this);
    console.log(`this name: `, this.name);
  },
};
user.logThis();


const user1 = { name: `Konstantin` };
const user2 = { name: `Tanya` };

//Function declaration, чтоб зыс обращался к методу объекта в теле функции
function logInfo() {
  console.log(`this`, this);
  console.log(`this name`, this.name);
}

logInfo();

//Присваивание юзер1 и юзер2 новых методов и ссылка на функцию
user1.logName = logInfo;
user2.logName = logInfo;

user1.logName();
user2.logName();
*/

//Создание калькулятора с помощью методов read() sum() mul()
const calculate = {
  read() {
    (this.a = +prompt(`Введите первое число: `, 0)), //Промпт всегда приводит к строке. + что бы привести к числу, чтоб не писать метод Number()
      (this.b = +prompt(`Введите второе число: `, 0));
  },
  sum() {
    rerturn this.a + this.b 
  },
  mul() {
    return this.a * this.b
  },
};
calculate.read();
console.log(`calculator`, calculate)
console.log(`Сумма: `,calculate.sum());
console.log(`Произведение: `,calculate.mul());
