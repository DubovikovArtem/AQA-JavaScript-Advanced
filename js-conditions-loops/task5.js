/**
 * За допомогою циклу while переберіть строку “Javascript is fun”, 
 * якщо строка містить літеру “a” використайте оператор сontinue, якщо
 *  строка містить літеру “n” зупиніть виконаня за допомогою break;
 */

let ourString = "Javascript is fun";
let index = 0;
let result = "";
while (index < ourString.length) {
    if (ourString[index] === "a") {
        index++;
        continue;
    } else if (ourString[index] === "n") {
        break;
    }
    result +=ourString[index];
    index++;
}
console.log(result);