// Урок номер 29 - Действия с элементами на странице

'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circle = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');
//box.style.backgroundColor = 'blue';
//box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';

//for (let i = 0; i < hearts.length; i++) {
//    hearts[i].style.style.backgroundColor = 'blue';
//}

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div);
//wrapper.appendChild(div); устаревший метод

//wrapper.prepend(div);

//hearts[0].before(div);
//hearts[0].after(div);
//wrapper.insertBefore(div, hearts[0]); устаревший метод

//circle[0].remove();
//wrapper.removeChild(hearts[1]); устаревший метод

//hearts[0].replaceWith(circle[0]);
//wrapper.replaceChild(circle[0], hearts[0]); устаревший метод

div.innerHTML = "<h1>Hello World</h1>";

//div.textContent = "hello";

div.insertAdjacentHTML("beforeend", '<h2>Hi</h2>');