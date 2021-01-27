let btn = document.getElementsByClassName('btn');

let box1 = document.querySelector('.box1'),
    box2 = document.querySelector('.box2');


function animation() {
    let pos = 0;

    let id = setInterval(action, 5);
    function action() {
        if (pos == 210) {
            clearInterval(id);
        } else {
            pos++;
            box1.style.top = pos + 'px';
            box2.style.left = pos + 'px';
        }
    }
}

btn[0].addEventListener("click", animation);