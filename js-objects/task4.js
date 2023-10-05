/**
 * const englishBooks = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    }
];
Пройдіться циклом по масиву обєктів.

Якщо title буде “The Great Gatsby” то пропустіть виконання ітерації.
Якщо year буде більше ніж 1940, то виведіть у консоль значення ключа та властивості.
Якщо author “George Orwell” то замініть його на довільне значення. 
Виведіть оновлений масив об’єктів englishBooks
 */

const englishBooks = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    }
];

for (index of englishBooks) {
    for (key in index) {
        if (key === "title") {
            if (index[key] === "The Great Gatsby") {
                continue;
            }
        }
        if (key === "year") {
            if (index[key] > 1940) {
                console.log(key + " : " + index[key]);
            }
        }
        if (key === "author") {
            if (index[key] === "George Orwell") {
                index[key] = "test name";
            }
        }
        console.log(index[key]);
    }
}

console.log(englishBooks)
