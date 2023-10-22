/**
 * 3.У нас є const number = 30 як
 *  верхня межа діапазону чисел,виведіть
 * лише парні числа for. Зверніть увагу,
 *  числа 0, 22 не мають бути виведені.
 */

const number = 30;
let result = "";

for (let i = 0; i < number; i++) {
  if (i % 2 == 0) {
    if (i == 0 || i == 22) {
      continue;
    }
    result += i + "\n";
  }
}
console.log(result);
