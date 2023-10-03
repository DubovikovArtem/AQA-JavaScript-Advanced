/**
 * Напишіть 3 види
 *  функцій
 * (function declaration, function expression, arrow function). 
 * Кожна з них приймає 2 параметри, поверніть більше
 *  значення. Викличте кожну функцію з 2 аргументами.
 *  Результати виведіть у консоль.
 */

//function declaration
function whatIsBiggerDeclaration(numA, numB) {
    return (numA > numB) ? numA : numB;
}
console.log(whatIsBiggerDeclaration(7, 5))

//function expression
let whatIsBiggerExpression = function (numA, numB) {
    return (numA > numB) ? numA : numB;
}
let result = whatIsBiggerExpression(7, 12);
console.log(result)

//arrow function
const whatIsBiggerArrow = (numA, numB) => {
    return (numA > numB) ? numA : numB;
};

let result2 = whatIsBiggerArrow(3, 4);
console.log("Arrow Function:", result2);