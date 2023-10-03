//a)
const array = [1, 8, 10, 11, -8, 17, 20, 22, 40, 37, 45, 0, 3, 45, 56];
let newArrayA = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        newArrayA.push(array[i]);
    }
}
console.log(array);
console.log(newArrayA);

//b)
const arrayColors = ["yellow", "green", "apple", "red", "pink"];   
console.log(arrayColors);
arrayColors.sort();
console.log(arrayColors);
