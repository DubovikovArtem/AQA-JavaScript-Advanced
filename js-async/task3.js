/**
https://jsonplaceholder.typicode.com/
Створіть дві асинхронні функції для здійснення запитів до сервера:
Перша функція робить запит на сервер за посиланням https://jsonplaceholder.typicode.com/comments/1 і
 повертає об'єкт comments у вигляді Promise.
Друга функція робить запит на сервер за посиланням https://jsonplaceholder.typicode.com/posts/2 і 
повертає об'єкт posts у вигляді Promise.
Викликайте ці функції. Використовуйте методи Promise.all та Promise.race, передаючи їм масив із
 викликами обох функцій. Виведіть результат виконання цих функцій.
 */

async function getTodos() {
   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
   return response;
}
async function getComments() {
   const response = await fetch("https://jsonplaceholder.typicode.com/comments/1");
   return response;
}

let resultAll = Promise.all([getTodos(), getComments()]);
resultAll.then((showResult) => console.log("Promise.all",showResult));

let resultRace = Promise.all([getTodos(), getComments()]);
resultRace.then((showResult) => console.log("Promise.race", showResult));