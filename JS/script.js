'use strict';

const str = "test";


//console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str);

const fruit = "some fruit";

console.log(fruit.indexOf('fruit'));

const logg = "Hello world";

console.log(logg.slice(6, 11));  // вырезает с 6й буквы по 11

console.log(logg.substring(6, 11));  // вырезает с 6й буквы по 11

console.log(logg.substr(6, 5));  // вырезает с 6й буквы, а вторая цифра 5 это количество букв


const num = 12.2;
console.log(Math.round(num)); //округляет число

const test = "12.2px";
console.log(parseInt(test)); // преобразовает значение в округленное число
console.log(parseFloat(test));

