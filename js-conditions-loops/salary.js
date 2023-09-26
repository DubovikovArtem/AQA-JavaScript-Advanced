/**
 * Нарахуйте зарплату людині яка працює у компанії. Створіть
 *  змінну yearsOfExperience яка буде символізувати час, скільки
 *  людина працює у компанії.
За допомогою конструкції if else, визначте заробітню плату та бонус.
 Якщо людина працює пів року, то зарплата = 0, бонусів немає

Якщо людина працює від пів року до року, то зарплата = 100 ,
 бонус 1 % від зарплати

Якщо людина працює від року до двох років, то зарплата = 333,
 бонус 3 % від зарплати Якщо людина працює від двох до чотирьох років,
  то зарплата = 555, бонус 4 % від зарплати Якщо людина працює
   від більше чотиьох років, то зарплата = 666 , 
   бонус = ксть років роботи * зарплату

Усі результати виведіть у консоль.
 */
let salary, percent, result;
let yearsOfExperience = 4.1;
if (yearsOfExperience < 0.5) {
    salary = 0;
    percent = 0;
    result = 0;
} else if (yearsOfExperience <= 1) {
    salary = 100;
    percent = 0.01;
    result = salary + (salary * percent);
} else if (yearsOfExperience <= 2) {
    salary = 333;
    percent = 0.03;
    result = salary + (salary * percent);
} else if (yearsOfExperience <= 4) {
    salary = 555;
    percent = 0.04;
    result = salary + (salary * percent);
}else{
    salary = 666;
    percent = yearsOfExperience * salary;
    result = salary + percent;
}
console.log("Your salary : " + result);