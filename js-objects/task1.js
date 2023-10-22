/**
 * Створіть порожній обєкт automationQA.
Додайте властивості:
programmerName - стрінга, має містити ім’я програміста;
programmingLanguages - стрінга, має містити назву мови 
програмування;
age - число, має містити вік програміста;
languages - масив, який представляє мови, якими 
говорить програміст
preferences - обєкт, який буде представляти що
 необхідно для програміста. Наприклад:
{basicPrefences : “table”}.
Виведіть обєкт automationQA у консоль.
 */

let automationQA = {
  programmerName: "Artem",
  programmingLanguages: "JS",
  age: 31,
  languages: ["en", "uk", "ru"],
  preferences: {
    basicPrefences: "table",
  },
};

console.log(automationQA);
