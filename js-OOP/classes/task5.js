/**
Створіть клас Person: Представляє особу з такими властивостями:

firstName - ім'я особи
lastName - прізвище особи
age - вік особи
Всі властивості мають бути публічні

Створіть клас PeopleRegistry який наслідується від Person

Клас PeopleRegistry представляє реєстр осіб з такими методами та властивостями:

super конструктор 
people - властивість, це має бути масив об'єктів осіб, який ініціалізується пустим.
addPerson(person) - метод, що додає особу до реєстру. Використайте метод push щоб запушити отриману особу після ініціалізації класу.
removePerson(firstName, lastName) - метод, що видаляє особу за ім'ям та прізвищем. Для того щоб видалити особу, ви можете відфільтрувати свій масив people та присвоїти його поточному масиву people.
// (this.people = this.people.filter(….));

findPerson(firstName, lastName) - метод, що знаходить особу за ім'ям та прізвищем.
Виконання схоже до removePerson, використайте метод filter. // return this.people.find();

listPeople() - метод, що виводить список всіх осіб в реєстрі. Пройдіться по масиву people методом forEach. У середині forEach чз крапку виведіть властивості у консоль
// Name: ${person.firstName} , тут ще має бути lastName та age.

Виконання:

Якщо складно реалізувати всі методи, реалізуйте хоча б 2. Про це вкажіть у своєму дескрипшині до ПР.
Cтворіть екземпляр класу PeopleRegistry( тут буде ваша змінна реєстр)
Створіть 2 екземпляри класу Person(тут ваша змінна person)
Додайте у реєстр зміні екземпляру класу Person:
// Приклад виконання
// екземпляр класу PeopleRegistry
const registry = new PeopleRegistry();

// екземпляри класу Person
const person1 = new Person(); // використайте свою тестову дату.
const person2 = new Person();// використайте свою тестову дату.

// Додаємо осіб до реєстру
registry.addPerson(person1);
registry.addPerson(person2);
Виведіть всіх людей які є у реєстрі listPeople()
Знайдіть людину, за допомогою метода findPerson();
Видаліть людину з реєстру, за допомогою метода removePerson();
 */

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

class PeopleRegistry extends Person {
    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
        this.people = [];
    }
    addPerson(person) {
        this.people.push(person);
    }

    removePerson(firstName, lastName) {
        this.people = this.people.filter(
            (person) =>
                person.firstName !== firstName && person.lastName !== lastName
        );
    }

    findPerson(firstName, lastName) {
        return this.people.find(
            (person) =>
                person.firstName === firstName && person.lastName === lastName
        );
    }

    listPeople() {
        this.people.forEach((person) => {
            console.log(`Name: ${person.firstName}, Last name: ${person.lastName}, age: ${person.age}`);
        });
    }
}
const registry = new PeopleRegistry();
let person1 = new Person("Vasia", "Pupkin", "101");
let person2 = new Person("Adam", "Evin", "25");
let person3 = new Person("Baba", "Klava", "87");
let person4 = new Person("Adam", "Evin", "24");

registry.addPerson(person1);
registry.addPerson(person2);
registry.addPerson(person3);

registry.listPeople();

let filterOfPEople = registry.findPerson("Adam","Evin");
console.log("find: ", filterOfPEople);

registry.removePerson("Adam","Evin")
registry.listPeople();