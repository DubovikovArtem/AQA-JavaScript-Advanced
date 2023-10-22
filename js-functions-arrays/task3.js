/**
 * Дано масив. Створіть функцію яка в результаті свого
 *  виконання пройдеться по кожному елементу масиву.
 *  Для ітерації по масиву використовуйте for чи for .. of.
 *  Перевірте чи у масиві буде “cat”.
Результат виведіть в консоль.
let nestedArray = [["apple", "banana", "dog"],["cherry", "cat", "elephant"],["red", "green", "cat"]];
 */

let nestedArray = [
  ["apple", "banana", "dog"],
  ["cherry", "cat", "elephant"],
  ["red", "green", "cat"],
];

//for
function testWorkWithArray(arr) {
  let result;
  let msg = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
      result = arr[i][j];
      if (result === "cat") {
        msg = "is array contain cat? true";
      } else {
        msg = "is array contain cat? false";
      }
    }
  }
  console.log(msg);
}
testWorkWithArray(nestedArray);
