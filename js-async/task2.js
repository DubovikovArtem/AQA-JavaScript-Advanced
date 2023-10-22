/**
Створіть асинхронну функцію delayAndLog(message, milliseconds), яка приймає повідомлення message і час у мілісекундах milliseconds.
Функція повинна затримати виконання на заданий час milliseconds, використовуючи setTimeout.
Після затримки, функція повинна вивести message на консоль.
Використайте async/await для керування асинхронним виконанням функції.
Викличте функцію delayAndLog з різними повідомленнями та затримками.
 */

async function delayAndLog(message, milliseconds) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
  console.log(message);
}

async function execute() {
  await delayAndLog("msg msg 1", 3000);
  await delayAndLog("msg msg 2", 5000);
  await delayAndLog("msg msg 3", 1000);
}

execute();
