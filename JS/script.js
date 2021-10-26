"use strict";

//if (4 == 9) {
//  console.log('ok!');
//}

//if (4 == 4) {
//  console.log('ok!');
//}

//if (4 == 9) {
//  console.log('ok!');
//} else {
//  console.log('error');
//}

//if (1) {
//  console.log('ok!');
//} else {
//  console.log('error');
//}


//const num = 50;

//if (num < 49) {
//  console.log('error');
//} else if (num > 100) {
//  console.log('Много');
//} else {
// console.log('ok');
//}

//(num === 50) ? console.log('ok') : console.log('error');



const num = 50;

switch (num) {
    case 49:
      console.log('неверно');
      break;
    case 100:
      console.log('неверно');
      break;
    case 50:
      console.log('верно');
      break;
    default:
      console.log('Не в этот раз');
      break;
}