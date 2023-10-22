// Оголосіть дві змінні adminName та userName. Присвойте цим
// змінним довільні значення.
// Виведіть тип введених значень з допомогою оператора typeof.

let adminName, userName;
adminName = "admin";
userName = "user";

function showType(variables) {
  console.log(typeof variables);
}
showType(adminName);
showType(userName);

// 2. Оголосіть та присвойте змінній значення "awesome".
// Потім оголосіть ще 2 змінних та присвойте їм довільні значення.
// Виведіть ваш текст у форматі ( `Javascript is: ${"your variables"}` )
let awesome, first, second;
awesome = "awesome";
first = "it's not";
second = "true";
console.log(`Javascript is:${awesome} but ${first} ${second}`);

//3.Оголосіть змінну. Присвойте їй значення. Переприсвойте значення
//на виведіть у консоль.

let num = "number";
num = 333;
console.log(`Variables 'num' = ${num}`);
