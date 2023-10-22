/*Людина хоче отримати права.
Створіть змінну яка буде символізувати вік людини. 
Після чого створіть булеву змінну, яка буде визначати чи 
особа досягла віку коли може отримати права,( в Україні це 18 років), 
базуючись на заченні з попередньої змінної. Результат виведіть у консоль.
*/
//V1 -----
let humanAge, isAdult;
humanAge = 18;
if (humanAge < 18) {
  isAdult = false;
} else {
  isAdult = true;
}
console.log(isAdult);
//V2 -----
let humanIsAdult = humanAge >= 18;
isAdult = true;
console.log(humanIsAdult && isAdult);

/*2.Створіть дві змінні, які містять імена двох осіб.
Використовуючи конкатенацію рядків, створіть новий рядок,
який містить вітання для обох осіб. Виведіть результат в консоль.
Потім використайте шаблонний рядок для створення того ж вітання.
Виведіть результат в консоль.
*/
let firstPerson = "Vaniok";
let secondPerson = "Sergik";
let sayHello = "Hello";
console.log(sayHello + " " + firstPerson + " and " + secondPerson);
console.log(`${sayHello} ${firstPerson} and ${secondPerson}`);
console.log(sayHello);
//or
let firstPerson2 = "Vaniok";
let secondPerson2 = "Sergik";
let sayHello2 = "Hello " + firstPerson2 + " " + secondPerson2;
console.log(sayHello2);

/**3.Створіть змінну зі значенням "5.489"
- приведіть змінну до типу даних number, зі збереженням символів
після коми
- перевірте чи отрмане число після першої операції не є NaN
- округліть значення до одного знака після крапки
- поверніть змінну з типом даних number назад у тип даних string 
*/
let startNum = "5.489";
let num = parseFloat(startNum);
console.log(num, typeof num);
console.log(isNaN(num));
console.log(num.toFixed(1));
let numToString = num.toString();
console.log(numToString, typeof numToString);

/**
4.Створіть змінну зі значенням "Wikipedia is a free online 
encyclopedia, created and edited by volunteers around the world
and hosted by the Wikipedia Foundation."
- виведіть довжину рядка
- замініть всі слова Wikipedia на довільне слово чи букву,
результат виведіть у консоль.
- перевірте чи містить дана строка слово "world"
- перевірте чи закінчується дана строка cловом "foundation"
Всі результати виконання виведіть в консоль
 */

let aboutWikipedia =
  "Wikipedia is a free online encyclopedia, created and edited by volunteers around the worldand hosted by the Wikipedia Foundation.";
console.log(aboutWikipedia.length);
console.log(aboutWikipedia.replaceAll("Wikipedia", "xxx"));
console.log(aboutWikipedia.includes("world"));
console.log(aboutWikipedia.endsWith("foundation"));

/**
5* Обчислення площі та об'єму
π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження
цього числа
Створіть змінну radius і присвойте їй числове значення радіуса кола.
-Обчисліть площу кола за формулою π * radius^2 і виведіть результат.
-Створіть змінну length і присвойте їй числове значення довжини 
прямокутника.
-Створіть змінну width і присвойте їй числове значення ширини прямокутника.
Обчисліть площу прямокутника за формулою length * width і виведіть результат.
-Створіть змінну height і присвойте їй числове значення висоти циліндра.
-Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть
результат.
Округліть кожне отримане значення до 2 значень після крапки
 */

let variableRadius = 25;
let radiusResult = 3.14 * Math.pow(variableRadius, 2);
//если использовать Math.PI результат получается с небольшим отклонением
console.log(radiusResult.toFixed(2));

let rectangleLength, rectangleWidth;
rectangleLength = 30;
rectangleWidth = 15;
let areaOfRectangle = rectangleLength * rectangleWidth;
console.log(areaOfRectangle.toFixed(2));
let cylinderVolume = radiusResult * rectangleLength;
console.log(cylinderVolume.toFixed(2));
