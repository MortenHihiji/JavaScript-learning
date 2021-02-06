let beer = 0;

function shot(arrow) {
    console.log("Shots fired");

    let promise = new Promise((resolve, reject) => {
        setTimeout(function() {
            Math.random() > .5 ? resolve() : reject();
        }, 2000);
    });

    return promise;
}

function buyBeer() {
    console.log("You bought a beer");
}

function getMoney() {
    console.log("You got a money prize");
}

function win() {
    console.log("You won!");
    (beer == 1) ? buyBeer() : getMoney();
}

function loose() {
    console.log("You lost!");
}

shot({})
    .then(mark => console.log('You got it!'))
    .then(win)
    .catch(loose);