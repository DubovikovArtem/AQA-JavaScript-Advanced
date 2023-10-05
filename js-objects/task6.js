/**
 * Створіть обєкт user з властивостями 
 * name, age, email, address. Address має бути 
 * обєктом address:
 *  {city: "your value", postalCode: "your value"}
 * 
 * Створіть функцію getUserInfo, яка приймає об'єкт
 *  користувача в якості параметру та використовує 
 * деструктуризацію для отримання name, age користувача
 * 
 * Створіть функцію getFullAddress, яка приймає об'єкт 
 * користувача в якості параметру та використовує 
 * деструктуризацію для отримання емейлу, міста та
 *  поштового коду користувача. 
 * // Наприклад: address: { city, state }
 */

let user = {
    name: "Artem",
    age: 31,
    email: "test@gmail.com",
    address: {
        city: "Dnipro",
        postalCode: "0000"
    }
}

function getUserInfo(obj) {
    const { name, age } = obj;
    console.log(`name: ${name}, age: ${age}`)
}

getUserInfo(user);

function getFullAddress(obj) {
    //simple version -----------------------------
    // const {email} = obj;
    // const {city, postalCode} = obj.address;
    //Advanced  version ---------------------------
    const { email, address: { city, postalCode } } = obj
    console.log(`email: ${email} \naddress:\n city: ${city}, state: ${postalCode}`)
}
getFullAddress(user);