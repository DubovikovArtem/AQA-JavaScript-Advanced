/**
 * Створіть вкладений об'єкт(обєкт у середині 
 * якого є ще один обєкт) з довільними властивостями. 
 * Пройдіться по цьому вкладеному об'єкту циклом і
 *  виведіть всі елементи в консоль.
 */

let newObj = {
    name: "name",
    age: "12",
    weight: "100",
    obj1: {
        name1: "name1",
        age1: "112",
        weight1: "1100",
        obj2: {
            name2: "name2",
            age2: "1122",
            weight2: "21100",
        }
    }
}

function showObj(obj) {
    let keyValue = '';
    for (let key in obj) {
        if (typeof (obj[key]) === "object") {
            keyValue += `${key} :\n ${showObj(obj[key])}`;
        } else {
            keyValue += `${key} : ${obj[key]}\n`;
        }
    }
    return keyValue;
}

console.log(showObj(newObj));