/**
Tack4
Створіть клас CarClass з такими властивостями та методами:

Властивості:
make (марка автомобіля) - публічна .
model (модель автомобіля) - публічна.
year (рік випуску автомобіля) - публічна.
speed (поточна швидкість автомобіля) - приватна, початкова швидкість має = 0.

Методи:
constructor(make, model, year) - конструктор класу, який ініціалізує марку, модель та рік випуску автомобіля, а також встановлює початкову швидкість на нуль. (this.speed = 0)
getCarInfo() - абстрактний метод.
accelerate(speed) - публічний метод, який збільшує швидкість автомобіля на задану кількість кілометрів на годину.
brake(speed) - публічний метод, який зменшує швидкість автомобіля на задану кількість кілометрів на годину.

Створіть клас вашого автомобіля, наприклад (AudiClass) який буде наслідувати клас CarClass.
Додайте супер конструктор, та додайте нову властивість у свій конструктор:
color - приватна властивість.
Перезапишіть абстрактний метод getCarInfo() - має бути публічний метод, який виводить інформацію про автомобіль (марка, модель, рік та колір).
За допомогою геттера та сеттера створіть методи myCurrentColor(). У цих методах виводьте поточний колір автомобіля. у set метод має прийняти параметр color.

Cтворіть екземпляр класу вашого автомобіля який унаслідував властивості з батьківського класу.
Виведіть інформацію про ваш автомобіль (getCarInfo()).
Виконайте декілька операцій зі зміною швидкості (Тобто необхідно викликати ці методи accelerate(speed) та brake(speed))
За допомогою гетера та сетера змініть інформацію про ваш колір.
За допомогою методаgetCarInfo() виведіть інформацію про автомобіль
*/

class CarClass {
    #speed;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.#speed = 0;
    };

    getCarInfo() {
        console.log(`Car: ${this.make} ${this.model} "${this.year}"`);
    };

    accelerate(speed) {
        let acc = this.#speed += speed;
        return acc;
    };

    brake(speed) {
        let bre = this.#speed -= speed;
        return bre;
    };
}

class AudiClass extends CarClass {
    #color;
    constructor(make, model, year, color) {
        super(make, model, year);
        this.#color = color ?? "white";
    }
    getCarInfo() {
        console.log(`Car: ${this.make} ${this.model} "${this.year}", Color: ${this.#color}`);
    }

    get color() {
        return this.#color;
    }

    set color(myColor) {
        this.#color = myColor;
    }

    myCurrentColor(){
        return this.color;
    }
}

let audi = new AudiClass("Audi", "A3", "2000");
audi.color = "Rad";
console.log(audi.color)
audi.getCarInfo();
let color = audi.myCurrentColor();
console.log(color);

let speedAccelerate, speedBrake;
speedAccelerate = audi.accelerate(100);
console.log(speedAccelerate);

speedBrake = audi.brake(20);
console.log(speedBrake);

speedBrake = audi.brake(20);
console.log(speedBrake);



