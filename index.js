// 2.1 Привет, мир!

alert('Я - JavaScript!');

// 2.4 Переменные
  // Задание 1
let name;
let admin;
name = 'John';
admin = name;
alert(admin);

  // Задание 2
let planetName;
let currentUserName;

// 2.6 Взаимодействие: alert, prompt, confirm

let userName = prompt('What is your name?');
alert(`your name is ${userName}`);

// 2.8 Базовые операторы, математика
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);
  
  alert(+a + +b);

  // 2.10 Условное ветвление: if, '?'
  // Задание 1
  let officialName = prompt('Какое «официальное» название JavaScript?');
  if (officialName === 'ECMAScript') {
    alert('Верно!');
  }
  else {
    alert('Не знаете? ECMAScript!');
  }

    // Задание 2
  let num = prompt ('Input a number');
  if (+num > 0) {
    alert(1);
  }
  else if (+num < 0) {
    alert(-1);
  }
  else {
    alert(0);
  }

    // Задание 3
let result;

(a + b < 4) ? 'Мало':'Много';

    // Задание 4
let message;

login == 'Сотрудник' ? message = 'Привет':
         'Директор' ? message = 'Здравствуйте':
         '' ? message = 'Нет логина':
         '';

  // 2.11 Логические операторы
  // Задание 1

  let age = prompt ('Input your age');
  if ((+age >= 14) && (+age <= 90)) {
    alert('Your age is between 14 and 90');
  }

  // Задание 2

  if ((+age <= 14) && (+age >= 90)) {
    alert('Your age is NOT between 14 and 90');
  }
  if (!((+age > 14) && (+age < 90))) {
    alert('Your age is NOT between 14 and 90');
  }

   // Задание 3

  login = prompt('Кто там?');
  if (login === 'admin') {
     password = prompt('Пароль?');
    if (password === 'Я Главный'){
      alert('Здравствуйте!');
    }
    else if (password === null || password === '') {
      alert('Отменено');
    }
    else {
      alert('Неверный пароль');
    }
  }
  else if (login === null || login === '') {
    alert('Отменено');
  }
  else {
    alert('Я вам не знаю');
  }