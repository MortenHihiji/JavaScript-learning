let yourBudg = +prompt("Ваш бюджет на месяц?"),
    shopName = prompt("Название вашего магазина");

appData = {
    budget: yourBudg,
    name: shopName,
    shopGoods: []
};

// Начало цикла for 

// for (let i = 0; i < 3; i++) {
//     let ans = prompt("Какой тип товаров будем продавать?");

//     if ((typeof(ans)) === 'string' && ans != null && ans != '' && ans.length < 50) {
//         appData.shopGoods[i] = ans;
//     }
// }

// Конец цикла for

// Начало цикла while

// let i = 0;
// while (i < 3) {
//     let ans = prompt("Какой тип товаров будем продавать?");

//     if ((typeof(ans)) === 'string' && ans != null && ans != '' && ans.length < 50) {
//         appData.shopGoods[i] = ans;
//     } 
//     i++;
// }

// Конец цикла while

// Начало цикла do while

let i = 0;
do {
    let ans = prompt("Какой тип товаров будем продавать?");

    if ((typeof(ans)) === 'string' && ans != null && ans != '' && ans.length < 50) {
        appData.shopGoods[i] = ans;
    }
    i++
} while (i < 3);

// Конец цикла do while

alert(appData.budget/30);