let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll(".menu .menu-item");

let thirdMenuItem = menuItem[1];
menu.replaceChild(menuItem[2], menuItem[1]);
menu.insertBefore(thirdMenuItem, menuItem[3]);


let column = document.querySelectorAll(".column"),
    adv = document.querySelectorAll('.adv');

column[1].removeChild(adv[0]);


let title = document.getElementById("title");

title.textContent = 'Мы продаем только подлинную технику Apple';


document.body.style.background = "url('img/apple_true.jpg') no-repeat ";


let li = document.createElement('li');
li.textContent = "Пятый пункт";
li.classList.add('menu-item');

menu.appendChild(li);

let ans = prompt("Ваше отношенеи к apple"),
    ansField = document.getElementById("prompt");

ansField.textContent = ans;