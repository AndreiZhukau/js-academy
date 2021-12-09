// Урок номер 39 - Скрипты и время их выполнения. setTimeout и setInterval

'use strict';

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
          pos++;
          elem.style.top = pos + "px";
          elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

//clearInterval(timerId);

//function logger () {
//    if (i === 3) {
//      clearInterval(timerId);
//    }
//    console.log('text');
//    i++;
//}


//let id = setTimeout(function log() {
//    console.log('hello');
//    id = setTimeout(log, 500);
//}, 500);