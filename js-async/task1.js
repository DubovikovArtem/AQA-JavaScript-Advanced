/**
 * Дано обєкт:

const userSettings = {
username: "john_doe",
theme: "dark",
language: "en",
notifications: true,
};
Зробіть сереалізацію та десеалізацію
 */
const userSettings = {
  username: "john_doe",
  theme: "dark",
  language: "en",
  notifications: true,
};

let serializeObj = JSON.stringify(userSettings);
console.log(serializeObj);

let deserializeJson = JSON.parse(serializeObj);
console.log(deserializeJson);
