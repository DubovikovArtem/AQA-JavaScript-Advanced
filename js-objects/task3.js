/**
 * Створіть обєкт movie
Додайте властивості:
title - стрінга, має містити назву фільму;
releaseYear - число, має містити дату коли вийшов фільм;
genre - стрінга, має містити жанр.
Замініть жанр фільму, замініть тайтл.
Додайте 2 додаткові властивості 
// Наприклад actors: {mainRole : “Test Test”, ….}, director.
Видаліть title з обєкту movie.
Виведіть оновлений обєкт movie у консоль.
 */

let movie = {
  title: "king kong",
  releaseYear: 3005,
  genre: "mobkey",
};
movie.actors = { mainRole: "Test Test" };
movie.director = "Adolf Hitler";
console.log(movie);
delete movie.title;

console.log(movie);
