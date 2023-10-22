function divideArray(num) {
  try {
    if (num.length < 2) {
      throw new Error("Error:The array should contain at least 2 el");
    }

    const rsult = [];
    for (let i = 1; i < num.length; i++) {
      if (
        typeof num[i - 1] !== "number" ||
        typeof num[i] !== "number" ||
        num[i - 1] === 0
      ) {
        throw new Error("Error: not a number or 0");
      }
      rsult.push(num[i] / num[i - 1]);
    }

    return rsult;
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Робота завершена");
  }
}

console.log(divideArray([10, 2, 5])); // Результат
//console.log(divideArray([5, 0, 2])); // Помилка
//console.log(divideArray([10, 'abc', 2])); // Помилка
//console.log(divideArray([3])); // Помилка
