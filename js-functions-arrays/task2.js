/**
 * Створіть функцію яка приймає один параметр value. 
 * Усередині функції виведіть значення value. 
 * Після цього, рекурсивно викличте функцію зі
 *  збільшеним значенням value(наприклад, value + 1).
 *  Фунція повинна викликатися, доки value не стане менше
 *  або рівне 20. Викличте вашу функцію з аргументом,
 *  наприклад, 2.
 */

function testRecursiveFunction(value) {
    console.log(value);
    if (value < 20) {
        testRecursiveFunction(value + 1);
    }
}

testRecursiveFunction(2);