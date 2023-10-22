/**
Tack3
Створіть клас ProductClass, який представляє товар у магазині. У класі Product повинні бути наступні властивості:
name - назва товару. price - ціна товару. quantity - кількість одиниць товару на складі. Клас ProductClass 
повинен мати наступні методи:

getTotalPrice() - повертає загальну вартість товару (ціна * кількість).
purchase(quantity) - зменшує кількість товару на складі на одиницю (передану як аргумент) після покупки.

Також перевірте чи кількість товарів на складі не = 0 та чи кількість товарів яка є не менша ніж кількість
товарів яка задана у аргументі.

Створіть 3 екземпляри класу Product для різних товарів та виконайте наступні дії:
// Приклад як це зробити, ви маєте мати 3 таких екземпляри класу.
const tShirt = new Product("t-shirt", 20, 100);
Виведіть загальну вартість кожного товарy для всіх ваших змінних екземпляра, використовуючи метод getTotalPrice().
Виконайте покупку purchase(quantity) для всіх товарів з екземпляру класу.
Виведіть залишок товарів на складі після кожної покупки.
*/

class ProductClass {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    let totalPrice = this.price * this.quantity;
    console.log(`Загальну вартість товару ${this.name} = ${totalPrice}`);
  }

  purchase(quantity) {
    let msg;
    if (this.quantity == 0) {
      msg = "Товарів на складі 0";
    } else {
      if (this.quantity < quantity) {
        msg = "Товарів на складі меньше";
      } else {
        msg = `Залишок товарів на складі: ${this.quantity - quantity}`;
      }
    }
    return msg;
  }
}
let res;

let tShirt = new ProductClass("T-Shirt", 5, 0);
tShirt.getTotalPrice();
res = tShirt.purchase(11);
console.log(res + "\n");

let shoes = new ProductClass("Shoes", 10, 100);
shoes.getTotalPrice();
res = shoes.purchase(10);
console.log(res + "\n");

let suit = new ProductClass("Suit", 20, 20);
suit.getTotalPrice();
res = suit.purchase(21);
console.log(res + "\n");
